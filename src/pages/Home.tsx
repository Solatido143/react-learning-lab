import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div>
                <Link to="/submission-form">Go to Submission Form</Link>
            </div>
            <div>
                <Link to="/joke-generator">Go to Joke Generator</Link>
            </div>
            <div>
                <Link to="/password-validator">Go to Password Validator</Link>
            </div>
            <div>
                <Link to="/poker">Go to Poker</Link>
            </div>
        </>
    )
}