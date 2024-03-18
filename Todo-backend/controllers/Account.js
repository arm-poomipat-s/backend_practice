//@desc Get all Accounts
//@route GET /accounts
//@access Public
exports.getAllAccounts = (req, res, next) => {
    res.status(200).json({msg: "Hello I'm accounts"})
};