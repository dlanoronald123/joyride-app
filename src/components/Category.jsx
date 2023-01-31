import {GiNoodles, GiChopsticks, GiHamburger, GiFullPizza} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './Component.scss';

function Category() {
  return (
    <div className='list'>
      <NavLink to={'/cuisine/Japanese'} className="category-buttons">
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'} className="category-buttons">
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'} className="category-buttons">
        <GiHamburger/>
        <h4>American</h4>
      </NavLink>
      
      <NavLink to={'/cuisine/Italian'} className="category-buttons"> 
        <GiFullPizza/>
        <h4>Italian</h4>
      </NavLink>
    </div>
  )
}


export default Category