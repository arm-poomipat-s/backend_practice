
//@desc Get all hospitals
//@route GET /api/v1/hospitals
//@access Public
exports.getHospitals = (req, res, next) => {
    res.status(200).json({succes: true, message: "Get all Hospitlas"});
}

//@desc Get  hospital
//@route GET /api/v1/hospital
//@access Public
exports.getHospital = (req, res, next) => {
    res.status(200).json({succes: true, message: `get hospital ${req.params.id}`});
}

//@desc Create  hospital
//@route Post /api/v1/hospital
//@access Public
exports.createHospital = (req, res, next) => {
    res.status(200).json({succes: true, message: "create hospital"});
}

//@desc update  hospital
//@route Patch /api/v1/hospital
//@access Public
exports.updateHospital = (req, res, next) => {
    res.status(200).json({succes: true, message: "update hospital"});
}

//@desc delete  hospital
//@route Delete /api/v1/hospital
//@access Public
exports.deleteHospital = (req, res, next) => {
    res.status(200).json({message: "delete hospital"});
}

