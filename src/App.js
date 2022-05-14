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
        <div style={{borderTop:"2px dashed rgba(102, 102, 102, .6)", borderBottom:"2px dashed rgba(102, 102, 102, .6)"}} className="section__margin">
        <Swiper slidesPerView={1}>
          <SwiperSlide>
            <Life image={img1} title="Pique-niques" text="C'est r&eacute;gulierement que nous nous regroupons pour partager, &eacute;changer et d&eacute;jeuner ensemble afin de mieux nous connaitre et surtout &eacute;tablir des relations saines et sincerees" />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img2} title="Pique-niques" text="L'organisme fait la difference des autres organismes par la qualite du temps passe ensemble" />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img5} title="Soir&eacute;es" text="Des soir&eacute;es dansantes et joyeuses ou des femmes se rassemblent pour faire connaissance et nouer des relations &eacute;troites dans l'harmonie et l'ambiance." />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img7} title="Des diners" text="" />
          </SwiperSlide>
          <SwiperSlide>
            <Life image={img9} title="Matin&eacute;es Zumba Yoga" text="Parenthèses propices au lâcher-prise et à la décompression, ces rassemblements nous stimulent et procurent des sentiments de reconfort et de joie. « On s'offre un instant de relaxation en companie de personnes qui nous comprennent.», " />
          </SwiperSlide>
        </Swiper>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
