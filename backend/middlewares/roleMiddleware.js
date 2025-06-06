const authorizeRoles = (roles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: User not authenticated" });
      }
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Unauthorized Access! You are not authorized to access this resource." });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
};

module.exports = { authorizeRoles };
