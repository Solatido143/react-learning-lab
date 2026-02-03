import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubmissionForm from "./pages/SubmissionForm"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sub-form" element={<SubmissionForm/>} />
    </Routes>
  )
}

export default App
