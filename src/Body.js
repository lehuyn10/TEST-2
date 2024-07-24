import { headers } from 'next/headers';
import style from './Body.css';

function Body() {
    return (
      <div className="content">
          <ul className='content_list'>
            <li className='content_list_note'>
                <input type= "checkbox"></input>   
                NOTE #1 
                <p>edit</p>
                <p>delete</p>
            </li>
            <li className='content_list_note'>
                <input type= "checkbox"></input>   
                NOTE #2
                <p>edit</p>
                <p>delete</p>
            </li> <li className='content_list_note'>
                <input type= "checkbox"></input>   
                NOTE #
                <p>edit</p>
                <p>delete</p>
            </li>
          </ul>
          <button>ADD</button>
      </div>
  
    );
  }
  
  
  
  export default Body;