// src/context/GoalContext.js  

import React, { createContext, useState, useEffect } from 'react';  
import { getGoals, createGoal, deleteGoal } from '../api/goalApi';  

export const GoalContext = createContext();  

export const GoalProvider = ({ children }) => {  
    const [goals, setGoals] = useState([]);  

    const fetchGoals = async () => {  
        const data = await getGoals();  
        setGoals(data);  
    };  

    const addGoal = async (goalData) => {  
        await createGoal(goalData);  
        fetchGoals();  
    };  

    const removeGoal = async (id) => {  
        await deleteGoal(id);  
        fetchGoals();  
    };  

    useEffect(() => {  
        fetchGoals();  
    }, []);  

    return (  
        <GoalContext.Provider value={{ goals, addGoal, removeGoal }}>  
            {children}  
        </GoalContext.Provider>  
    );  
};