import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from '../pages/Home';
import Helpdesk from '../pages/HelpDesk';
    
function App() {
  return (
    <Router>
      {/* Wrapper utama agar background full screen jika pakai Tailwind */}
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        
        {/* Navbar akan selalu muncul di semua halaman */}
        <Navbar />

        {/* Area konten yang berubah-ubah sesuai URL */}
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