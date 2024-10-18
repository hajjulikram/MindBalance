
# MindBalance

**MindBalance** adalah aplikasi web yang dirancang untuk membantu pengguna melacak dan meningkatkan kesehatan mental mereka melalui fitur seperti **mood tracking** dan **saran yang dipersonalisasi**. Proyek ini bertujuan untuk menyediakan alat sederhana dan efektif untuk menjaga kesejahteraan mental.

Proyek ini bersifat **public** dan terbuka untuk keperluan latihan bagi pengembang yang ingin belajar menggunakan teknologi modern seperti **Next.js**, **Node.js**, **MySQL**, dan **Chakra UI** dalam pengembangan aplikasi full-stack.

## Fitur Utama

- **Mood Tracking**: Pengguna dapat melacak suasana hati mereka setiap hari.
- **Saran yang Dipersonalisasi**: Berdasarkan suasana hati pengguna, aplikasi akan memberikan saran yang relevan.
- **Dashboard Pengguna**: Pengguna dapat melihat ringkasan suasana hati dan saran yang diberikan.
- **Autentikasi**: Fitur login dan register untuk pengguna.

## Teknologi yang Digunakan

- **Frontend**: [Next.js](https://nextjs.org/) - Framework React untuk pengembangan aplikasi web dengan server-side rendering.
- **Backend**: [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) - Backend API dan server.
- **Database**: [MySQL](https://www.mysql.com/) - Untuk penyimpanan data pengguna dan mood tracking.
- **UI Library**: [Chakra UI](https://chakra-ui.com/) - Library komponen yang responsif dan modern.

## Instalasi dan Penggunaan

### Persyaratan

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- **Node.js** (versi 14.x atau lebih baru)
- **MySQL** untuk database

### 1. Clone Repositori

Clone proyek ini ke mesin lokal Anda:

```bash
git clone https://github.com/hajjulikram/MindBalance.git
cd MindBalance
```

### 2. Instal Dependensi

#### Frontend

Masuk ke folder **Frontend** dan instal dependensinya:

```bash
cd frontend
npm install
```

#### Backend

Masuk ke folder **Backend** dan instal dependensinya:

```bash
cd backend
npm install
```

### 3. Setup Database

1. Buat database baru di MySQL dengan nama `mindbalance_db`.
2. Impor file SQL (jika tersedia) ke dalam database.
3. Buat file **.env** di folder **backend** dan tambahkan konfigurasi database Anda seperti berikut:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=mindbalance_db
```

### 4. Menjalankan Aplikasi

#### Menjalankan Backend

```bash
cd backend
npm start
```

#### Menjalankan Frontend

```bash
cd frontend
npm run dev
```

Frontend akan berjalan di `http://localhost:3000`, dan backend API akan berjalan di `http://localhost:3001`.

## Lisensi

Proyek ini bersifat **open-source** dan bebas digunakan untuk keperluan pembelajaran dan pengembangan.
