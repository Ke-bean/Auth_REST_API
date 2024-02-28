const config = require("config")
const mongoose  =  require("mongoose");
const Joi = require("joi");
const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const app = express();
if(!config.get("jwtPrivateKey")){
    console.error("Fatal Error: JwtPrivateKey is not defined.")
    process.exit(1);
}

mongoose.connect("mongodb://localhost/Users")
.then(()=> console.log("connected to db"))
.catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/users", users);
app.use("/auth", auth)
const port = process.env.PORT || 3000;
app.listen(port , ()=> console.log(`listening on port ${port}...`))