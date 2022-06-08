// const usersDB = {
//     users: require("../model/users.json"),
//     setUsers: function (data) {
//         this.users = data;
//     },
// };

// this is for jwt
const jwt = require("jsonwebtoken");
require("dotenv").config();
const DBController = require("./databaseController");

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }

    const refreshToken = cookies.jwt;

    const foundUser = await DBController.getUserByRefreshToken(refreshToken);

    if (!foundUser) {
        return res.sendStatus(403); // Forbidden
    }

    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username)
                return res.sendStatus(403);

            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                { UserInfo: { username: decoded.username, roles: roles } },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "30m" }
            );
            res.json({ accessToken });
        }
    );
};

module.exports = { handleRefreshToken };
