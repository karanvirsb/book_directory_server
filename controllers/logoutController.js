const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
        this.users = data;
    },
};

const fsPromises = require("fs").promises;
const path = require("path");
const DBController = require("./databaseController");

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) {
        return res.sendStatus(204); // No content to send back
    }

    const refreshToken = cookies.jwt;

    // is the refresh token in the DB?
    const foundUser = await DBController.getUserByRefreshToken(refreshToken);
    // const foundUser = usersDB.users.find(
    //     (person) => person.refreshToken === refreshToken
    // );

    // no found user but we have a cookie
    if (!foundUser) {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        });
        return res.sendStatus(204); // successful but no content
    }

    // Delete refreshToken in db
    const updated = await DBController.updateUser(foundUser.username, [
        { refreshToken: "" },
    ]);
    // const otherUsers = usersDB.users.filter(
    //     (person) => person.refreshToken !== foundUser.refreshToken
    // );
    // const currentUser = { ...foundUser, refreshToken: "" };
    // usersDB.setUsers([...otherUsers, currentUser]);
    // await fsPromises.writeFile(
    //     path.join(__dirname, "..", "model", "users.json"),
    //     JSON.stringify(usersDB.users)
    // );
    if (updated) {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        }); // secure: true  - serves on https
        res.sendStatus(204);
    }
};

module.exports = { handleLogout };
