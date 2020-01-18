var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },


    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ??(??) VALUES(?)";
        connection.query(queryString, [table, cols, vals], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, col, val, conditionCol, conditionVal, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, val, conditionCol, conditionVal], function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;