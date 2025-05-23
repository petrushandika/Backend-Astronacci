import { PrismaClient } from "../generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Petrus",
        email: "petrushandikasinaga@gmail.com",
        password: "petrushandikasinaga",
        membership: "Starter",
      },
      {
        name: "Isah",
        email: "isahveronika@gmail.com",
        password: "isahveronika",
        membership: "Professional",
      },
      {
        name: "aiden",
        email: "aidenputraangkasa@gmail.com",
        password: "aidenputraangkasa",
        membership: "Unlimited",
      },
    ],
  });

  await prisma.content.createMany({
    data: [
      {
        id: "1",
        title: "Langkah Awal Berinvestasi Saham untuk Pemula",
        description:
          "Ingin memulai investasi saham tapi belum tahu harus mulai dari mana? Artikel ini memberikan panduan lengkap bagi investor pemula tentang cara memahami konsep dasar saham, bagaimana mekanisme transaksi di pasar modal, serta langkah-langkah awal untuk membangun portofolio yang sehat. Anda akan belajar tentang jenis-jenis saham, perbedaan antara pasar primer dan sekunder, serta pentingnya memilih broker yang tepat. Kami juga menjelaskan apa itu IPO, dividen, dan bagaimana menghitung return investasi Anda secara sederhana.",
        video: "https://example.com/video/1 ",
      },
      {
        id: "2",
        title: "Strategi Swing Trading untuk Trader Harian Indonesia",
        description:
          "Swing trading adalah strategi yang ideal untuk trader yang tidak memiliki banyak waktu namun tetap ingin aktif di pasar saham. Dalam artikel ini, kami paparkan teknik swing trading yang bisa Anda terapkan di pasar modal Indonesia. Anda akan mempelajari bagaimana menggunakan chart harian untuk mengidentifikasi momentum entry dan exit, indikator teknikal seperti RSI dan MACD, serta pola-pola harga yang sering muncul di saham-saham lokal. Kami juga menyertakan tips praktis untuk menghindari noise pasar dan fokus pada setup yang benar-benar valid.",
        video: "https://example.com/video/2 ",
      },
      {
        id: "3",
        title: "Pendekatan Analisis Teknikal yang Lebih Efektif",
        description:
          "Analisis teknikal adalah metode populer yang digunakan oleh trader untuk memprediksi arah harga berdasarkan data historis. Dalam artikel ini, kami jelaskan prinsip dasar analisis teknikal, termasuk penggunaan grafik harga, volume transaksi, dan indikator pendukung seperti moving average dan Bollinger Bands. Selain itu, Anda akan mempelajari bagaimana membandingkannya dengan analisis fundamental untuk mendapatkan gambaran yang lebih lengkap. Artikel ini sangat cocok untuk trader yang ingin meningkatkan akurasi prediksi mereka dengan tools teknikal yang terbukti efektif.",
        video: "https://example.com/video/3 ",
      },
      {
        id: "4",
        title: "Candlestick Chart: Panduan Praktis untuk Trader",
        description:
          "Candlestick chart merupakan salah satu alat analisis paling efektif dalam dunia trading saham. Dalam artikel ini, Anda akan mempelajari makna setiap bentuk candlestick, cara membaca sentimen pasar melalui pola-pola tertentu, serta bagaimana menggabungkannya dengan indikator lain untuk memperkuat keputusan trading. Kami bahas pola seperti hammer, engulfing, doji, dan morning star beserta contoh visual yang mudah dipahami. Cocok untuk trader pemula maupun yang ingin menyegarkan kembali pengetahuan mereka tentang chart teknikal.",
        video: "https://example.com/video/4 ",
      },
      {
        id: "5",
        title: "Level Support dan Resistance: Kunci Sukses Trading Saham",
        description:
          "Support dan resistance adalah dua level kritis yang harus Anda kenali sebagai trader saham. Dengan memahami area-area ini, Anda dapat memprediksi potensi pembalikan arah harga dan menempatkan titik entry dan exit secara lebih tepat. Artikel ini membahas cara menggambar garis support-resistance secara akurat, bagaimana menyesuaikannya saat terjadi breakout, dan penggunaannya bersama Fibonacci retracement serta trendline. Dilengkapi dengan tips untuk menghindari false breakout dan mengonfirmasi sinyal dengan bantuan volume perdagangan.",
        video: "https://example.com/video/5 ",
      },
      {
        id: "6",
        title: "Manajemen Risiko yang Wajib Dipahami Setiap Trader",
        description:
          "Tanpa manajemen risiko yang baik, trading bisa menjadi aktivitas yang sangat berbahaya. Artikel ini membahas prinsip-prinsip penting dalam mengelola risiko, termasuk stop loss, risk-reward ratio, dan position sizing. Anda akan belajar bagaimana menghitung persentase kerugian yang wajar, menetapkan batasan maksimal kerugian harian/mingguan, serta membuat sistem keluar otomatis agar tidak terjebak emosi. Kami juga memberikan rekomendasi checklist evaluasi harian untuk membantu Anda tetap disiplin dalam menjalankan strategi yang telah direncanakan.",
        video: "https://example.com/video/6 ",
      },
      {
        id: "7",
        title: "Indeks IHSG: Panduan Membaca Pergerakan Pasar Saham",
        description:
          "Indeks Harga Saham Gabungan (IHSG) adalah barometer utama kondisi pasar modal Indonesia. Dalam artikel ini, Anda akan mempelajari bagaimana indeks ini dihitung, faktor-faktor yang mempengaruhi pergerakannya, serta cara membacanya untuk mengambil keputusan investasi yang lebih cerdas. Kami juga menjelaskan hubungan antara IHSG dan performa individual saham, serta bagaimana memanfaatkannya untuk membangun strategi investasi yang selaras dengan tren makro pasar.",
        video: "https://example.com/video/7 ",
      },
      {
        id: "8",
        title: "Kriteria Saham Berkualitas untuk Investasi Jangka Panjang",
        description:
          "Memilih saham untuk investasi jangka panjang bukanlah hal yang mudah. Ada banyak saham di pasar yang tampak menjanjikan, tetapi tidak semua layak masuk dalam portofolio Anda. Dalam artikel ini, kami paparkan parameter penting seperti PER, EPS, DER, ROE, dan pertumbuhan laba tahunan untuk membantu Anda memfilter saham berkualitas tinggi. Anda juga akan mempelajari cara membaca laporan keuangan, mengenali manajemen yang solid, serta menilai prospek industri tempat perusahaan berada.",
        video: "https://example.com/video/8 ",
      },
      {
        id: "9",
        title: "Perbedaan Mendasar Antara Investor dan Trader Saham",
        description:
          "Meskipun tujuan sama — mendapat keuntungan dari pergerakan harga saham — investor dan trader memiliki pendekatan yang sangat berbeda. Investor cenderung fokus pada nilai intrinsik perusahaan dan kinerja jangka panjang, sedangkan trader memanfaatkan volatilitas pasar untuk mendapat profit jangka pendek. Artikel ini membahas perbedaan tersebut secara rinci, termasuk gaya hidup, psikologi, dan strategi yang digunakan oleh kedua kelompok. Ditujukan untuk membantu Anda memutuskan apakah Anda lebih cocok menjadi investor atau trader.",
        video: "https://example.com/video/9 ",
      },
      {
        id: "10",
        title: "Teknik Scalping Saham untuk Trader Profesional",
        description:
          "Scalping adalah strategi trading intensif yang bertujuan mendapat keuntungan cepat dari fluktuasi harga kecil. Artikel ini ditujukan untuk trader berpengalaman yang ingin memahami teknik scalping secara mendalam. Kami bahas time frame yang digunakan, setup ideal, indikator seperti Volume Profile dan Bollinger Bands, serta bagaimana memilih saham yang likuid dan responsif terhadap perubahan harga. Selain itu, kami memberikan tips untuk menghindari overtrading dan membangun sistem eksekusi yang cepat dan akurat.",
        video: "https://example.com/video/10 ",
      },
      {
        id: "11",
        title: "Platform Binance: Panduan Lengkap untuk Pengguna Baru",
        description:
          "Binance adalah salah satu platform trading aset digital terbesar di dunia. Jika Anda baru mengenal dunia crypto, artikel ini memberikan panduan langkah demi langkah untuk memulai trading di Binance. Mulai dari cara membuat akun, verifikasi KYC, hingga melakukan deposit dan transaksi pertama Anda. Kami juga membahas fitur-fitur penting seperti Market, Trade, Futures, dan Wallet. Tak ketinggalan tips keamanan agar akun Anda tetap aman dari ancaman phising dan peretasan.",
        video: "https://example.com/video/11 ",
      },
      {
        id: "12",
        title: "Volume Perdagangan sebagai Konfirmasi Sinyal Teknikal",
        description:
          "Volume perdagangan adalah salah satu indikator yang sering diabaikan oleh trader pemula. Padahal, volume bisa menjadi konfirmasi yang kuat untuk sinyal teknikal seperti breakout dan divergensi. Dalam artikel ini, Anda akan mempelajari bagaimana membaca grafik volume, pola-pola penting seperti volume expansion dan contraction, serta bagaimana memanfaatkannya bersama price action untuk hasil trading yang lebih optimal. Dilengkapi dengan studi kasus nyata dari pergerakan saham-saham BEI.",
        video: "https://example.com/video/12 ",
      },
      {
        id: "13",
        title: "Reksadana Pasif vs ETF: Mana yang Lebih Menguntungkan?",
        description:
          "ETF (Exchange Traded Fund) dan reksadana pasif adalah instrumen investasi yang cocok untuk investor yang ingin diversifikasi tanpa repot mengelola portofolio sendiri. Dalam artikel ini, kami bandingkan kedua produk ini dari segi biaya, likuiditas, dan fleksibilitas perdagangan. Anda juga akan mempelajari jenis-jenis ETF yang tersedia di pasar Indonesia, serta cara memilih produk yang sesuai dengan profil risiko dan tujuan finansial Anda.",
        video: "https://example.com/video/13 ",
      },
      {
        id: "14",
        title: "Cara Memilih Broker Saham Terpercaya di Indonesia",
        description:
          "Broker saham adalah pintu gerbang Anda ke dunia investasi. Oleh karena itu, memilih broker yang tepat sangat penting untuk kenyamanan, keamanan, dan keberhasilan investasi Anda. Artikel ini memberikan panduan memilih broker yang sudah terdaftar di OJK, ramah pengguna, dan dilengkapi fasilitas analisis harian. Kami juga berikan daftar broker lokal yang terpercaya, beserta review singkat untuk membantu Anda membuat keputusan yang bijak.",
        video: "https://example.com/video/14 ",
      },
      {
        id: "15",
        title: "Strategi Dollar Cost Averaging untuk Investasi Rutin",
        description:
          "Dollar Cost Averaging (DCA) adalah strategi investasi yang sangat berguna untuk menghindari timing market yang sulit. Artikel ini membahas bagaimana strategi ini bekerja, manfaatnya dalam mengurangi dampak volatilitas, dan bagaimana Anda bisa menerapkannya secara otomatis melalui aplikasi investasi modern. Simak juga simulasi hasil investasi selama beberapa tahun dan bandingkan dengan strategi lump sum untuk menemukan pendekatan yang paling sesuai dengan gaya investasi Anda.",
        video: "https://example.com/video/15 ",
      },
      {
        id: "16",
        title: "Peluang Investasi di Sektor Energi Terbarukan Indonesia",
        description:
          "Sektor energi terbarukan tengah menjadi pusat perhatian di Indonesia. Pemerintah menargetkan bauran energi terbarukan mencapai 23% pada tahun 2025, membuka peluang besar bagi investor. Dalam artikel ini, kami bahas peluang investasi di sektor ini, emiten yang sudah listing di BEI seperti SMIWJ dan ADHI, serta tantangan regulasi dan pendanaan yang perlu Anda waspadai. Ini adalah panduan untuk Anda yang ingin ikut serta dalam perkembangan hijau Indonesia.",
        video: "https://example.com/video/16 ",
      },
      {
        id: "17",
        title: "Pola Harmonic: Alat Prediksi Harga Berbasis Fibonacci",
        description:
          "Pola harmonic adalah alat analisis teknikal yang memanfaatkan rasio Fibonacci untuk memprediksi pembalikan harga. Dalam artikel ini, Anda akan mempelajari pola-pola utama seperti Gartley, Bat, dan Butterfly, serta bagaimana menggunakannya bersama indikator lain seperti RSI dan MACD. Kami juga memberikan panduan lengkap untuk menggambar dan mengonfirmasi pola ini di chart trading Anda, serta cara mengelola risiko saat memasuki posisi berdasarkan pola tersebut.",
        video: "https://example.com/video/17 ",
      },
      {
        id: "18",
        title: "Kedisiplinan Sebagai Modal Utama Kesuksesan Trader Saham",
        description:
          "Keberhasilan dalam dunia trading tidak hanya bergantung pada strategi atau analisis yang digunakan, tetapi juga pada kedisiplinan dan kontrol emosi. Dalam artikel ini, kami jelaskan pentingnya membangun sistem trading yang bisa diandalkan, membuat jurnal transaksi, dan menetapkan aturan entry-exit yang ketat. Kami juga membahas psikologi trading, termasuk cara menghadapi loss, menghindari overtrading, dan tetap tenang meski pasar sedang bergejolak.",
        video: "https://example.com/video/18 ",
      },
      {
        id: "19",
        title: "Blue Chip vs Growth Stocks: Manakah yang Lebih Layak?",
        description:
          "Blue chip stocks dan growth stocks memiliki karakteristik yang sangat berbeda. Saham blue chip biasanya stabil, memberikan dividen, dan berasal dari perusahaan mapan. Di sisi lain, growth stocks menawarkan potensi pertumbuhan yang tinggi, meski dengan risiko lebih besar dan tidak memberikan dividen. Dalam artikel ini, kami membahas pro dan kontra dari kedua jenis saham tersebut, serta bagaimana Anda bisa mengombinasinya dalam portofolio yang seimbang.",
        video: "https://example.com/video/19 ",
      },
      {
        id: "20",
        title: "Trading Otomatis dengan Robot Algo: Tren Masa Depan",
        description:
          "Robot algo trading semakin diminati karena kemampuan eksekusi yang cepat dan bebas emosi. Dalam artikel ini, Anda akan mempelajari bagaimana robot trading bekerja, komponen-komponen utamanya, serta jenis strategi yang bisa diterapkan. Kami juga membahas platform populer seperti MetaTrader, QuantConnect, dan Python-based bots yang bisa digunakan oleh trader teknikal maupun programmer. Cocok untuk Anda yang tertarik mengotomatiskan strategi trading Anda.",
        video: "https://example.com/video/20 ",
      },
    ],
  });

  await prisma.article.createMany({
    data: [
      {
        id: "1",
        title: "Mengenal Dasar-Dasar Trading Saham untuk Pemula",
        content:
          "Trading saham bisa menjadi jalan untuk membangun kekayaan jika dilakukan dengan benar. Artikel ini membahas pengertian trading saham, cara kerjanya, serta langkah-langkah awal yang harus Anda lakukan sebagai pemula.\n\nAnda akan belajar tentang jenis-jenis order seperti market order, limit order, stop loss order, dan bagaimana masing-masing berfungsi di platform trading. Kami juga menjelaskan perbedaan antara trading harian, swing trading, dan position trading.\n\nSelain itu, kami menyertakan panduan singkat tentang bagaimana memilih broker saham terpercaya, platform trading yang ramah pemula, dan pentingnya manajemen risiko dalam setiap transaksi. Dengan mengikuti langkah-langkah ini, Anda dapat mulai trading secara bertanggung jawab dan efektif.",
        image:
          "https://static.republika.co.id/uploads/member/images/news/nhsal159uk.jpg ",
      },
      {
        id: "2",
        title: "Strategi Swing Trading Efektif di Pasar Saham Indonesia",
        content:
          "Swing trading merupakan strategi populer yang cocok untuk trader dengan waktu terbatas. Dalam artikel ini, kita akan bahas bagaimana menerapkan strategi swing trading secara efektif di bursa saham Indonesia.\n\nKami akan memberikan panduan langkah demi langkah dalam menentukan entry point dan exit point menggunakan analisis teknikal. Selain itu, Anda akan mempelajari bagaimana mengenali momentum pasar melalui volume perdagangan dan indikator seperti RSI dan MACD.\n\nKami juga menyertakan contoh chart dan studi kasus nyata dari saham-saham yang sering digunakan oleh swing trader lokal. Dengan memahami pola-pola harga seperti support & resistance, trendline, dan candlestick reversal, Anda akan memiliki pondasi kuat untuk sukses dalam swing trading.",
        image:
          "https://www.yossygirsang.com/wp-content/uploads/2024/07/Swing-trader-ilustrasi.jpg",
      },
      {
        id: "3",
        title: "Analisis Teknikal vs Fundamental: Mana yang Lebih Baik?",
        content:
          "Dua pendekatan utama dalam dunia investasi saham adalah analisis teknikal dan fundamental. Artikel ini membandingkan kedua metode tersebut, kelebihan dan kekurangannya, serta kapan sebaiknya Anda menggunakan salah satunya.\n\nAnalisis teknikal fokus pada grafik harga dan volume untuk memprediksi arah pasar, sedangkan analisis fundamental melihat kinerja keuangan perusahaan, laporan laba, dan prospek industri. Kedua pendekatan memiliki tempat tersendiri dalam dunia trading.\n\nArtikel ini juga membahas bagaimana kombinasi keduanya bisa digunakan untuk meningkatkan akurasi prediksi. Dilengkapi dengan rekomendasi tools dan sumber daya untuk mempelajari keduanya secara mendalam.",
        image:
          "https://images.squarespace-cdn.com/content/v1/5acda2f4c258b4bd2d14dca2/b40cfdec-1e71-4489-8c62-8aab9735b900/Lebih+Baik+Analisis+Teknikal+Atau+Fundamental_.jpg",
      },
      {
        id: "4",
        title: "Cara Membaca Candlestick Chart untuk Trader Pemula",
        content:
          "Candlestick chart adalah alat penting bagi trader untuk memprediksi pergerakan harga. Artikel ini menjelaskan struktur candlestick, pola-pola umum, dan cara membacanya dengan mudah.\n\nSetiap lilin (candle) merepresentasikan open, high, low, dan close selama periode tertentu. Anda akan mempelajari arti dari body dan shadow, serta bagaimana membedakan sentimen bullish dan bearish dari bentuk candlestick.\n\nPola seperti doji, hammer, engulfing, dan morning star akan dibahas satu per satu beserta contoh visual. Artikel ini juga memberikan tips praktis untuk mengintegrasikan candlestick dengan indikator lain seperti moving average dan volume untuk hasil yang lebih akurat.",
        image:
          "https://ghost.abainvest.id/content/images/2023/06/010---Pola-Candlestick.png",
      },
      {
        id: "5",
        title: "Mengenal Support dan Resistance dalam Analisis Teknikal",
        content:
          "Support dan resistance adalah konsep dasar dalam analisis teknikal. Dengan memahami level-level ini, trader dapat memperkirakan arah pergerakan harga.\n\nLevel support adalah titik di mana permintaan cukup kuat untuk menghentikan penurunan harga, sementara resistance adalah titik di mana penawaran menghentikan kenaikan harga. Mengetahui area-area ini sangat penting dalam menentukan entry dan exit point.\n\nArtikel ini memberikan panduan lengkap untuk menggambar garis support dan resistance secara akurat, termasuk bagaimana menyesuaikannya saat breakout terjadi. Kami juga memberikan tips mengenai bagaimana menggunakan support/resistance bersama Fibonacci retracement dan trendline untuk memperkuat analisis Anda.",
        image:
          "https://images.squarespace-cdn.com/content/v1/5acda2f4c258b4bd2d14dca2/10ee5e58-9ceb-4ae1-b1fb-1177bbb509b7/support+dan+resistance.png",
      },
      {
        id: "6",
        title: "Tips Mengelola Risiko Saat Trading Saham Online",
        content:
          "Manajemen risiko adalah kunci kesuksesan dalam trading. Tanpa itu, trader bisa kehilangan modal dalam waktu singkat. Artikel ini membahas prinsip-prinsip manajemen risiko yang wajib Anda kuasai.\n\nAnda akan belajar bagaimana menentukan stop loss yang ideal, rasio risk-reward yang layak, dan position sizing berdasarkan persentase modal. Kami juga membahas psikologi trading dan pentingnya disiplin dalam mengikuti sistem yang telah dibuat.\n\nDitambah dengan checklist evaluasi harian/mingguan untuk memastikan bahwa Anda tetap berada di jalur yang benar. Ini adalah panduan wajib untuk semua trader, baik pemula maupun yang sudah berpengalaman.",
        image:
          "https://4.bp.blogspot.com/-tSYARPtRURc/Wl3-oPBVxpI/AAAAAAAAWWE/ytvjxypsVXkqjfUMwZZ9Pfwhrx1PDoQKgCLcBGAs/s1600/Screenshot_3.png",
      },
      {
        id: "7",
        title: "Apa Itu Indeks Harga Saham Gabungan (IHSG)?",
        content:
          "Indeks Harga Saham Gabungan atau IHSG adalah tolok ukur utama kinerja pasar saham Indonesia. Artikel ini menjelaskan apa itu IHSG, bagaimana perhitungannya, dan mengapa ia penting bagi investor.\n\nIHSG mencerminkan performa gabungan seluruh saham yang tercatat di Bursa Efek Indonesia. Dengan memahami pergerakan IHSG, Anda bisa mendapatkan gambaran makro kondisi pasar saham nasional.\n\nArtikel ini juga membahas bagaimana membaca tren IHSG, faktor-faktor yang memengaruhi pergerakannya, serta cara menggunakan indeks ini sebagai acuan dalam memilih portofolio saham yang seimbang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhWCOQyR-o7CuG8c0aWPLbH12mIC_thCH_A&s",
      },
      {
        id: "8",
        title: "Cara Memilih Saham yang Potensial Investasi Jangka Panjang",
        content:
          "Investasi jangka panjang membutuhkan seleksi saham yang cermat. Artikel ini membahas parameter penting dalam memilih saham yang potensial, mulai dari rasio keuangan hingga kinerja historis.\n\nAnda akan belajar bagaimana membaca laporan keuangan perusahaan, termasuk rasio likuiditas, solvabilitas, profitabilitas, dan pertumbuhan EPS. Selain itu, kami memberikan panduan memilih perusahaan dengan manajemen yang solid dan prospek bisnis yang jelas.\n\nJuga dibahas bagaimana membangun portofolio yang terdiversifikasi dan cara mengevaluasi saham secara berkala untuk memastikan konsistensi kinerjanya sepanjang waktu.",
        image:
          "https://s3-bucket.most.co.id/most-assets/storage/8529/conversions/aaa2fbb09c3579658e0fc595a684b161-medium.png",
      },
      {
        id: "9",
        title: "Perbedaan Investor dan Trader Saham: Siapa yang Lebih Sukses?",
        content:
          "Investor dan trader memiliki tujuan yang sama: mendapat keuntungan dari pasar saham. Namun pendekatan mereka sangat berbeda. Artikel ini membahas perbedaan utama antara keduanya dan mana yang lebih cocok untuk Anda.\n\nInvestor biasanya berfokus pada nilai intrinsik perusahaan dan memegang saham dalam jangka panjang, sementara trader bermain di volatilitas harga dalam jangka pendek.\n\nKami juga membahas gaya hidup, mentalitas, dan strategi yang digunakan oleh masing-masing kelompok. Dilengkapi dengan contoh riil dari tokoh-tokoh sukses di masing-masing bidang, artikel ini akan membantu Anda memutuskan apakah Anda lebih cocok menjadi investor atau trader.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eMHyaZz4IgVHO3tBmEjLbjjHt9JrCDCsEg&s",
      },
      {
        id: "10",
        title: "Strategi Scalping Saham untuk Trader Harian",
        content:
          "Scalping adalah strategi trading frekuensi tinggi yang cocok untuk trader aktif. Artikel ini membahas teknik scalping saham, tools yang digunakan, serta risiko yang perlu Anda waspadai.\n\nTeknik ini mengandalkan eksekusi cepat dan volume transaksi tinggi untuk mendulang profit dari pergerakan kecil harga. Anda akan mempelajari setup yang ideal, time frame yang digunakan, dan indikator pendukung seperti Bollinger Bands dan Volume Profile.\n\nKami juga memberikan tips memilih saham yang likuid dan volatilitas tinggi untuk strategi ini, serta cara menghindari overtrading yang bisa merugikan dalam jangka panjang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkMniJ1me4oVTfoP5NAXlYKbnfWy3-j2giQ&s",
      },
      {
        id: "11",
        title: "Panduan Lengkap Menggunakan Platform Trading Binance",
        content:
          "Binance adalah salah satu platform trading crypto terbesar di dunia. Artikel ini memberikan panduan lengkap bagi pemula untuk memahami fitur-fitur utama di Binance dan cara melakukan trading dengan aman.\n\nAnda akan belajar bagaimana membuat akun, mengaktifkan autentikasi dua faktor (2FA), dan memverifikasi identitas Anda. Selain itu, kami menjelaskan cara menyetor dana menggunakan berbagai metode seperti bank lokal, kartu kredit, dan stablecoin.\n\nKami juga membahas antarmuka Binance secara rinci, termasuk bagian Market, Trade, Wallet, dan Futures. Dengan panduan langkah demi langkah, Anda akan bisa melakukan transaksi pertama Anda dalam waktu singkat. Artikel ini dilengkapi dengan tips keamanan agar akun Anda tetap terlindungi dari ancaman peretasan.",
        image:
          "https://assets.bitdegree.org/images/binance-spot-trading-featured-image.jpg",
      },
      {
        id: "12",
        title: "Bagaimana Cara Membaca Grafik Volume Saham?",
        content:
          "Volume saham adalah indikator penting yang sering diabaikan oleh trader pemula. Dengan membaca volume, Anda bisa memperkirakan momentum dan validasi breakout.\n\nArtikel ini menjelaskan bagaimana volume bekerja bersama harga untuk memberikan sinyal lebih kuat. Anda akan mempelajari pola volume seperti 'volume expansion', 'volume contraction', dan divergensi antara volume dan harga.\n\nSelain itu, kami memberikan contoh nyata bagaimana volume bisa digunakan untuk mengonfirmasi breakout support/resistance, serta strategi trading yang memanfaatkan lonjakan volume sebagai trigger entry. Kami juga menyertakan rekomendasi tools dan platform yang menampilkan grafik volume dengan jelas.",
        image:
          "https://images.squarespace-cdn.com/content/v1/5acda2f4c258b4bd2d14dca2/1661224536434-DI6MVG8YRJ0MYBQPGS9Y/indikator+volume+saham.jpg",
      },
      {
        id: "13",
        title: "Mengenal ETF dan Keuntungan Berinvestasi di Reksadana Pasif",
        content:
          "ETF (Exchange Traded Fund) adalah instrumen investasi yang mirip reksadana namun diperdagangkan seperti saham. Artikel ini membahas keuntungan berinvestasi di ETF dan bagaimana cara memilih produk yang tepat.\n\nAnda akan mempelajari perbedaan antara ETF dan reksadana aktif, termasuk biaya operasional, likuiditas, dan fleksibilitas perdagangan. Kami juga membahas jenis-jenis ETF yang tersedia di pasar Indonesia, seperti ETF indeks, sektoral, dan internasional.\n\nDilengkapi dengan checklist evaluasi produk ETF, artikel ini memberikan panduan praktis untuk mulai berinvestasi di ETF dengan strategi yang sesuai dengan profil risiko dan tujuan finansial Anda.",
        image:
          "https://www.bnisekuritas.co.id/_next/image/?url=https%3A%2F%2Fmy.bnisekuritas.co.id%2Fwp-content%2Fuploads%2F2024%2F10%2FBNIS-ETF-image.png&w=3840&q=75",
      },
      {
        id: "14",
        title: "Panduan Memilih Broker Saham Terpercaya di Indonesia",
        content:
          "Memilih broker saham yang tepat adalah langkah penting sebelum mulai trading. Artikel ini membahas faktor-faktor yang harus dipertimbangkan saat memilih broker saham di Indonesia.\n\nAnda akan belajar tentang perbedaan antara broker online dan tradisional, platform trading yang ramah pengguna, biaya transaksi (fee dan levy), serta fasilitas tambahan seperti analisis harian, webinars, dan pelatihan.\n\nKami juga menyertakan daftar broker saham lokal yang sudah teregulasi oleh OJK, beserta review singkat masing-masing. Dilengkapi dengan tips menghindari broker abal-abal dan cara memverifikasi legalitas sebuah perusahaan sekuritas.",
        image:
          "https://static.dupoin.co.id/crm/202505/ad42e428d70c3c5a8bd3fdc0981a16fbc4cede88.png?sign=DBE855D1E706D8482EC3D89555B0899330821381",
      },
      {
        id: "15",
        title: "Strategi Dollar Cost Averaging dalam Investasi Saham",
        content:
          "Dollar Cost Averaging (DCA) adalah strategi investasi yang cocok untuk investor jangka panjang. Artikel ini menjelaskan cara kerja DCA, keuntungan, dan kapan waktu terbaik menerapkannya.\n\nAlih-alih mencoba memprediksi timing pasar, DCA mengajarkan investor untuk membeli saham secara berkala dengan jumlah uang tetap. Ini membantu mengurangi dampak volatilitas pasar dan rata-rata harga pembelian.\n\nKami memberikan simulasi hasil investasi selama 5 tahun menggunakan strategi DCA, dibandingkan dengan strategi lump sum. Artikel ini juga membahas bagaimana menerapkan DCA dalam portofolio saham dan ETF, serta alat bantu otomatis yang bisa digunakan.",
        image:
          "https://www.heygotrade.com/static/459bc5d0833b2912a2c3fe723709be58/eade8/section-2-1-dca.png",
      },
      {
        id: "16",
        title:
          "Peluang dan Tantangan Investasi di Sektor Energi Baru Terbarukan",
        content:
          "Sektor energi baru terbarukan (EBT) sedang naik daun di Indonesia. Artikel ini membahas peluang investasi di sektor ini, perusahaan yang sudah listing, serta tantangan yang perlu Anda antisipasi.\n\nIndonesia memiliki potensi besar dalam energi surya, angin, hidro, dan geothermal. Pemerintah telah menetapkan target bauran energi hingga 23% dari EBT pada tahun 2025, menciptakan peluang besar bagi investor.\n\nKami membahas beberapa emiten EBT yang sudah tercatat di BEI, seperti SMIWJ, ADHI, dan TINS. Selain itu, kami memberikan analisis singkat tentang prospek industri, regulasi pemerintah, serta risiko teknologi dan pendanaan yang masih menjadi tantangan utama.",
        image:
          "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/02/06120838/Peluang-energi-terbarukan-di-berbagai-industri-1024x576.png",
      },
      {
        id: "17",
        title: "Mengenal Pola Harmonic dalam Trading Saham",
        content:
          "Pola harmonic adalah pola geometris yang digunakan trader untuk memprediksi pembalikan harga. Artikel ini membahas pola-pola utama seperti Gartley, Butterfly, dan Bat serta cara mengidentifikasinya di chart.\n\nPola ini didasarkan pada rasio Fibonacci dan struktur price action yang berulang. Anda akan mempelajari bagaimana menggambar garis Fibonacci dengan benar dan mengenali setup ideal untuk entry dan exit point.\n\nKami juga menyertakan contoh visual dari setiap pola dan bagaimana menggunakannya bersama indikator lain seperti RSI dan MACD untuk meningkatkan akurasi sinyal. Dilengkapi dengan checklist verifikasi pola dan manajemen risiko saat trading pola harmonic.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zZ0H49ZoNaneaZciHZnlatarQXK-JLu44w&s",
      },
      {
        id: "18",
        title: "Cara Menjadi Investor Saham yang Disiplin",
        content:
          "Disiplin adalah kunci sukses dalam investasi saham. Artikel ini membahas bagaimana membangun disiplin diri, membuat sistem trading/investasi yang bisa diikuti, serta cara menghindari emosi saat masuk pasar.\n\nKami memberikan panduan membuat jurnal trading, aturan entry dan exit, serta checklist evaluasi bulanan untuk memastikan bahwa Anda tetap konsisten pada sistem Anda.\n\nSelain itu, artikel ini membahas psikologi trading: bagaimana menghadapi loss, tidak terbawa hype, dan tetap fokus pada tujuan jangka panjang. Kami juga menyertakan studi kasus dari investor sukses yang berhasil mempertahankan kedisiplinan mereka selama bertahun-tahun.",
        image:
          "https://blog.rivankurniawan.com/wp-content/uploads/2023/08/Tips-Investasi-Saham-bagi-Pemula-snips.webp",
      },
      {
        id: "19",
        title: "Perbandingan Saham Blue Chip dan Growth Stocks",
        content:
          "Blue chip stocks dan growth stocks memiliki karakteristik berbeda. Artikel ini membahas perbedaan keduanya dari segi risiko, imbal hasil, dan profil perusahaan.\n\nSaham blue chip biasanya berasal dari perusahaan besar, mapan, dan stabil dengan dividen yang konsisten. Di sisi lain, growth stock berasal dari perusahaan yang sedang berkembang pesat dengan potensi pertumbuhan tinggi, meskipun tanpa dividen.\n\nKami memberikan rekomendasi portofolio ideal yang menggabungkan kedua jenis saham tersebut, serta contoh perusahaan blue chip dan growth stock yang listing di BEI. Artikel ini ditujukan untuk membantu Anda memilih strategi investasi yang sesuai dengan profil risiko dan tujuan finansial Anda.",
        image:
          "https://static.wixstatic.com/media/b5b5d9_f958533afb624819ba4e1961f629cc9b~mv2.png/v1/fill/w_568,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b5b5d9_f958533afb624819ba4e1961f629cc9b~mv2.png",
      },
      {
        id: "20",
        title: "Masa Depan Trading Otomatis dengan Robot Algo",
        content:
          "Trading otomatis dengan robot algo semakin populer karena kemampuan eksekusinya yang cepat dan bebas emosi. Artikel ini membahas bagaimana robot algo bekerja, jenis strategi yang bisa digunakan, dan platform terbaik di Indonesia.\n\nAnda akan mempelajari komponen dasar dari robot trading: engine logika, backtesting, real-time execution, dan risk management module. Kami juga membahas kelebihan dan batasan dari penggunaan robot algo dibanding trading manual.\n\nDitambah dengan rekomendasi platform seperti MetaTrader, QuantConnect, dan Python-based bots, artikel ini memberikan panduan awal untuk memulai eksplorasi di dunia trading otomatis. Cocok untuk trader teknikal dan programmer yang tertarik pada otomatisasi pasar keuangan.",
        image:
          "https://www.centerklik.com/wp-content/uploads/2025/03/Robot-trading-forex.jpg",
      },
    ],
  });

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
