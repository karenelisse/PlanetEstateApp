var mongoose = require("mongoose");
mongoose.connect("mongodb://vader:Darth1@ds257838.mlab.com:57838/planetestate", options);

mongoose.set("debug", true);

module.exports.User = require("./user");