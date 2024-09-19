import React from 'react';
import { Bar } from 'react-chartjs-2';

const GoalProgressChart = ({ goals }) => {
    const data = {
        labels: goals.map(goal => goal.name),
        datasets: [
            {
                label: 'Progress (%)',
                data: goals.map(goal => goal.progress),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <div>
            <h2>Goal Progress Chart</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default GoalProgressChart;