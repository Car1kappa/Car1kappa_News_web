const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserType = {
    username: String,
    password: String,
    gender: String,
    introduction: String,
    avatar: String,
    role: Number, //Manager 1, editor 2
}
const UserModel = mongoose.model("user", new Schema(UserType))

module.exports(UserModel)