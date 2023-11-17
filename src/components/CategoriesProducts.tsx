import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PaginationButton } from "./PaginationButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../css/App.css';


interface CategoriesProductsPropos {
  leadingInfo: { title: string, urlLink: string, link: string },
  pagInfos: { prevRef: any, prevFunction: VoidFunction, nextRef: any, nextFunction: VoidFunction }
  catgSwiperData: { ref: any, dataSlider: { categories: string, srcIllustration: string, logo: string }[]}
}

export const CategoriesProducts: React.FC<CategoriesProductsPropos> = (
  { leadingInfo, pagInfos, catgSwiperData }
) => {
  return (
    <section className='app-categories-products'>
      <div className='app-categories-products__heading'>
        <div className='app-categories-products__heading-left'>
          <h3>{leadingInfo.title}</h3>
          <a href={leadingInfo.urlLink}>{leadingInfo.link} <IoIosArrowForward /></a>
        </div>
        <PaginationButton prevRef={pagInfos.prevRef} prevFunction={pagInfos.prevFunction}
          nextRef={pagInfos.nextRef} nextFunction={pagInfos.nextFunction} />
      </div>
      <div className='app-categories-products__content'>
          <Swiper
            ref={catgSwiperData.ref}
            slidesPerView={3}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className='cateogies-products-swiper'>
            {
              catgSwiperData.dataSlider.map((categorie, index) => (
                <SwiperSlide className='app-products__content-card' key={index}>
                  <div className='app-products__content-card-logo'>
                    <img src={categorie.logo} alt={`Produit item ${index}`} />
                  </div>
                  <h4>{categorie.categories}</h4>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  );
};