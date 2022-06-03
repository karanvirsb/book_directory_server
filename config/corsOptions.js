const allowedOrigins = require("./allowedOrigins");
// the origin is from the person requesting it
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // first param is error, the true is that it is allowed
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
