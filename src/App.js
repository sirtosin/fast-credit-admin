import { Route, Routes } from 'react-router-dom'
import Bnpl from './pages/bnpl/bnpl'
import Cards from './pages/cards/cards'
import Dashboard from './pages/dashboard/dashboard'
import Help from './pages/help/help'
import Investments from './pages/investments/investments'
import Login from './pages/login/login'
import Customer from './pages/manage/customer/cutomer'
import ManageAdmin from './pages/manageAdmin/manageAdmin'
import Reports from './pages/reports/reports'
import Wallet from './pages/wallet/wallet'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/bnpl" element={<Bnpl />} />
        <Route path="/help" element={<Help />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/manage/admin" element={<ManageAdmin />} />
        <Route path="/manage/customer" element={<Customer />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </div>
  )
}

export default App
