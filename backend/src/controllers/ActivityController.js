const models = require("../models");

class ActivityController {
  static browse = (req, res) => {
    models.activity
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ActivityController;
