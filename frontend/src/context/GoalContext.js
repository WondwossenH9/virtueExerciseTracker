import React, { createContext, useState, useEffect } from 'react';
import { getGoals, createGoal, deleteGoal } from '../api/goalApi';

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state  
    const [error, setError] = useState(null); // Added error state  

    const fetchGoals = async () => {
        try {
            const data = await getGoals();
            setGoals(data);
        } catch (err) {
            console.error('Error fetching goals:', err);
            setError('Failed to load goals.'); // Set error message  
        } finally {
            setLoading(false); // Stop loading  
        }
    };

    const addGoal = async (goalData) => {
        try {
            await createGoal(goalData);
            fetchGoals();
        } catch (err) {
            console.error('Error adding goal:', err);
            setError('Failed to add goal.');
        }
    };

    const removeGoal = async (id) => {
        try {
            await deleteGoal(id);
            fetchGoals();
        } catch (err) {
            console.error('Error removing goal:', err);
            setError('Failed to remove goal.');
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    return (
        <GoalContext.Provider value={{ goals, loading, error, addGoal, removeGoal }}>
            {children}
        </GoalContext.Provider>
    );
};