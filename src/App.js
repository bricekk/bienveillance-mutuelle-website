import './App.scss';
import './index.scss';
import { img1, img2, img5, img9, img7 } from './assets'


import { Navbar, Contact } from './components';
import { About, Header, Footer, Life, Features } from './containers'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


function App() {
  return (
    <div className="App">
      <div className=''>
        <Navbar />
      </div>
      <div>
        <Header />
        <Features />
        <About />
        <Swiper slidesPerView={1} style={{borderTop:"2px dashed rgba(102, 102, 102, .6)", borderBottom:"2px dashed rgba(102, 102, 102, .6)"}} className="section__margin">
          <SwiperSlide>
            <Life image={img1} title="Recollection BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et dejeuner ensemble afin de mieux nous connaitre." />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img2} title="Dejeuner BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et dejeuner ensemble afin de mieux nous connaitre." />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img5} title="Soir&eacute;e BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et s'amuser ensemble afin de mieux nous connaitre." />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img7} title="Soir&eacute;e BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et s'amuser ensemble afin de mieux nous connaitre." />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img9} title="Matinee BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et s'amuser ensemble afin de mieux nous connaitre." />
          </SwiperSlide>
        </Swiper>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
