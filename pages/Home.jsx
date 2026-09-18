import { motion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Zap,
  ShieldCheck,
  Maximize,
  Activity,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stats = [
  {
    icon: Maximize,
    value: '150 m',
    label: 'Total Bentang Jembatan',
  },
  {
    icon: Activity,
    value: '27.20°',
    label: 'Kemiringan Pelengkung',
  },
  {
    icon: ShieldCheck,
    value: 'BJ41',
    label: 'Baja Struktural Kuat',
  },
  {
    icon: Leaf,
    value: '100%',
    label: 'Green Infrastructure',
  },
];

const innovations = [
  {
    icon: Leaf,
    title: 'Eco-Bollard System',
    description:
      'Pembatas jalan dengan sistem filtrasi internal yang membantu menyerap gas buang kendaraan dan mengalirkan udara yang lebih bersih ke area pedestrian.',
    iconWrap: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
  },
  {
    icon: Zap,
    title: 'Piezophoto-Solar',
    description:
      'Sistem pemanen energi dari getaran kendaraan dan paparan sinar matahari untuk mendukung kebutuhan energi lampu PJU secara mandiri.',
    iconWrap: 'bg-amber-50',
    iconColor: 'text-amber-700',
  },
  {
    icon: ShieldCheck,
    title: 'SHMS Real-time',
    description:
      'Structural Health Monitoring System untuk memantau kondisi elemen penting jembatan dan membantu mendeteksi anomali secara lebih cepat.',
    iconWrap: 'bg-sky-50',
    iconColor: 'text-sky-700',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-32 md:pt-36 lg:px-12 lg:pb-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-red-100/60 blur-3xl md:h-[650px] md:w-[650px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-5xl text-center"
        >
      

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-black tracking-[-0.045em] text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            JEMBATAN{' '}
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text text-transparent">
              SIROTU
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-base font-normal leading-8 text-slate-600 sm:text-lg md:text-xl"
          >
            Mempersatukan kehidupan pascabencana melalui desain jembatan
            pelengkung inovatif yang tangguh, efisien, dan berkelanjutan.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#inovasi"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-700 px-8 py-4 font-bold text-white shadow-lg shadow-red-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-xl sm:w-auto"
            >
              Jelajahi Teknologi
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <Link
              to="/helpdesk"
              className="inline-flex w-full items-center justify-center rounded-full border border-red-200 bg-white px-8 py-4 font-bold text-red-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-red-50 sm:w-auto"
            >
              Pusat Aduan
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 65, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-16 max-w-6xl md:mt-20"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60 md:rounded-[2.5rem] md:p-3">
            <div className="h-[330px] overflow-hidden rounded-[1.5rem] bg-slate-100 sm:h-[420px] md:h-[520px] md:rounded-[2rem]">
              <iframe
                src="/jembatan-3d.html"
                className="h-full w-full border-0"
                title="Render 3D Jembatan Pelengkung Sirotu"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          QUICK STATS - FULL LIGHT
      ========================================================== */}
      <section className="border-y border-slate-100 bg-white px-6 py-16 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-8"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-lg md:p-7"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                <Icon size={25} />
              </div>

              <h3 className="text-2xl font-black text-slate-900 md:text-3xl">
                {value}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          FILOSOFI
      ========================================================== */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeLeft}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Identitas Kultural
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
              Filosofi{' '}
              <span className="italic text-red-700">Pasiromu Tuwu</span>.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Diambil dari bahasa lokal yang bermakna{' '}
              <strong className="font-bold text-slate-900">
                “mempersatukan kehidupan”
              </strong>
              . Jembatan Sirotu bukan sekadar struktur baja dan beton, tetapi
              juga menjadi simbol kebangkitan dan keterhubungan masyarakat
              Donggala.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Railing menggunakan inspirasi ornamen khas Palu-Donggala.',
                'Pelengkung miring 27.20° menjadi bagian dari identitas visual struktur.',
                'Desain menggabungkan fungsi, keamanan, efisiensi, dan nilai lokal.',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.45 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700">
                    <ChevronRight size={16} />
                  </div>

                  <p className="leading-6 text-slate-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeRight}
            className="relative"
          >
            <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-red-50 blur-2xl" />

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] border border-red-100 bg-white p-8 shadow-xl shadow-slate-200/70 md:min-h-[540px] md:p-12"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-red-50" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[36px] border-red-100" />

              <div className="relative flex h-full min-h-[365px] flex-col justify-between md:min-h-[445px]">
                <div>
                  <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                    Konsep Struktur
                  </span>

                  <h3 className="mt-8 max-w-md text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                    Pelengkung yang kuat, modern, dan tetap membawa identitas
                    lokal.
                  </h3>

                  <p className="mt-5 max-w-md leading-7 text-slate-600">
                    Elemen struktur dirancang untuk menghadirkan karakter visual
                    yang kuat sekaligus mempertahankan pendekatan konstruksi
                    yang efisien dan berkelanjutan.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
                    <p className="text-2xl font-black text-red-700">27.20°</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Kemiringan pelengkung
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
                    <p className="text-2xl font-black text-red-700">150 m</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Total bentang
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INOVASI
      ========================================================== */}
      <section
        id="inovasi"
        className="relative overflow-hidden border-t border-slate-100 bg-white px-6 py-24 lg:px-12 lg:py-32"
      >
        <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-50 blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
              Green Infrastructure
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Masa Depan Konstruksi Berkelanjutan
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Mengintegrasikan efisiensi energi, pemantauan struktur, dan
              kualitas lingkungan dalam satu ekosistem infrastruktur modern.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {innovations.map(
              ({
                icon: Icon,
                title,
                description,
                iconWrap,
                iconColor,
              }) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/80 md:p-9"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconWrap} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-red-700">
                    Teknologi Sirotu
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </motion.article>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          CTA - LIGHT
      ========================================================== */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-red-100 bg-red-50 px-7 py-14 shadow-xl shadow-red-100/50 md:px-12 md:py-16"
        >
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[45px] border-red-100" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
                Pusat Aduan
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                Temukan masalah di sekitar Jembatan Sirotu?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Sampaikan laporan melalui layanan pengaduan agar dapat
                ditindaklanjuti dengan lebih cepat.
              </p>
            </div>

            <Link
              to="/helpdesk"
              className="inline-flex items-center gap-2 rounded-full bg-red-700 px-7 py-4 font-bold text-white shadow-lg shadow-red-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-800"
            >
              Layanan Pengaduan
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FOOTER - FULL WHITE
      ========================================================== */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border-t border-slate-200 bg-white px-6 py-12 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-slate-200 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              SIROTU<span className="text-red-600">.</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Creation X 1st Decade 2026 - UGM
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <a
              href="#inovasi"
              className="transition-colors hover:text-red-700"
            >
              Inovasi
            </a>

            <Link
              to="/helpdesk"
              className="transition-colors hover:text-red-700"
            >
              Helpdesk
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tim Perencana Jembatan Sirotu. All rights reserved.</p>
          <p>Didesain untuk inovasi infrastruktur Indonesia.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
