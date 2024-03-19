const { Manager } = require("../models");

//@desc Get all managers
//@route GET /managers
//@access Public
exports.getAllManagers = async (req, res, next) => {
  const managers = await Manager.findAll();

  if (!managers || managers.length === 0) {
    return res.status(400).json({ message: "Manager Not Found" });
  }

  res.status(200).json(managers);
};

//@desc Create manager
//@route POST /managers
//@access Public
exports.createManager = async (req, res, next) => {
  const { name, experience } = req.body;

  if (!name && !experience) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newManager = await Manager.create({
      name: name,
      experience: experience,
    });
    res.status(200).json({ message: "Created new manager" });
  } catch (err) {
    res.status(400).json(err);
  }
};

//@desc Update manager
//@route PUT /managers
//@access Public
exports.updateManager = async (req, res, next) => {
  const { name, experience } = req.body;
  const id = req.params.id;

  const manager = await Manager.findByPk(id);

  if (!manager) {
    return res.status(400).json({ message: "Manager Not Found" });
  }

  if (!name && !experience) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await manager.update({ name: name, experience: experience });
    await manager.save();
    res.status(200).json({ message: "Updated Manager" });
  } catch (err) {
    res.status(400).json(err);
  }
};

//@desc Delete manager
//@route DELETE /managers
//@access Public
exports.deleteManager = async (req, res, next) => {
    const id = req.params.id;
    const manager = await Manager.findByPk(id);

    if(!manager) {
        res.status(400).json({message:"Manager Not Found"});
    }

    await manager.destroy();
    res.status(200).json({message: "Deleted Manager"});
};
