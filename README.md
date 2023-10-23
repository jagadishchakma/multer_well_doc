# file accepted
- req.file,req,files
- req.body
# single file upload
```
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
```



# multiple files upload
```

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


upload_router.post("/single",upload.array("multi_image",5),upload_single_controller);
```


# multi input files upload
```

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
		if(file.fieldname == "image"){
			if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
				cb(null, true);
			}else{
				cb(new Error("only jpg,png,jpeg extension accepted"));
			}
		}else if(file.fieldname == "doc"){
			if(file.mimetype == "application/pdf"){
				cb(null, true);
			}else{
				cb(new Error("only pdf file accepted"));
			}
		}
	}
});


upload_router.post("/single",upload.fields([
	{name: "image",maxCount:2},
	{name: "pdf", maxCount: 3},
	{name: "docx",maxCount:1}
]),upload_single_controller);
```