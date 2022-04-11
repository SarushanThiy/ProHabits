const Habit = require('../models/Habit');


async function index (req, res) {
    try {
        const habits = await Habit.all;
        res.status(200).json(habits)  // habits is sql table
    } catch (err) {
        res.status(500).json({ err })
    }
};

async function show (req, res) {
    try {
        const habits = await Habit.find(req.params.id);
        const users = await habits.users;
        res.status(200).json({...habits, users})
    } catch (err) {
        res.status(404).send(err);
    }
};

async function create(req, res) {
    try {
        const habits = await Habit.create(req.body)
        res.status(201).json(habits)
    } catch (err) {
        res.status(422).send(err)
    }
};


module.exports = { index, show, create };
