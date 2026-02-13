import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubmissionForm from "./pages/SubmissionForm"
import JokeGenerator from "./pages/JokeGenerator"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/submission-form" element={<SubmissionForm/>} />
      <Route path="/joke-generator" element={<JokeGenerator/>} />
    </Routes>
  )
}

export default App
