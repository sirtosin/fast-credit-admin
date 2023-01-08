import { Route, Routes } from "react-router-dom";
import Bnpl from "./pages/bnpl/bnpl";
import Cards from "./pages/cards/cards";
import Dashboard from "./pages/dashboard/dashboard";
import Help from "./pages/help/help";
import Login from "./pages/login/login";
import Reports from "./pages/reports/reports";
import Wallet from "./pages/wallet/wallet";

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
      </Routes>
    </div>
  );
}

export default App;
