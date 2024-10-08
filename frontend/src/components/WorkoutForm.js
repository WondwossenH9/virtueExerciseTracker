import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [sets, setSets] = useState('')
    const [restInMin, setRestInMin] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const workout = { title, weight, reps, sets, restInMin }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('') //reseting the form
            setWeight('') //resetting the form
            setReps('') //resetting the form
            setSets('') //resetting the form
            setRestInMin('') //resetting the form
            setError(null)
            setEmptyFields([])
            console.log("New workout created.", json)
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Your workout</h3>

            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Weight (in KG): </label>
            <input
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                className={emptyFields.includes('weight') ? 'error' : ''}
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <label>Sets:</label>
            <input
                type="number"
                onChange={(e) => setSets(e.target.value)}
                value={sets}
                className={emptyFields.includes('sets') ? 'error' : ''}
            />
            <label>RestInMin:</label>
            <input
                type="number"
                onChange={(e) => setRestInMin(e.target.value)}
                value={restInMin}
                className={emptyFields.includes('restInMin') ? 'error' : ''}
            />

            <button>Create Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}


export default WorkoutForm