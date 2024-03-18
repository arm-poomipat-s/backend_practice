//@desc Get all managers
//@route GET /managers
//@access Public
exports.getAllManagers = (req, res ,next) =>{
    res.status(200).json({msg:"I am managers"});
};