import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubmissionForm from "./pages/SubmissionForm"
import JokeGenerator from "./pages/JokeGenerator"
import PasswordValidator from "./pages/PasswordValidator"
import Poker from "./pages/Poker"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/submission-form" element={<SubmissionForm/>} />
      <Route path="/joke-generator" element={<JokeGenerator/>} />
      <Route path="/password-validator" element={<PasswordValidator/>} />
      <Route path="/poker" element={<Poker/>} />
    </Routes>
  )
}

export default App
