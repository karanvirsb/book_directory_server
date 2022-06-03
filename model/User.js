const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true, minLength: 4, maxLength: 24 },
    roles: Object,
    password: { type: String, required: true },
    refreshToken: String,
});

const User = mongoose.model("Users", userSchema, "Users");

module.exports = User;
