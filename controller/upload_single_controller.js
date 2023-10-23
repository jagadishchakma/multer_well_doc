function upload_single_controller(req,res){
    console.log(req.file.path);
    console.log(req.body.email);
    res.json({path: req.file.path,email:req.body.email});
};

module.exports = upload_single_controller;