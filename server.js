var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var route1 = require("./controllers/placesController.js");
var route2 = require("./controllers/usersController.js");
var route3 = require("./controllers/searchController.js");
var route4 = require("./controllers/filesController.js");
            
app.use(route1, route2, route3, route4);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
