import './App.scss';
import './index.scss';
import {img1, img2, img5} from './assets'


import { Navbar } from './components';
import { About, Header, Footer, Life } from './containers'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {
  return (
    <div className="App">
      <div className='gradient__happier'>
        <Navbar />
      </div>
      <div>
        <Header />
        <About />
        <Swiper slidesPerView={1}>
          <SwiperSlide>
            <Life image={img1} title="Recollection BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et dejeuner ensemble afin de mieux nous connaitre." />
            </SwiperSlide>
            <SwiperSlide>
            <Life image={img2} title="Dejeuner BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et dejeuner ensemble afin de mieux nous connaitre." />
            </SwiperSlide>
            <SwiperSlide>
            <Life image={img5} title="Soir&eacute;e BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et s'amuser ensemble afin de mieux nous connaitre." />
            </SwiperSlide>
        </Swiper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
