var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(col, val, conditionCol, conditionVal, cb) {
        orm.updateOne("burgers", col, val, conditionCol, conditionVal, function(res){
            cb(res);
        });
    },

    delete: function(conditionCol, conditionVal, cb){
        orm.delete("burgers", conditionCol, conditionVal, function(res){
            cb(res)
        });
    }
}

module.exports = burger;