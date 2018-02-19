// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbburger) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbburger);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.burgers.create({
      "burger_name": req.body.burger_name
    }).then(function(dbburger) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(dbburger);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    // We just have to specify which burger we want to destroy with "where"
    db.burgers.destroy({
      where: {
        "id": req.params.id
      }
    }).then(function(dbburger) {
      res.json(dbburger);
    });

  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/api/burgers/:id", function(req, res) {
    db.burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  
  app.post("/api/customers", function (req, res) {
    db.customers.create({
      customer_name: req.body.customer_name,
      burgerId: req.body.burgerId
    }).then(function (results) {
      res.json(results);

    })
      .catch(function (err) {
        res.json(err);
      })
  });
};
