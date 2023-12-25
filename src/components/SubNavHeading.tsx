import { MdElectricBolt } from 'react-icons/md';
import { IoPricetagsOutline } from 'react-icons/io5';
import { SlMenu } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';
import {GoSync } from 'react-icons/go';
import { motion } from 'framer-motion';

export const SubNavHeading = () => {
  return (
    <section className='sub-nav-heading'>
      <div className='sub-nav-heading__left-side'>
        <motion.button whileTap={{scale: .8}} type='button' className='primary-button'><SlMenu />Shop by Categories</motion.button>
        <div className='sub-nav-heading__left-side__utility'>
          <a href='/deals' className='sub-nav-heading__left-side__utility-box'>
            <MdElectricBolt />
            <span>Deals Today</span>
          </a>
          <a href='/special-prices' className='sub-nav-heading__left-side__utility-box'>
            <IoPricetagsOutline />
            <span>Special Prices</span>
          </a>
          <a href='/product-fresh' className='sub-nav-heading__left-side__utility-box elit'>
            <span>Fresh</span>
            <IoIosArrowDown />
          </a>
          <a href='/product_frozen' className='sub-nav-heading__left-side__utility-box elit'>
            <span>Frozen</span>
            <IoIosArrowDown />
          </a>
          <a href='/farmart-demos' className='sub-nav-heading__left-side__utility-box elit'>
            <span>Demos</span>
            <IoIosArrowDown />
          </a>
          <a href='/farmart-shop' className='sub-nav-heading__left-side__utility-box elit'>
            <span>Shop</span>
            <IoIosArrowDown />
          </a>
          <a href='/famart-blog' className='sub-nav-heading__left-side__utility-box elit'>
            <span>Blog</span>
            <IoIosArrowDown />
          </a>
          <a href='/other-pages' className='sub-nav-heading__left-side__utility-box elit'>
            <span>Pages</span>
            <IoIosArrowDown />
          </a>
        </div>
      </div>
      <a href='/recent-user-products-views' className='recently-button'>
        <GoSync />
        <span>Recently Viewed</span>
      </a>
    </section>
  );
}