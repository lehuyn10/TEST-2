import { headers } from 'next/headers';
import style from './App.css';


function App() {
  return (
    <div className="main">
        <div className='header'>
          <h1 className='header_title'>TODO LIST</h1>
          <div className='header_search-bar'>
             <input placeholder='Search note...'></input>
             <i></i>
             <div className='header_select'>
              ALL
              <i></i>
              </div>
              <button>
                <i></i>
                Night
              </button>

          </div>
        </div>
    </div>

  );
}



export default App;
