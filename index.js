// dependencies add
const express = require("express");
const home_router = require("./routers/homeRoute");
const error_middleware = require("./middleware/error_middlewar");
const not_found_middleware = require("./middleware/not_found_middleware");
const upload_router = require("./routers/uploadRoute");

//config app
const app = express();
const port = 8000;



//application use
app.use(express.json());
app.set("view engine", "ejs");






// routing setup
app.use("/", home_router);
app.use("/upload",upload_router);








// middleware for app configu
app.use(not_found_middleware);
app.use(error_middleware);



// server create
app.listen(port,()=>{
    console.log(`Surver running on port ${port}`);
});