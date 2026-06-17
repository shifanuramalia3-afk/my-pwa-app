import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('profil');

  return (
    <div className="app">
      <div className="header">
        <div className="header-left">
          <div className="header-dot"></div>
          <div>
            <div className="header-title">My PWA App</div>
            <div className="header-sub">Pemrograman Web Lanjut</div>
          </div>
        </div>
        <div className="header-icons">
          <span className="header-icon">&#x1F4F6;</span>
          <span className="header-icon">&#x1F514;</span>
        </div>
      </div>

      {page === 'profil' && (
        <div className="page">
          <div className="hero">
            <div className="hero-inner">
              <div className="av-wrap">
                <div className="av">SN</div>
                <div className="av-online"></div>
              </div>
              <div className="hero-text">
                <h1>Shifa Nur Amalia</h1>
                <p>Mahasiswi Teknik Informatika</p>
                <div className="hero-badge">&#10003; Aktif Semester 6</div>
              </div>
            </div>
          </div>

          <div className="body">
            <div className="pwa-card">
              <div className="pwa-card-top">
                <span className="pwa-card-title">Progressive Web App</span>
                <span className="pwa-card-badge">Live</span>
              </div>
              <div className="pwa-feats">
                <div className="pwa-feat"><span className="feat-icon-sm">&#x1F4F5;</span><div><div className="pf-t">Offline</div><div className="pf-s">Service Worker</div></div></div>
                <div className="pwa-feat"><span className="feat-icon-sm">&#x2B07;</span><div><div className="pf-t">Installable</div><div className="pf-s">Add to Home</div></div></div>
                <div className="pwa-feat"><span className="feat-icon-sm">&#x26A1;</span><div><div className="pf-t">Fast Load</div><div className="pf-s">Cache API</div></div></div>
                <div className="pwa-feat"><span className="feat-icon-sm">&#x1F512;</span><div><div className="pf-t">Secure</div><div className="pf-s">HTTPS Only</div></div></div>
              </div>
            </div>

            <div className="section">
              <div className="sec-label">Informasi Mahasiswa</div>
              <div className="info-grid">
                <div className="info-tile"><div className="itl">Nama</div><div className="itv">Shifa Nur Amalia</div></div>
                <div className="info-tile"><div className="itl">NIM</div><div className="itv">2403040032</div></div>
                <div className="info-tile"><div className="itl">Program Studi</div><div className="itv">Teknik Informatika</div></div>
                <div className="info-tile"><div className="itl">Semester</div><div className="itv">6</div></div>
                <div className="info-tile full"><div className="itl">Universitas</div><div className="itv">Universitas Muhammadiyah Purwokerto</div></div>
                <div className="info-tile full"><div className="itl">Email</div><div className="itv">cippaaaa@gmail.com</div></div>
              </div>
            </div>

            <div className="section">
              <div className="sec-label">Keahlian Teknologi</div>
              <div className="skill-row">
                {['React.js','JavaScript','PWA','Node.js','Git','HTML & CSS'].map(s => (
                  <span key={s} className="sk">{s}</span>
                ))}
              </div>
            </div>

            <div className="section">
              <div className="sec-label">Progres Belajar</div>
              {[
                { label: 'React.js', pct: 85, color: '#7F77DD' },
                { label: 'JavaScript', pct: 80, color: '#D4537E' },
                { label: 'PWA', pct: 75, color: '#1D9E75' },
                { label: 'Node.js', pct: 65, color: '#378ADD' },
              ].map(item => (
                <div className="prog-item" key={item.label}>
                  <div className="prog-top">
                    <span>{item.label}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="prog-bar">
                    <div className="prog-fill" style={{ width: item.pct + '%', background: item.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page === 'pwa' && (
        <div className="page pwa-page">
          <div className="pwa-banner">
            <div className="pwa-banner-icon">&#x1F4F1;</div>
            <h2>Progressive Web App</h2>
            <p>Web yang terasa seperti aplikasi native</p>
          </div>

          <div className="feat-list">
            {[
              { icon: '&#x1F4F5;', title: 'Offline support', desc: 'Tetap bisa diakses tanpa koneksi internet via Service Worker', bg: '#EEEDFE' },
              { icon: '&#x2B07;', title: 'Installable', desc: 'Bisa diinstall ke homescreen tanpa melalui app store', bg: '#E1F5EE' },
              { icon: '&#x26A1;', title: 'Fast loading', desc: 'Caching aset membuat loading jauh lebih cepat', bg: '#FAEEDA' },
              { icon: '&#x1F512;', title: 'Secure HTTPS', desc: 'Wajib HTTPS agar Service Worker aman digunakan', bg: '#E6F1FB' },
            ].map(f => (
              <div className="feat-item" key={f.title}>
                <div className="feat-icon-box" style={{ background: f.bg }} dangerouslySetInnerHTML={{ __html: f.icon }}></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="sec-label" style={{ marginBottom: '8px' }}>Tanya Jawab PWA</div>
          {[
            { q: 'Mengapa PWA lebih ringan dari native?', a: 'Berjalan di browser tanpa instalasi besar — hanya mengunduh aset yang diperlukan saja.' },
            { q: 'Beda Manifest & Service Worker?', a: 'Manifest mengatur identitas app (nama, ikon), Service Worker mengelola cache & offline support.' },
            { q: 'Mengapa wajib HTTPS?', a: 'Service Worker bisa intercept request jaringan — HTTPS memastikan tidak disalahgunakan pihak lain.' },
            { q: 'Kapan pilih PWA vs native?', a: 'PWA cocok untuk budget terbatas & jangkauan luas. Native untuk akses hardware mendalam & performa tinggi.' },
          ].map(item => (
            <div className="qa-item" key={item.q}>
              <div className="qa-q">{item.q}</div>
              <div className="qa-a">{item.a}</div>
            </div>
          ))}
        </div>
      )}

      <div className="navbar">
        <button className={`nb ${page === 'profil' ? 'on' : ''}`} onClick={() => setPage('profil')}>
          <span className="nb-icon">&#x1F464;</span>
          <span>Profil</span>
        </button>
        <button className={`nb ${page === 'pwa' ? 'on' : ''}`} onClick={() => setPage('pwa')}>
          <span className="nb-icon">&#x1F4F1;</span>
          <span>Tentang PWA</span>
        </button>
      </div>
    </div>
  );
}

export default App;