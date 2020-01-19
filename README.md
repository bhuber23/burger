# Eat Da Burger

## Overview
The Eat Da Burger app uses an MVC (Model-View-Controller) design pattern to create an application which uses Node and MySQL to query and route the data and uses Handlebars to generate the HTML. 

## Link to Deployed App on Heroku
https://salty-river-25664.herokuapp.com/

## Features
Users are able to add the name of a burger which uses a POST request to add the burger name to the database. Using a GET request, the burgers that have been added will then display under the "Burgers to be Devoured" section. Each burger on this side will have a Devour It button created, which when clicked, will move the burger over to the "Throw It Away" section with a PUT request. Burgers in this section are given a "Trash It" button, which then uses DELETE to delete the burger from the database.

Three separate Handlebar files are used to render the HTML on the page. The index.handlebars will be used to handle the submit form and the two columns of burgers that are either devoured or ready to be thrown away. A partial handlebars file is then used to handle the button creation, determining if the button should be "Devour It!" or "Trash It." 


## Demo
![Example Demo](public/assets/img/demo.gif)

## Technologies Used
* jQuery
* CSS/Bootstrap
* NPM's:
    * MySQL
    * Express
    * Express-Handlebars
