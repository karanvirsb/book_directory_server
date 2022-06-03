// const usersDB = {
//     users: require("../model/users.json"),
//     setUsers: function (data) {
//         this.users = data;
//     },
// };

// const fsPromises = require("fs").promises;
// const path = require("path");
const bcrypt = require("bcrypt");
const DBController = require("./databaseController");

const handleNewUser = async (req, res) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res
            .status(400)
            .json({ message: "Username and password are required" });
    }

    //check for duplicates in the db
    const duplicate = await DBController.getUser(user);

    if (duplicate) {
        return res.sendStatus(409); // 409 is a conflict
    }

    try {
        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // store the new user
        const newUser = {
            username: user,
            roles: { User: 2001 },
            password: hashedPassword,
        };
        const userAdded = DBController.createUser(newUser);
        // usersDB.setUsers([...usersDB.users, newUser]);
        // // updating the DB (json)
        // await fsPromises.writeFile(
        //     path.join(__dirname, "..", "model", "users.json"),
        //     JSON.stringify(usersDB.users)
        // );
        if (userAdded) {
            res.status(201).json({ success: `New user ${user} created!` });
        } else {
            res.status(500).json({ message: "Server Error" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { handleNewUser };
