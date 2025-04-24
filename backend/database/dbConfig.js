const mysql = require("mysql2")


let db = mysql.createConnection({
    port:50852,
    host:"metro.proxy.rlwy.net",
    user:"root",
    password:"KBCEeExCIPTgJeKIIPLqeahrASKhHCeb",
    database:"eccomerce"
})

db.connect((err,res)=>{

    err?console.log("Failed"):console.log("Database connected successfully")
    
}
)


module.exports=db