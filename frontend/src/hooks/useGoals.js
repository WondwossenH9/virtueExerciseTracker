import { useContext } from 'react';
import { GoalContext } from '../context/GoalContext';

const useGoals = () => {
    const { goals, loading, error, removeGoal } = useContext(GoalContext);
    return { goals, loading, error, removeGoal };
};

export default useGoals;