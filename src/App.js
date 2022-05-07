import { Fragment } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
    return (
        <FeedbackProvider>
            <Fragment>
                <Header />
                <div className='container'>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                </div>
            </Fragment>
        </FeedbackProvider>
    )
}

export default App