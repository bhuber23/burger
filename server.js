var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});