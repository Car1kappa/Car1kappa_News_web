const UserService = require("../../service/admin/UserService")

const UserController = {
    login:async (req,res) =>{
        //req.body
        var result = await UserService.login(req.body)
        if(result.length === 0){
            res.send({
                code: "-1",
                error:"Username or Password does not match"
            })
        }
        else{
            res.send({
                ActionType:"Ok"
            })
        }
    }
}
module.exports = UserController