import './App.scss';
import './index.scss'

import { Navbar, Header } from './components';
import { About } from './containers'

function App() {
  return (
    <div className="App">
      <div className='gradient__happier'>
        <Navbar />
      </div>
      <div>
        <Header />
        <About/>
      </div>
    </div>
  );
}

export default App;
