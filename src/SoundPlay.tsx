import React, { useEffect } from 'react';
import { Howl } from 'howler';

interface BackgroundMusicProps {
  src: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ src }) => {
  useEffect(() => {
    const sound = new Howl({
      src: [src],
      autoplay: true,
      loop: true,
    });

    // Возвращаем функцию для очистки при размонтировании компонента
    return () => {
      sound.stop(); // Остановка воспроизведения при размонтировании компонента
    };
  }, [src]);

  return null; // Возвращаем null, так как компонент ничего не рендерит
};

export default BackgroundMusic;
