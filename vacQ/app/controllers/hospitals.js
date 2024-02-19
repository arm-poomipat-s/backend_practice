const Hospital = require('../models/Hospital');
//@desc Get all hospitals
//@route GET /api/v1/hospitals
//@access Public
exports.getHospitals = async (req, res, next) => {

    try {
        const hospitals = await Hospital.find();
        res.status(200).json({data: hospitals});
    } catch (err) {
        res.status(400).json({message: "Hospitals Not Found"})
    }
    
    
}

//@desc Get  hospital
//@route GET /api/v1/hospital
//@access Public
exports.getHospital = async (req, res, next) => {

    try {
        const hospital = await Hospital.findById(req.params.id);

        if(!hospital) {
            return   res.status(400).json({message: "Hospital Not Found"})
    }
        res.status(200).json({succes: true, data: hospital});

    } catch (er) {
        res.status(400).json({message: "Hospital Not Found"});
    }
    

    
    
}

//@desc Create  hospital
//@route Post /api/v1/hospital
//@access Public
exports.createHospital = async (req, res, next) => {
    const hospital = await Hospital.create(req.body);
    res.status(200).json({succes: true, data: hospital});
}

//@desc update  hospital
//@route Put /api/v1/hospital
//@access Public
exports.updateHospital = async (req, res, next) => {
    try {
        const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!hospital) {
            return res.status(400).json({succes: false})
        }

        res.status(200).json({succes: true, data: hospital});
    } catch (err) {
        res.status(400).json({succes: false})
    }
    
}

//@desc delete  hospital
//@route Delete /api/v1/hospital
//@access Public
exports.deleteHospital = async (req, res, next) => {
    
    try {
        const hospital = await Hospital.findByIdAndDelete(req.params.id);

        if(!hospital) {
            return res.status(400).json({succes: false})
        }

        res.status(200).json({succes: true});
    } catch (err) {
        res.status(400).json({succes: false});
    }
    
}

