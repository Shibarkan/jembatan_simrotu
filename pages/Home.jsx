import { ArrowRight, Leaf, Zap, ShieldCheck, Maximize, Activity, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      
      {/* 1. HERO SECTION (Responsif: Teks membesar di Desktop, mengecil di HP) */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 lg:px-12 pt-20">
        {/* Ornamen/Background Pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-100 to-gray-50">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-12 md:mt-0">
       
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-sirotu-dark mb-6 tracking-tighter leading-[1.1]">
            JEMBATAN <span className="text-sirotu-red bg-clip-text text-transparent bg-gradient-to-r from-sirotu-red to-red-500">SIROTU</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Mempersatukan kehidupan pascabencana melalui desain jembatan pelengkung inovatif yang tangguh, efisien, dan berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#inovasi" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sirotu-dark text-white px-8 py-4 rounded-full font-bold hover:bg-sirotu-red transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1">
              Jelajahi Teknologi <ArrowRight size={20} />
            </a>
            <Link to="/helpdesk" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-sirotu-dark border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300">
              Pusat Aduan
            </Link>
          </div>
        </div>

        {/* Gambar Render 3D Jembatan */}
        <div className="relative z-10 mt-16 md:mt-24 max-w-6xl mx-auto w-full">
          <div className="w-full h-64 md:h-80 lg:h-[500px] bg-slate-900 rounded-t-[3rem] border-t border-x border-gray-200/50 overflow-hidden shadow-2xl">
            <iframe 
              src="/jembatan-3d.html" 
              className="w-full h-full border-none"
              title="Render 3D Jembatan Pelengkung"
            />
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS (Responsif: 2 kolom di HP, 4 kolom di Laptop) */}
      <section className="bg-sirotu-dark text-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-700">
          <div className="text-center px-4">
            <Maximize className="mx-auto mb-3 text-sirotu-red" size={32} />
            <h4 className="text-3xl font-black mb-1">150m</h4>
            <p className="text-gray-400 text-sm">Total Bentang Jembatan</p>
          </div>
          <div className="text-center px-4">
            <Activity className="mx-auto mb-3 text-sirotu-red" size={32} />
            <h4 className="text-3xl font-black mb-1">10°</h4>
            <p className="text-gray-400 text-sm">Kemiringan Pelengkung</p>
          </div>
          <div className="text-center px-4">
            <ShieldCheck className="mx-auto mb-3 text-sirotu-red" size={32} />
            <h4 className="text-3xl font-black mb-1">BJ41</h4>
            <p className="text-gray-400 text-sm">Baja Struktural Kuat</p>
          </div>
          <div className="text-center px-4">
            <Leaf className="mx-auto mb-3 text-sirotu-red" size={32} />
            <h4 className="text-3xl font-black mb-1">100%</h4>
            <p className="text-gray-400 text-sm">Green Infrastructure</p>
          </div>
        </div>
      </section>

      {/* 3. FILOSOFI & KONSEP (Responsif: Atas-bawah di HP, Kiri-kanan di Laptop) */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-sirotu-red font-bold tracking-wider uppercase text-sm">Identitas Kultural</h2>
          <h3 className="text-3xl md:text-5xl font-black leading-tight text-sirotu-dark">
            Filosofi <br/> <span className="italic">Pasiromu Tuwu</span>.
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Diambil dari bahasa lokal yang bermakna <strong className="text-gray-900">"mempersatukan kehidupan"</strong>. Jembatan Sirotu bukan sekadar struktur baja dan beton, melainkan simbol kebangkitan masyarakat Donggala.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-100 p-1 rounded text-sirotu-red mt-1"><ChevronRight size={16}/></div>
              <p className="text-gray-700">Railing dengan ornamen ukiran khas Palu-Donggala.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-100 p-1 rounded text-sirotu-red mt-1"><ChevronRight size={16}/></div>
              <p className="text-gray-700">Struktur pelengkung miring 10° memecah gaya seismik aktif Sesar Palu-Koro.</p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full">
          {/* Box Estetik */}
          <div className="aspect-square md:aspect-video lg:aspect-square bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-sirotu-red/80 to-transparent flex items-center justify-center p-8 text-white">
                <p className="text-center font-medium text-lg italic tracking-widest">
                  [ Visualisasi Ornamen Jembatan & Rangka Pelengkung 10 Derajat ]
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. INOVASI SECTION (Responsif: 1 kolom HP, 3 Kolom Laptop) */}
      <section id="inovasi" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sirotu-red font-bold tracking-wider uppercase text-sm mb-3">Green Infrastructure</h2>
            <h3 className="text-3xl md:text-5xl font-black text-sirotu-dark mb-6">Masa Depan Konstruksi Berkelanjutan</h3>
            <p className="text-gray-600 text-lg">Mengintegrasikan efisiensi energi dan keamanan struktur dalam satu ekosistem pintar.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-green-100 group-hover:bg-green-500 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 text-green-600 group-hover:text-white transition-colors">
                <Leaf size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Eco-Bollard System</h4>
              <p className="text-gray-600 leading-relaxed">
                Pembatas jalan dengan sistem filtrasi internal. Menyerap gas buang kendaraan bermotor dan menghembuskan udara bersih ke area pedestrian.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-yellow-100 group-hover:bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 text-yellow-600 group-hover:text-white transition-colors">
                <Zap size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Piezophoto-Solar</h4>
              <p className="text-gray-600 leading-relaxed">
                Pemanen energi mandiri ganda. Memanfaatkan energi getaran dari kendaraan (piezoelektrik) dan paparan sinar matahari (panel surya) untuk menyalakan lampu PJU.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-100 group-hover:bg-blue-500 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 text-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">SHMS Real-time</h4>
              <p className="text-gray-600 leading-relaxed">
                Sistem pemantauan kesehatan struktur (Structural Health Monitoring System) yang mendeteksi anomali pada elemen kritis secara prediktif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION & FOOTER */}
      <footer className="bg-sirotu-dark text-white pt-20 pb-10 px-6 border-t-[20px] border-sirotu-red">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-700 pb-12 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-2">SIROTU.</h2>
            <p className="text-gray-400">Creation X 1st Decade 2026 - UGM</p>
          </div>
          <div>
            <Link to="/helpdesk" className="bg-white text-sirotu-dark font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors">
              Layanan Pengaduan
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center md:text-left text-gray-500 text-sm flex flex-col md:flex-row justify-between">
          <p>&copy; 2026 Tim Perencana Jembatan Sirotu. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Didesain untuk inovasi infrastruktur Indonesia.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;