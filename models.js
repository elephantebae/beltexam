const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect("mongodb://localhost/belt");
petSchema = new mongoose.Schema({
    petType: { type: String, required: [true, "you must put a pet Type PLEASE!"], minlength: [3, "Pet Type must be minimum length must be 3"] },
    name: { type: String, unique: true, required: [true, "Please write a name for your pet"], minlength: [3, "name must be minimum length must be 3"] },
    desc: { type: String, minlength: [3, "description must minimum length must be 3"] },
    skill: [{ skill1: String, skill2: String, skill3: String }],
    likes: { type: Number, default: 0 }
}, { timestamps: true })
petSchema.plugin(uniqueValidator);
pets = mongoose.model("pets", petSchema);
module.exports = pets;