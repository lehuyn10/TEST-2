import { headers } from 'next/headers';
import style from './App.css';


function App() {
  return (
    <div className="main">
        <div className='header'>
          <h1 className='header_title'>TODO LIST</h1>
          <div className='header_search-bar'>
             <input className='header_search-bar-input' placeholder='Search note...'></input>
             <i></i>
             <div className='header_select color-hover'>
              All
              <i className='header_select-icon'>v</i>
              <div className='header_select-list'>
                <p className='header_select-list-items'>All</p>
                <p className='header_select-list-items'>Complete</p>
                <p className='header_select-list-items'>Incomplete</p>
              </div>
              </div>
              <button className='header_btn-mode color-hover'>
                <i></i>
                Night
              </button>

          </div>
        </div>
    </div>

  );
}



export default App;
