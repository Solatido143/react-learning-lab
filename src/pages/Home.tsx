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
        </>
    )
}