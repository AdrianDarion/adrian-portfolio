
import React from 'react';

export default function AdrianDarionPortfolio() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <img src="profile.jpg" alt="Foto Adrian Darion" width="128" height="128" style={{ borderRadius: '50%' }} />
        <h1>Adrian Darion</h1>
        <p><strong>Adrian Darion Portfolio</strong></p>
        <p>Saya adalah Adrian Darion yang sekolah di SMP Gembala Baik. Saya suka di bidang IT, termasuk coding.</p>
      </div>

      <section>
        <h2>Pendidikan</h2>
        <p>SMP Gembala Baik</p>
      </section>

      <section>
        <h2>Keahlian</h2>
        <ul>
          <li>Coding</li>
        </ul>
      </section>

      <section>
        <h2>Proyek</h2>
        <h3>Web Kelas 8D</h3>
        <p>Web by Adrian</p>
        <a href="https://adriandarion.github.io/Adrian-Darion-8D/" target="_blank">Lihat Proyek</a>
      </section>

      <section>
        <h2>Kontak</h2>
        <p>Email: drizzznoles@gmail.com</p>
        <p>GitHub: <a href="https://github.com/AdrianDarion" target="_blank">github.com/AdrianDarion</a></p>
        <p>Telepon: 0895 0907 5062</p>
      </section>
    </main>
  );
}
