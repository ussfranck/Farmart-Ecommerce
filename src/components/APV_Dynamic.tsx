import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { PaginationButton } from './PaginationButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Chrono } from './Chrono';
import { BsHeart } from 'react-icons/bs';

const mob: number[] = [1, 2, 3, 4, 5];

interface APV_DynamicProps {
  type: string;
  baseConfig: {
    className: string;
    swiperRef: any | null;
    swiperData: any[] | string[] | null[];
    swiperSpaceBetween: number | 20;
    title: string;
    urlTag: string | null;
  };
  pagInfos: {
    prevRef: any;
    prevFunction: VoidFunction;
    nextRef: any;
    nextFunction: VoidFunction;
  };
  attachComponent: boolean;
  xyId: string | undefined;
}

export const AppProductDynamicVisual: React.FC<APV_DynamicProps> = ({
  baseConfig,
  pagInfos,
  attachComponent,
  type,
  xyId,
}) => {
  return (
    <section className={baseConfig.className}>
      {type === 'base' ? (
        <div className={`${baseConfig.className}__heading`}>
          <div className={`${baseConfig.className}__heading-left`}>
            <h3>{baseConfig.title}</h3>
            <a href={'https://google.com'}>
              {baseConfig.urlTag} <IoIosArrowForward />
            </a>
            {attachComponent && <Chrono />}
          </div>
          <PaginationButton
            prevRef={pagInfos.prevRef}
            prevFunction={pagInfos.prevFunction}
            nextRef={pagInfos.nextRef}
            nextFunction={pagInfos.nextFunction}
          />
        </div>
      ) : (
        <div className={`${baseConfig.className}__heading`}>
          <div className={`${baseConfig.className}__heading-left`}>
            <h3>{baseConfig.title}</h3>
            <div className='sand-landing-sec__heading-tabs'>
              <a href='#'>All</a>
              <a href='#'>Fruits & Vegetables</a>
              <a href='#'>Frozen Seafoods</a>
              <a href='#'>Raw Meats</a>
              <a href='#'>Coffes & Teas</a>
              <a href='#'>Coffes & Foods</a>
            </div>
          </div>
          <PaginationButton
            prevRef={pagInfos.prevRef}
            prevFunction={pagInfos.prevFunction}
            nextRef={pagInfos.nextRef}
            nextFunction={pagInfos.nextFunction}
          />
        </div>
      )}
      {type === 'base' ? (
        <div className={`${baseConfig.className}__content`} id={xyId}>
          <Swiper
            ref={baseConfig.swiperRef}
            slidesPerView={3}
            spaceBetween={baseConfig.swiperSpaceBetween}
            pagination={false}
            modules={[Pagination]}
            className={`${baseConfig.className}-swiper`}>
            {baseConfig.swiperData.map((data: any, index: number) => (
              <SwiperSlide
                className={`${baseConfig.className}__content-card`}
                key={index}>
                <div className={`${baseConfig.className}__content-card-logo`}>
                  <img src={data.preview} alt='Product Images' />
                  <div className='set-favorite-button'>
                    <BsHeart />
                  </div>
                  {data.saver && (
                    <div className='banner-saver'>Save {data.saverNote}%</div>
                  )}
                </div>
                <div className={`${baseConfig.className}__content__review`}>
                  <h4>{data?.itemName}</h4>
                  <p>{data?.note}</p>
                  {attachComponent && (
                    <div
                      className={`${baseConfig.className}__content__review-specify`}>
                      <div
                        className={`${baseConfig.className}__content__review-specify__origin`}>
                        <div className='stars'>
                          {mob.map((_, index) => (
                            <AiFillStar key={index} />
                          ))}
                          <h5>({data?.rateValue})</h5>
                        </div>
                        <span>{data.hNote}</span>
                        <React.Fragment>
                          {data?.saver ? (
                            <div className='saver-review'>
                              <p className='price'>
                                ${data.price} <span>${data.oldPrice}</span>
                              </p>
                            </div>
                          ) : (
                            <p className='price'>${data.price}</p>
                          )}
                        </React.Fragment>
                        <div className='item-courbe-viewer'>
                          <progress value={data.forkView} max={100}></progress>
                          <span>Sold: {data.sold}</span>
                        </div>
                        <div>
                          <div className='counter-actions'>
                            <div className='button'>-</div>
                            <p className='counter-actions-view'>0</p>
                            <div className='button'>+</div>
                          </div>
                          <h4>
                            Total: <span>$00.0</span>
                          </h4>
                        </div>
                        <button type='button'>Add to cart</button>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={`${baseConfig.className}__content`}>
          <Swiper
            ref={baseConfig.swiperRef}
            slidesPerView={3}
            spaceBetween={baseConfig.swiperSpaceBetween}
            pagination={false}
            modules={[Pagination]}
            className={`${baseConfig.className}-swiper`}>
            {baseConfig.swiperData.map((data, index) => (
              <SwiperSlide
                className={`${baseConfig.className}__content-card`}
                key={index}>
                <div className={`${baseConfig.className}__content-card-logo`}>
                  {/* <div className='set-favorite-button'><BsHeart /></div> */}
                  {data.saver && (
                    <div className='banner-saver'>Save {data.saverNote}%</div>
                  )}
                </div>
                <div className={`${baseConfig.className}__content__review`}>
                  <h4>{data?.itemName}</h4>
                  <p>{data?.note}</p>
                  {attachComponent && (
                    <div
                      className={`${baseConfig.className}__content__review-specify`}>
                      <div
                        className={`${baseConfig.className}__content__review-specify__origin`}>
                        <div className='stars'>
                          {mob.map((_, index) => (
                            <AiFillStar key={index} />
                          ))}
                          <h5>({data?.rateValue})</h5>
                        </div>
                        <span>{data.hNote}</span>
                        <React.Fragment>
                          {data?.saver ? (
                            <div className='saver-review'>
                              <p className='price'>
                                ${data.price} <span>${data.oldPrice}</span>
                              </p>
                            </div>
                          ) : (
                            <p className='price'>${data.price}</p>
                          )}
                        </React.Fragment>
                        {/* <div className='item-courbe-viewer'>
                                <progress value={data.forkView} max={100}></progress>
                                <span>Sold: {data.sold}</span>
                              </div> */}
                        <div>
                          <div className='counter-actions'>
                            <div className='button'>-</div>
                            <p className='counter-actions-view'>0</p>
                            <div className='button'>+</div>
                          </div>
                          <h4>
                            Total: <span>$00.0</span>
                          </h4>
                        </div>
                        <button type='button'>Add to cart</button>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};
