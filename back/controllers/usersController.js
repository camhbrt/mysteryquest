const connectDB = require("../routes/db-config/db")

exports.getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users";
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};
