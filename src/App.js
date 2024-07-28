import { headers } from 'next/headers';
import style from './App.css';


function App() {
  return (
    <div className="main">
        <div className='header'>
          <h1 className='header_title'>TODO LIST</h1>
          <div className='header_search-bar'>
            <div className='header_search-bar-box'>
              <input className='header_search-bar-input' placeholder='Search note...'></input>
              <i class="fa-solid fa-magnifying-glass header_icon-search"></i>
            </div>
             <div className='header_select color-hover'>
              All
              <div className=' header_select-icon'>

              <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className='header_select-list'>
                <p className='header_select-list-items'>All</p>
                <p className='header_select-list-items'>Complete</p>
                <p className='header_select-list-items'>Incomplete</p>
              </div>
              </div>
              <button className='header_btn-mode color-hover'>
                <i class="fa-regular fa-moon"></i>
              </button>

          </div>
        </div>
    </div>

  );
}



export default App;
