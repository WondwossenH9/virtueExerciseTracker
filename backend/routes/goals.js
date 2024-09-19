const express = require('express');  
const { createGoal, getGoals, updateGoal, deleteGoal } = require('../controllers/goalController');  
const requireAuth = require('../middleware/requireAuth');  

const router = express.Router();  

// Require authentication for all goal routes  
router.use(requireAuth);  

router.post('/', createGoal);  
router.get('/', getGoals);  
router.put('/:id', updateGoal);  
router.delete('/:id', deleteGoal);  

module.exports = router;