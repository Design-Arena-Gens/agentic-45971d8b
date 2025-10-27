'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [stars, setStars] = useState<Array<{ left: string; top: string; size: string; delay: string }>>([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 3}s`
    }))
    setStars(generatedStars)
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">STELLAR</div>
          <ul className="nav-links">
            <li><a href="#missions">Missions</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#stats">Statistics</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="stars">
          {stars.map((star, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Explore the Cosmos</h1>
          <p className="hero-subtitle">Pioneering humanity's journey beyond Earth</p>
          <button className="cta-button">Launch Discovery</button>
        </div>
      </section>

      <section id="missions" className="section">
        <div className="container">
          <h2 className="section-title">Active Missions</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>Mars Explorer</h3>
              <p>Advanced rover mission studying Martian geology and searching for signs of ancient microbial life.</p>
            </div>
            <div className="card">
              <div className="card-icon">🛰️</div>
              <h3>Deep Space Telescope</h3>
              <p>Next-generation space observatory capturing unprecedented images of distant galaxies and exoplanets.</p>
            </div>
            <div className="card">
              <div className="card-icon">🌙</div>
              <h3>Lunar Gateway</h3>
              <p>Establishing a sustainable human presence on the Moon as a stepping stone to Mars exploration.</p>
            </div>
            <div className="card">
              <div className="card-icon">☄️</div>
              <h3>Asteroid Mining</h3>
              <p>Pioneering technology to extract valuable resources from near-Earth asteroids.</p>
            </div>
            <div className="card">
              <div className="card-icon">🪐</div>
              <h3>Saturn Probe</h3>
              <p>Comprehensive study of Saturn's atmosphere, rings, and moons, including Titan and Enceladus.</p>
            </div>
            <div className="card">
              <div className="card-icon">🌌</div>
              <h3>Interstellar Voyager</h3>
              <p>Long-duration mission to study the heliosphere boundary and interstellar medium.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Our Agency</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Our Vision</h3>
              <p>To make humanity a multi-planetary species through breakthrough space exploration and cutting-edge research.</p>
            </div>
            <div className="card">
              <h3>Innovation</h3>
              <p>Developing next-generation propulsion systems, life support technologies, and sustainable space habitats.</p>
            </div>
            <div className="card">
              <h3>Collaboration</h3>
              <p>Working with international partners, private companies, and research institutions worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="section">
        <div className="container">
          <h2 className="section-title">By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">127</div>
              <div className="stat-label">Successful Launches</div>
            </div>
            <div className="stat">
              <div className="stat-number">45</div>
              <div className="stat-label">Active Missions</div>
            </div>
            <div className="stat">
              <div className="stat-number">2.4B</div>
              <div className="stat-label">Miles Traveled</div>
            </div>
            <div className="stat">
              <div className="stat-number">18</div>
              <div className="stat-label">Partner Nations</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Stellar Space Agency. Exploring infinity, one mission at a time.</p>
        </div>
      </footer>
    </>
  )
}
