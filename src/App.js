import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './Sidebar/components/Dashboard'
import Expences from './Sidebar/components/Expences';
import Layout from './Sidebar/components/Layout';
//import Select from './Sidebar/Menu/Select';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route index element={<Expences />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App ;
