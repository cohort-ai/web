import './App.css';
import logoLarge from './assets/logo_transparent.png';

function App() {
  return (
    <div className="video-bg-wrapper">
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="center-content">
        <img src={logoLarge} alt="Cohort AI Logo" className="main-logo" />
        <p className="coming-soon">We are working on something big. Stay tuned.</p>
      </div>
    </div>
  );
}

export default App;
