import { MdElectricBolt } from 'react-icons/md';
import { IoPricetagsOutline } from 'react-icons/io5';
import { SlMenu } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';
import {GoSync } from 'react-icons/go';

export const SubNavHeading = () => {
  return (
    <section className='sub-nav-heading'>
      <div className='sub-nav-heading__left-side'>
        <button type='button' className='primary-button'><SlMenu />Shop by Categories</button>
        <div className='sub-nav-heading__left-side__utility'>
          <div className='sub-nav-heading__left-side__utility-box'>
            <MdElectricBolt />
            <span>Deals Today</span>
          </div>
          <div className='sub-nav-heading__left-side__utility-box'>
            <IoPricetagsOutline />
            <span>Special Prices</span>
          </div>
          <div className='sub-nav-heading__left-side__utility-box elit'>
            <span>Fresh</span>
            <IoIosArrowDown />
          </div>
          <div className='sub-nav-heading__left-side__utility-box elit'>
            <span>Frozen</span>
            <IoIosArrowDown />
          </div>
          <div className='sub-nav-heading__left-side__utility-box elit'>
            <span>Demos</span>
            <IoIosArrowDown />
          </div>
          <div className='sub-nav-heading__left-side__utility-box elit'>
            <span>Shop</span>
            <IoIosArrowDown />
          </div>
          <div className='sub-nav-heading__left-side__utility-box elit'>
            <span>Blog</span>
            <IoIosArrowDown />
          </div>
          <div className='sub-nav-heading__left-side__utility-box elit'>
            <span>Pages</span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className='recently-button'>
        <GoSync />
        <span>Recently Viewed</span>
      </div>
    </section>
  );
}