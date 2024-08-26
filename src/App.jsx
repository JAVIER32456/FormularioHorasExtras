import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from  './components/form/Form.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route/>
      </Routes>
    </Router>

  )
}

export default App
