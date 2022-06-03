const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401); // even if we have req it must have roles
        const rolesArray = [...allowedRoles];

        // mapping over the roles sent from the jwt and comparing them getting true and false
        // then we want ot find the first true
        const result = req.roles
            .map((role) => rolesArray.includes(role))
            .find((val) => val === true); // includes checks if its in the array, all we need is one true
        if (!result) return res.sendStatus(401);
        next();
    };
};

module.exports = verifyRoles;
