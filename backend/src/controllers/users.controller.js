const userCtrl = {};

const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.createUsers = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json({message: 'User Saved'})
}

userCtrl.getUser = async (req, res) => {
    const users = await User.findById(req.params.id);
    res.json(users)
}


userCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'})
}

module.exports = userCtrl;