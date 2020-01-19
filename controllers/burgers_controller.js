var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne("burger_name", req.body.burger_name, function(result){
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", function(req, res){

    burger.updateOne("devoured", true, "id", req.params.id, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        }else{
        res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    burger.delete("id", req.params.id, function(result){
        if (result.affectedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports = router;