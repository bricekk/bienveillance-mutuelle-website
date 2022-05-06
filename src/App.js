import './App.scss';
import './index.scss';
import img1 from './assets/img5.jpg'
import img2 from './assets/img4.jpg'


import { Navbar } from './components';
import { About, Header, Footer, Life } from './containers'

function App() {
  return (
    <div className="App">
      <div className='gradient__happier'>
        <Navbar />
      </div>
      <div>
        <Header />
        <About/>
        <Life image={img1} title="Recollection BMBF" text="C'est regulierement que nous nous regroupons pour partager, echanger et dejeuner ensemble afin de mieux nous connaitre"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
