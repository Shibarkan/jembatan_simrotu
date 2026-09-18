import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from '../pages/Home';
import Helpdesk from '../pages/HelpDesk';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/helpdesk" element={<Helpdesk />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;