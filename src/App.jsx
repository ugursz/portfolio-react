import { useState } from 'react';
import './App.css';

function App() {
  // State tanımlamaları (Hooks)
  const [hardwareProjects, setHardwareProjects] = useState(12);
  const [softwareProjects, setSoftwareProjects] = useState(8);
  const [showProjects, setShowProjects] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL', 'HARDWARE', 'SOFTWARE'

  // Proje listesi (Veritabanı simülasyonu)
  const projectsData = [
    { id: 1, type: 'HARDWARE', title: 'STM32 Tabanlı Asansör Fotosel Test Jigi', desc: 'Pogo pin otomasyonu ile light curtain sistem testi.' },
    { id: 2, type: 'SOFTWARE', title: 'Mini-ERP Depo Yönetim Sistemi', desc: '.NET, PostgreSQL ve React mimarisi.' },
    { id: 3, type: 'HARDWARE', title: 'Hayvancılık Sektörü Pulsatör Zamanlama Kartı', desc: 'Tarım-teknolojileri odaklı donanım geliştirme.' },
    { id: 4, type: 'SOFTWARE', title: 'Anlık Üretim Takip Yazılımı', desc: 'Next.js ve Tailwind CSS altyapılı endüstriyel arayüz.' }
  ];

  const portfolioData = {
    fullName: "Uğur Sezgin",
    title: "Mekatronik Mühendisi & Full-Stack Geliştirici",
    bio: "Gömülü sistemler, donanım geliştirme ve modern web teknolojileri üzerine çalışmalar yapıyorum. Sistem mimarisi ve sürdürülebilir çözümler üretmek odak noktam.",
    skills: ["STM32 / ESP32", ".NET / PostgreSQL", "React / Next.js"]
  };

  // Filtreleme mantığı
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'ALL') return true;
    return project.type === activeFilter;
  });

  return (
    <div className="card-container">
      <div className="portfolio-card">
        <h1 className="name-title">{portfolioData.fullName}</h1>
        <p className="subtitle">{portfolioData.title}</p>
        
        <div className="bio-section">
          <p>{portfolioData.bio}</p>
        </div>

        <div className="skills-container">
          {portfolioData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>

        <div className="divider"></div>

        {/* Sayaçlar */}
        <div className="counter-section">
          <div className="counter-box">
            <span className="counter-number">{hardwareProjects}</span>
            <span className="counter-label">Donanım Projesi</span>
            <button onClick={() => setHardwareProjects(prev => prev + 1)} className="action-button">
              Sayıyı Artır +
            </button>
          </div>
          
          <div className="counter-box">
            <span className="counter-number">{softwareProjects}</span>
            <span className="counter-label">Yazılım Projesi</span>
            <button onClick={() => setSoftwareProjects(prev => prev + 1)} className="action-button">
              Sayıyı Artır +
            </button>
          </div>
        </div>

<div className="divider"></div>

        {/* Göster/Gizle Butonu */}
        <div className="toggle-section">
          <button 
            onClick={() => setShowProjects(prev => !prev)} 
            className={`toggle-button ${showProjects ? 'active' : ''}`}
          >
            {showProjects ? 'Projeleri Gizle ▲' : 'Projeleri Listele ▼'}
          </button>
        </div>

        {/* Animasyon için kapsayıcı sınıf dinamik hale getirildi */}
        <div className={`projects-wrapper ${showProjects ? 'expanded' : ''}`}>
          <div className="projects-section">
            {/* Filtre Butonları */}
            <div className="filter-container">
              <button 
                onClick={() => setActiveFilter('ALL')} 
                className={`filter-btn ${activeFilter === 'ALL' ? 'selected' : ''}`}
              >
                Hepsi
              </button>
              <button 
                onClick={() => setActiveFilter('HARDWARE')} 
                className={`filter-btn ${activeFilter === 'HARDWARE' ? 'selected' : ''}`}
              >
                Donanım
              </button>
              <button 
                onClick={() => setActiveFilter('SOFTWARE')} 
                className={`filter-btn ${activeFilter === 'SOFTWARE' ? 'selected' : ''}`}
              >
                Yazılım
              </button>
            </div>

            {/* Dinamik Listeleme */}
            <div className="project-list">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-item">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <span className="project-type-tag">{project.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;