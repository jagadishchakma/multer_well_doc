const express = require("express");
const upload_single_controller = require("../controller/upload_single_controller");
const upload_router = express.Router();
const multer = require("multer");
const path = require("path");

// upload
const UPLOAD_FOLDER = "./uploads/single/";
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
		cb(null,UPLOAD_FOLDER);
	},
	filename: (req,file,cb)=>{
		const filExt = path.extname(file.originalname);
		const filename  = file.originalname.replace(filExt,"").toLowerCase().split(" ").join("-")+"-"+Date.now();
		cb(null,filename+filExt);
	}
});
const upload = multer({
    storage,
    limits: {
		fileSize: 1048576,
	},
	fileFilter: (req,file,cb)=>{
		if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
			cb(null, true);
		}else{
			cb(new Error("only jpg,png,jpeg extension accepted"));
		}
	}
});


upload_router.post("/single",upload.single("single_image"),upload_single_controller);


module.exports = upload_router;