import { IoIosHome, IoIosPerson } from 'react-icons/io';
import { IoIosText } from 'react-icons/io';
import './App.css';


import Elements from './smallbtn';
function List() {
    return (
      <div className="ul">
        <ul className='hd-list'>
        <Elements links='https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react' name='Home' icons={<IoIosHome/>}/>
        <Elements link='https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/' name='Prescription' icons={<IoIosHome/>}/>
        <Elements link='https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/' name='Profile' icons={<IoIosPerson/>}/>
        <Elements link='https://www.youtube.com/watch?v=hjR-ZveXBpQ' name='Chat' icons={<IoIosText/>}/>
        </ul>
      </div>
    );
  }
  
  export default List;