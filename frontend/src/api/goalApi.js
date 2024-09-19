const API_URL = '/api/goals'

// Fetch all goals  
export const getGoals = async () => {
    const response = await fetch(`${API_URL}/goals`);
    if (!response.ok) {
        throw new Error('Failed to fetch goals');
    }
    return await response.json();
};

// Create a new goal  
export const createGoal = async (goalData) => {
    const response = await fetch(`${API_URL}/goals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(goalData), // Pass the goal data in the request body  
    });

    if (!response.ok) {
        throw new Error('Failed to create goal');
    }
    return await response.json(); // Return the created goal object  
};

// Delete a goal by ID  
export const deleteGoal = async (id) => {
    const response = await fetch(`${API_URL}/goals/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete goal');
    }
    return await response.json(); // Optionally return the response, could contain confirmation  
};