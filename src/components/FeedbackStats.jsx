import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext)

    // Calculate ratings average
    let average = feedback.reduce((acc, current) => {
        return acc + current.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h2>{feedback.length} Reviews</h2>
            <h2>Average Rating: {isNaN(average) ? 0 : average}</h2>
        </div>
    )
}

export default FeedbackStats