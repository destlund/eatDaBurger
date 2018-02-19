// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.burgers.findAll({}).then(function (results) {
            var hbsObject = {
                burgers: results
            };

            res.render("index", hbsObject);
            console.log(hbsObject)
            // res.render("hof", hbsObject);
        });
    });
    app.get("/newCust", function (req, res) {
        db.burgers.findAll({}).then(function (results) {
          // console.log(results);
    
          var hbsObject = {
            burgers: results
          };
    
          res.render("newCust", hbsObject);
          // res.render("hof", hbsObject);
        });
      });
      app.get("/hof", function (req, res) {
        db.customers.findAll({
          include: [{
            model: db.burgers,
            required: false
          }],
          order: [
            ['createdAt', 'DESC']
          ]
        }).then(function (results) {
          // console.log(results);
          // console.log(results[0].burgers);
          // console.log(results[0].customers);
          var hbsObject = {
            votes: results
          };
          res.render("hof", hbsObject);
          // console.log(hbsObject);
        });
      });
};

