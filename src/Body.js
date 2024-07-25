import { headers } from 'next/headers';
import style from './Body.css';

function Body() {
    return (
      <div className="content">
          <ul className='content_list'>
            <li className='content_list_note'>
              <div className='content_note'>
                <input className='content_note-checkbox' type= "checkbox"></input>   
                <span className='content_note-text'>
                NOTE #1 
                </span>
              </div>
              <div className='content_handle'>
              <p className='content_handle-icon'>edit</p>
              <p className='content_handle-icon'>delete</p>
              </div>
            </li>
            <li className='content_list_note'>
              <div className='content_note'>
                <input className='content_note-checkbox' type= "checkbox"></input>   
                <span className='content_note-text content_note-text--delete'>
                NOTE #2 
                </span>
              </div>
              <div className='content_handle'>
                <p className='content_handle-icon'>edit</p>
                <p className='content_handle-icon'>delete</p>
              </div>
            </li>
            <li className='content_list_note'>
              <div className='content_note'>
                <input className='content_note-checkbox' type= "checkbox"></input>   
                <span className='content_note-text'>
                NOTE #3 
                </span>
              </div>
              <div className='content_handle'>
              <p className='content_handle-icon'>edit</p>
              <p className='content_handle-icon'>delete</p>
              </div>
            </li>
          </ul>
          <button className='content_add'>+</button>
      </div>
  
    );
  }
  
  
  
  export default Body;