import { useState } from 'react';

const Helpdesk = () => {
  const [formData, setFormData] = useState({ nama: '', laporan: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.nama}, laporan Anda telah diterima sistem kami!`);
    setFormData({ nama: '', laporan: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-xl p-10 md:p-16 border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2">Pusat Aduan Masyarakat</h2>
        <p className="text-center text-gray-500 mb-10">Laporkan kerusakan atau masalah lalu lintas di sekitar Jembatan Sirotu secara real-time.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Nama Pelapor</label>
            <input 
              type="text" 
              required
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sirotu-red focus:border-transparent transition-all"
              placeholder="Masukkan nama Anda"
              value={formData.nama}
              onChange={(e) => setFormData({...formData, nama: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Deskripsi Laporan</label>
            <textarea 
              required
              rows="5"
              className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sirotu-red focus:border-transparent transition-all"
              placeholder="Jelaskan masalah yang Anda temukan (contoh: Lampu PJU mati di bentang utama)"
              value={formData.laporan}
              onChange={(e) => setFormData({...formData, laporan: e.target.value})}
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-sirotu-red text-white font-bold py-4 rounded-2xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/30"
          >
            Kirim Laporan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Helpdesk;