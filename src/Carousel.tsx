import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img  src='https://fonoteka.top/uploads/posts/2022-09/1663805309_21-phonoteka-org-p-billi-kherrington-oboi-krasivo-23.jpg'></img>
        <Carousel.Caption>
          <h3 >Помни, Вова</h3>
          <p>Сьешь же кекс, с моей ass</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://sun9-80.userapi.com/impf/SUkgKFN4_AeHBe0nZ7WUShKTEkDBXTNVCFUxaw/5u3F9dlUKEo.jpg?size=1920x1080&quality=96&sign=908985cd530a845cc94c4debe0a37404&c_uniq_tag=4HR7EUCnDxiPvbsq-R4rKkWeNiGwmsj3N6h5EdlQHhg&type=album'></img>
        <Carousel.Caption>
          <h3 >Чтобы стать</h3>
          <p>Так много дебагинга, так мало времени</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://polinka.top/uploads/posts/2023-05/1684935442_polinka-top-p-kartinki-lololoshki-krasivo-1.jpg'></img>
        <Carousel.Caption>
          <h3 id='3' className='Custom-h3'>Таким же крутым</h3>
          <p id='3' className='Custom-p'>
            Сегодня будем проходить сборку МГТУ ИМ......, в пизду...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://a.d-cd.net/jbGYVuRo_Ckdg7_l50tl6QObkbE-1920.jpg'></img>
        <Carousel.Caption>
          <h3>Надо...</h3>
          <p>ЕБАТЬ, ЭТО ЖЕ КУЛХАЦКЕР.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://risovach.ru/upload/2018/06/generator/papich_178441777_orig_.jpg'></img>
        <Carousel.Caption>
          <h3 >Учиться работать копьем</h3>
          <p>
            Потом затыкаешь кого блять угодно
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
