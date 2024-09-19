// src/hooks/useGoals.js  

import { useContext } from 'react';  
import { GoalContext } from '../context/GoalContext';  

const useGoals = () => {  
    return useContext(GoalContext);  
};  

export default useGoals;