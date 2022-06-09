require("dotenv").config();
const fs = require("fs");
const express = require("express");
const app = express();
const DBController = require("./controllers/databaseController");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const { logger } = require("./middleware/logEvents");
const credentials = require("./middleware/credentials");
const cookieParser = require("cookie-parser");
const verifyJWT = require("./middleware/verifyJWT");
const mongoose = require("mongoose");
const path = require("path");

// const credential = { key: privateKey, cert: certificate };

// logger
app.use(logger);

// handle options credients check - before CORS! and fetch cookies crednetials requirement
app.use(credentials);
// app.use(express.static(__dirname + "/public/build/"));
app.use(cors(corsOptions));

//parsing form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middleware for cokies
app.use(cookieParser());

// routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));
app.use("/image", require("./routes/api/images"));
app.use(verifyJWT);
app.use("/api/books", require("./routes/api/books"));

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        return res.send("<h1>404 page not found</h1>");
    } else if (req.accepts("json")) {
        return res.json({ error: "404 Not Found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

try {
    if (!fs.existsSync(path.join(__dirname + "/Assets/Images"))) {
        fs.mkdir(path.join(__dirname + "/Assets/Images"));
    }
} catch (err) {
    console.log(err);
}

// handling error
app.use(errorHandler);

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credential, app);

// httpServer.listen(process.env.PORT || 8000);
// httpsServer.listen(process.env.PORT || 8443);
new DBController();
mongoose.connection.once("open", () => {
    console.log("open");
    app.listen(process.env.PORT || 8000, () => {});

    app.on("beforeExit", () => {
        console.log("beforeExit");
        DBController.endConnect();
    });

    app.on("disconnect", () => {
        console.log("disconnect");
        DBController.endConnect();
    });
});
