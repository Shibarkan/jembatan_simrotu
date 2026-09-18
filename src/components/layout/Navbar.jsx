import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger animasi ketika scroll lebih dari 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Wrapper luar tetap fixed, full-width, dan memposisikan konten di tengah
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      
      {/* Navbar inner yang dianimasikan (perhatikan penggunaan pointer-events-auto agar bisa di-klik) */}
      <nav 
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between ${
          isScrolled 
            ? 'mt-4 w-[90%] md:w-full max-w-4xl bg-sirotu-red text-white shadow-2xl rounded-[40px] py-3 px-8' 
            : 'mt-0 w-full max-w-full bg-transparent text-gray-900 py-6 px-6 md:px-12 rounded-none shadow-none'
        }`}
      >
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          SIROTU<span className={`transition-colors duration-700 ${isScrolled ? 'text-white' : 'text-sirotu-red'}`}>.</span>
        </Link>
        
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:opacity-75 transition-opacity">Beranda</Link>
          <a href="#inovasi" className="hover:opacity-75 transition-opacity">Inovasi</a>
          <Link to="/helpdesk" className="hover:opacity-75 transition-opacity">Helpdesk</Link>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;