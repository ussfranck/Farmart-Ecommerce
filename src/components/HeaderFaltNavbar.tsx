import '../css/App.css';
import { Logo } from './Logo';
import { IoSearchOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart3, BsHeart } from 'react-icons/bs';

export const HeaderFaltNavbar = () => {
  return (
    <section className='app-header-falt-nav'>
      <Logo />
      <div className='app-header-falt-nav__search-bar'>
        <select name='search-bar-select' id='search-bar-select'>
          <option value='All categories' defaultChecked>All Categories</option>
          <option value='special-food'>Special Food</option>
        </select>
        <input type='text' placeholder="i'm searching for..." name='search-input' id='search-input' />
        <div className='search-bar-btn'>
          <IoSearchOutline />
        </div>
      </div>
      <div className='app-header-falt-nav__utility-actions'>
        <div>
          <p>8 800 332 65-66</p>
          <span>Support 24/7</span>
        </div>
        <div>
          <a href='/account' className='app-header-falt-nav__utility-actions__box-icon'>
            <IoPersonOutline />
          </a>
          <a href='#favorite' className='app-header-falt-nav__utility-actions__box-icon'>
            <BsHeart />
            <div className='app-icon-badge'>0</div>
          </a>
          <a href='/cart' className='app-header-falt-nav__utility-actions__box-icon'>
            <BsCart3 />
            <div className='app-icon-badge'>0</div>
          </a>
          <div className='user-get-view'>
            <span>You cart</span>
            <p role='contentinfo' title='you current money'>$2,650.59</p>
          </div>
        </div>
      </div>
    </section>
  );
}