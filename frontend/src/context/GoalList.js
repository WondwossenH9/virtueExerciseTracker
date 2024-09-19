// src/components/GoalList.js  

import React from 'react';  
import useGoals from '../hooks/useGoals';  
import GoalProgressChart from './GoalProgressChart';  

const GoalList = () => {  
    const { goals, removeGoal } = useGoals();  

    return (  
        <div>  
            <GoalProgressChart goals={goals} />  
            <ul>  
                {goals.map((goal) => (  
                    <li key={goal._id}>  
                        {goal.goalType} - {goal.currentValue}/{goal.targetValue}  
                        <button onClick={() => removeGoal(goal._id)}>Delete</button>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default GoalList;