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
              <p className='content_handle-icon content_handle-icon--edit'>edit</p>
              <p className='content_handle-icon content_handle-icon--delete'>delete</p>
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
                <p className='content_handle-icon content_handle-icon--edit'>edit</p>
                <p className='content_handle-icon content_handle-icon--delete'>delete</p>
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
              <p className='content_handle-icon content_handle-icon--edit'>edit</p>
              <p className='content_handle-icon content_handle-icon--delete'>delete</p>
              </div>
            </li>
          </ul>
          <button className='content_add color-hover'>
            +
          <div className='page_add_note'>
              <h1 className='header_title'>NEW NOTE</h1>
              <div className='content_input'>
               <input  nput className='content_input-add' placeholder='Input your note...'></input>
              </div>
              <div className='footer'>
                <button className='footer_btn footer_btn-cancel'>CANCEL</button>
                <button className='footer_btn footer_btn-apply color-hover'>APPLY</button>
              </div>
            </div>
          </button>
      </div>
  
    );
  }
  
  
  
  export default Body;