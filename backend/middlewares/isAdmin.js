const jwt = require('jsonwebtoken');
const adminModel = require('../models/admin_model');

module.exports = async (req, res, next) => {
    try {
        console.log("Hello Admin Auth ");
        const token = req.cookies.token;
        
        console.log(req.cookies);

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);

        // console.log(decoded);

        const admin = await adminModel
            .findById(decoded.userId)
            .select("-password");

        if (!admin) {
            return res.status(401).json({ message: "Admin Not Found " });
        }

        if (admin.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized Admin" });
        }

        req.role = decoded.role;
        req.email = decoded.email;
        req.admin = admin;

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};
