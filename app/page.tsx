export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-bold">Selamat Datang di Aplikasi Kami</h1>
      <p className="text-center text-lg">
        Ini adalah contoh aplikasi yang menggunakan font yang dioptimalkan untuk pengguna Indonesia.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Font Noto Sans</h2>
          <p className="font-sans">
            Noto Sans adalah font yang dirancang oleh Google untuk mendukung semua bahasa. Font ini
            sangat cocok untuk konten Indonesia karena keterbacaannya yang baik pada ukuran kecil.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="font-jakarta mb-4 text-xl font-bold">Font Plus Jakarta Sans</h2>
          <p className="font-jakarta">
            Plus Jakarta Sans adalah font yang terinspirasi oleh kota Jakarta. Font ini modern dan
            cocok untuk aplikasi yang menargetkan pengguna Indonesia, terutama di daerah perkotaan.
          </p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Contoh Teks Indonesia</h2>
        <p className="mb-2">
          Bahasa Indonesia adalah bahasa resmi Republik Indonesia dan merupakan bahasa persatuan
          bangsa Indonesia.
        </p>
        <p className="font-jakarta">
          Dengan lebih dari 270 juta penduduk, Indonesia adalah negara dengan populasi terbesar
          keempat di dunia.
        </p>
      </div>
    </div>
  )
}
