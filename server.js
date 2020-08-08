const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require("./controllers/burgersController.js");

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});