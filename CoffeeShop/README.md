# ☕ Coffee Shop - Premium React Template

Selamat datang di template **Coffee Shop**! Template ini dirancang khusus untuk kedai kopi modern yang ingin memiliki kehadiran digital yang profesional, elegan, dan fungsional.

## 🚀 Fitur Utama
- **Modern UI/UX**: Desain bersih, minimalis, dan responsif menggunakan Tailwind CSS.
- **Centralized Config**: Ubah seluruh konten website (teks, gambar, link) hanya melalui satu file.
- **Formulir Berfungsi**: Booking meja dan Newsletter sudah terintegrasi dengan Formspree.
- **SEO Optimized**: Sudah dilengkapi dengan Meta Tags untuk Google dan Media Sosial.
- **Performa Tinggi**: Dibangun dengan Vite & React 19 untuk loading yang sangat cepat.

## 🛠️ Cara Penggunaan

### 1. Persiapan
Pastikan Anda sudah menginstal Node.js di komputer Anda.

### 2. Instalasi
Jalankan perintah berikut di terminal:
```bash
npm install
```

### 3. Menjalankan Mode Development
```bash
npm run dev
```

### 4. Cara Kustomisasi (PENTING)
Anda tidak perlu mengedit file komponen satu per satu. Cukup buka:
`constants/siteData.ts`

Di sana Anda bisa mengubah:
- Nama Toko & Deskripsi
- Menu (Nama, Deskripsi, Harga, Gambar)
- Link Sosial Media
- Gambar Hero & Gallery

### 5. Mengaktifkan Formulir (Booking & Newsletter)
Template ini menggunakan **Formspree** (Gratis).
1. Buat akun di [Formspree.io](https://formspree.io/).
2. Buat "New Form".
3. Copy "Form ID" yang Anda dapatkan.
4. Masukkan ID tersebut di `constants/siteData.ts` pada bagian `forms`.

Contoh:
```typescript
forms: {
  bookingAction: "https://formspree.io/f/id_anda_disini",
  newsletterAction: "https://formspree.io/f/id_anda_disini",
}
```

### 6. Deployment (Hosting)
Untuk membuat file siap upload:
```bash
npm run build
```
Hasilnya akan ada di folder `dist/`. Anda bisa mengupload folder tersebut ke Vercel, Netlify, atau Hosting pilihan Anda.

---
Dibuat dengan ❤️ untuk membantu bisnis kopi Anda berkembang.
