// this is for jwt
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const DBController = require("./databaseController");

const handleLogin = async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        return res
            .status(400)
            .json({ message: "Username and password are required" });
    }
    const foundUser = await DBController.getUser(user);

    if (!foundUser) {
        console.log("not found");
        return res.sendStatus(401); // this means unauthorized
    }

    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs (refresh and access token)
        const accessToken = jwt.sign(
            { UserInfo: { username: foundUser.username, roles: roles } },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "10m" } // maybe make this 5-15 mins
        );
        const refreshToken = jwt.sign(
            { username: foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: true,
        });
        res.json({ accessToken: accessToken }); // store it in memory
        // saving refreshToken with current user (allows to invalidate when logout)
        DBController.updateUser(foundUser.username, [
            { refreshToken: refreshToken },
        ]);
    } else {
        return res.sendStatus(401);
    }
};

module.exports = { handleLogin };
