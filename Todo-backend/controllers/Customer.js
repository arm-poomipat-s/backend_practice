//@desc Get all customers
//@route GET /customers
//@access Public
exports.getAllCustomers = (req, res, next) => {
    res.status(200).json({msg:"I am customers"});
};