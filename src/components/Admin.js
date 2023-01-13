import { React } from 'react';
import { NavLink} from 'react-router-dom';
import '../App.css';

function Admin() {
  return (
    <div className='Admin'>
      <div className='Admin_NamePage'>Seleck an object</div>
      <ul className='Admin_List'>
        <NavLink to="/game" className='Admin_ListButton'>
          play
        </NavLink>
        <NavLink to="/game" className='Admin_ListButton'>
          baker
        </NavLink>
        <NavLink to="/game" className='Admin_ListButton'>
          oven
        </NavLink>
        <NavLink to="/game" className='Admin_ListButton'>
          product
        </NavLink>
        <NavLink to="/game" className='Admin_ListButton'>
          recipe
        </NavLink>
        <NavLink to="/game" className='Admin_ListButton'>
          storage
        </NavLink>
      </ul>
    </div>
  );
}

export default Admin;