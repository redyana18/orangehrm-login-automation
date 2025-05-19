# 🧪 OrangeHRM Login Automation
Proyek ini merupakan implementasi pengujian otomatis (Automation Testing) pada halaman login aplikasi OrangeHRM menggunakan **Cypress** dan pendekatan **Page Object Model (POM)**.

-----

## 🔧 Teknologi yang Digunakan
- [Cypress](https://www.cypress.io/) - Framework testing end-to-end modern
- JavaScript
- Page Object Model (POM) design pattern

-----

## 🚀 Cara Menjalankan Proyek Ini

1. **Clone repositori**
   ```bash
   git clone https://github.com/redyana18/orangehrm-login-automation.git
   cd orangehrm-login-automation
2. Install dependensi
   ```bash
   npm install
3. Jalankan pengujian
   ```bash
   npx cypress run
4. GUI mode:
   ```bash
   npx cypress open

-----

🧾 Penjelasan Singkat
LoginPages.js: Mendefinisikan elemen dan fungsi yang berhubungan dengan halaman login (menggunakan POM).
login.spec.cy.js: Script utama untuk melakukan pengujian login.
cypress.config.js: Mengatur konfigurasi dasar seperti baseUrl, viewport, dan sebagainya.
