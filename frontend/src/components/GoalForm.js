// src/components/GoalForm.js  

import React, { useState } from 'react';  
import useGoals from '../hooks/useGoals';  

const GoalForm = () => {  
    const { addGoal } = useGoals();  
    const [goalType, setGoalType] = useState('');  
    const [targetValue, setTargetValue] = useState('');  
    const [endDate, setEndDate] = useState('');  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        addGoal({ goalType, targetValue, endDate });  
        setGoalType('');  
        setTargetValue('');  
        setEndDate('');  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input  
                type="text"  
                value={goalType}  
                onChange={(e) => setGoalType(e.target.value)}  
                placeholder="Goal Type"  
                required  
            />  
            <input  
                type="number"  
                value={targetValue}  
                onChange={(e) => setTargetValue(e.target.value)}  
                placeholder="Target Value"  
                required  
            />  
            <input  
                type="date"  
                value={endDate}  
                onChange={(e) => setEndDate(e.target.value)}  
                required  
            />  
            <button type="submit">Add Goal</button>  
        </form>  
    );  
};  

export default GoalForm;