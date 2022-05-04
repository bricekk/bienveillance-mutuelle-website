import './App.scss';
import './index.scss'

import { Navbar, Header } from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient__happier'>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
