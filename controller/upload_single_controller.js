function upload_single_controller(req,res){
    console.log(req.file.path);
    console.log(req.body.email);
    res.send("Single file upload controller");
};

module.exports = upload_single_controller;