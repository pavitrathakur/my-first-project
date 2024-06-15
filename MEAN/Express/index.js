//importing expree into our application
const express = require("express"); 
const path=require("path");
const app= express();

const port =process.env.PORT ||3000 ;
const static_path =(path.join(__dirname , "./projectt/src/app/signup"));

 app.use(express.static(static_path));

app.get("/", (req,res) => {
  res.send("Hello there!!!")
});
 app.listen(port,()=> {
  console.log(`server is running at port number  ${port}`);
 })
