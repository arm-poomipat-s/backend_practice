//@desc Get all branchs
//@route GET /branchs
//@access Public
exports.getAllBranchs = (req, res, next) => {
    res.status(200).json({msg:"I am branchs"})
};