const Goal = require('../models/goalModel');

// Create a new goal  
const createGoal = async (req, res) => {
    const { goalType, targetValue, endDate } = req.body;
    const userId = req.user._id;

    try {
        const goal = await Goal.create({ userId, goalType, targetValue, endDate });
        res.status(201).json(goal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get goals for a user  
const getGoals = async (req, res) => {
    const userId = req.user._id;

    try {
        const goals = await Goal.find({ userId });
        res.status(200).json(goals);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a goal  
const updateGoal = async (req, res) => {
    const { id } = req.params;

    try {
        const goal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(goal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a goal  
const deleteGoal = async (req, res) => {
    const { id } = req.params;

    try {
        await Goal.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createGoal, getGoals, updateGoal, deleteGoal };