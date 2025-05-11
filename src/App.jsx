// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';

export default function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <img
          src="/me.jpg"
          alt="Profile"
          style={{ width: 150, height: 150, borderRadius: '50%' }}
        />
        <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>Sayan Saha</h1>
        <p style={{ fontSize: '1rem', maxWidth: 600, margin: '1rem auto' }}>
          2A Mechatronics Engineering student passionate about aerospace, robotics, and creative technology. Welcome to my portfolio!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link to="/astro" style={{ textDecoration: 'none' }}>
            <div style={{ width: 250, border: '2px solid #000', padding: '1rem', borderRadius: '1rem' }}>
              <img src="/astro.jpg" alt="Astro Project" style={{ width: '100%', borderRadius: '0.5rem' }} />
              <h2>Astro Project</h2>
              <p>🛠 Python • OpenCV • Robotics</p>
            </div>
          </Link>
          <Link to="/furnace" style={{ textDecoration: 'none' }}>
            <div style={{ width: 250, border: '2px solid #000', padding: '1rem', borderRadius: '1rem' }}>
              <img src="/furnace.jpg" alt="Furnace Project" style={{ width: '100%', borderRadius: '0.5rem' }} />
              <h2>Furnace Design</h2>
              <p>🛠 CAD • Thermal Simulation • Mechatronics</p>
            </div>
          </Link>
        </div>

        <Routes>
          <Route path="/astro" element={<ProjectPage title="Astro Project" image="/astro.jpg" description="Detailed description of the Astro Project, including challenges, tools used, and goals achieved." />} />
          <Route path="/furnace" element={<ProjectPage title="Furnace Design" image="/furnace.jpg" description="Detailed description of the Furnace Design project, including CAD work and simulation results." />} />
        </Routes>
      </div>
    </Router>
  );
}

function ProjectPage({ title, image, description }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: '80%', borderRadius: '1rem' }} />
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', maxWidth: 800, margin: '0 auto' }}>{description}</p>
    </div>
  );
}
