import React from 'react';
import './App.css';
import videoSource from './VideoOL.mp4';
import ControlledCarousel from './Carousel';
import BackgroundMusic from './SoundPlay';
import comeOnLetsGo from './CUMON.mp3';

const App: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = '#footer';
    const audio = new Audio(comeOnLetsGo);
    audio.play();
  };

  return (
    <>
      <BackgroundMusic src="./src/Kevin Levrone Muah _ edit (128kbps).mp3" />
      <section>
        <div className='video-bg'>
          <video src={videoSource} autoPlay muted loop></video>
        </div>
        <div className="effects"></div>
        <div className='video-bg_content'>
          <h1> В♂️anal♂️димир, с ♂️day of anal out jump♂️</h1>
          <div className='itd_play'>
          </div>
          <button id ='DICK' onClick={handleButtonClick} className='btn btn-itd btn-lg text-uppercase'>GO TO THE GYM</button>
        </div>
      </section>
      <footer id='footer'>
        <ControlledCarousel />
      </footer>
    </>
  );
}

export default App;
