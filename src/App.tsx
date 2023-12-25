import React, { useRef } from "react";
import { HeaderFaltNavbar } from "./components/HeaderFaltNavbar";
import { SubNavHeading } from "./components/SubNavHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { RiRotateLockLine } from "react-icons/ri";
import { CgLock } from "react-icons/cg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus, IoLogoYoutube } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { SlArrowUp } from "react-icons/sl";
import { MdPhone } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";

import { PaginationButton } from "./components/PaginationButton";
import { CategoriesProducts } from "./components/CategoriesProducts";
import {
  CategoriesDatabase,
  FeaturedBrandsData,
  TopTodaySaverData,
  BestSellersDatas,
  JustLandingData,
  EssentialProductsData,
} from "./db/F_db";
import { AppProductDynamicVisual } from "./components/APV_Dynamic";
import { MdOutlineEmail } from "react-icons/md";

import "./css/App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MagesticProducts } from "./components/MagesticProducts";
import { IoIosArrowForward } from "react-icons/io";
import { EnsureBox } from "./components/EnsureBox";

const App = () => {
  const landingSwiperRef = useRef<any>();
  const productsCatgSwiperRef = useRef<any>();
  const featureBrandSwiperRef = useRef<any>();
  const topSaverSwiperRef = useRef<any>();
  const bestSellerSwiperRef = useRef<any>();
  const justLandingSwiperRef = useRef<any>();
  const essentialProductSwiperRef = useRef<any>();

  const lspPrevButton = useRef();
  const lspNextButton = useRef();

  const catgProductNextButton = useRef();
  const catgProductPrevButton = useRef();

  const FBNextButton = useRef();
  const FBPrevButton = useRef();

  const goNextSlide = () => landingSwiperRef.current!.swiper.slideNext();
  const goPrevSlide = () => landingSwiperRef.current!.swiper.slidePrev();
  // ------------------------------------------
  // ------------------------------------------
  const goNextCategoriesProductSlide = () =>
    productsCatgSwiperRef.current!.swiper.slideNext();
  const goPrevCategoriesProductSlide = () =>
    productsCatgSwiperRef.current!.swiper.slidePrev();
  // ------------------------------------------
  // ------------------------------------------
  const goNextFBSlide = () => featureBrandSwiperRef.current!.swiper.slideNext();
  const goPrevFBSlide = () => featureBrandSwiperRef.current!.swiper.slidePrev();
  // ------------------------------------------
  // ------------------------------------------
  const goNextTSSlide = () => topSaverSwiperRef.current!.swiper.slideNext();
  const goPrevTSSlide = () => topSaverSwiperRef.current!.swiper.slidePrev();
  // ------------------------------------------
  // ------------------------------------------
  const goNextBSSlide = () => bestSellerSwiperRef.current!.swiper.slideNext();
  const goPrevBSSlide = () => bestSellerSwiperRef.current!.swiper.slidePrev();
  // ------------------------------------------
  // ------------------------------------------
  const goNextJLSlide = () => justLandingSwiperRef.current!.swiper.slideNext();
  const goPrevJLSlide = () => justLandingSwiperRef.current!.swiper.slidePrev();
  // ------------------------------------------
  // ------------------------------------------
  const goNextEPSlide = () =>
    essentialProductSwiperRef.current!.swiper.slideNext();
  const goPrevEPSlide = () =>
    essentialProductSwiperRef.current!.swiper.slidePrev();

  const sjProps: any = {
    "--swiper-pagination-color": "#fff",
  };

  return (
    <React.Fragment>
      <header>
        <HeaderFaltNavbar />
        <div className="line"></div>
        <SubNavHeading />
      </header>

      <section className="landing-release-home">
        <div className={"app-landing-shop__review"}>
          <Swiper
            ref={landingSwiperRef}
            autoplay={true}
            style={sjProps}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Parallax, Pagination, Navigation]}
            className="m-swiper"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              // style={{
              //   'backgroundImage':
              //     'url(https://images.unsplash.com/photo-1550630997-aea8d3d982ed?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              // }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Active Summer With <br /> Juice Milk 300ml.
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  New arrivals with nature fruits, juice milks, essential for
                  summer.
                </p>
              </div>
              <a href={"/get-shop-product"} className={"a-btn"}>
                Shop Now <LiaLongArrowAltRightSolid />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className="subtitle" data-swiper-parallax="-200">
                New Arrivals, is commit.✨
              </div>
              <div className="title" data-swiper-parallax="-300">
                Collection 1
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec.
                </p>
              </div>
              <a href={"/get-shop-product-2"} className={"a-btn"}>
                Shop Now <LiaLongArrowAltRightSolid />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 3
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec.
                </p>
              </div>
              <a href={"/get-shop-product-3"} className={"a-btn"}>
                Shop Now <LiaLongArrowAltRightSolid />
              </a>
            </SwiperSlide>
          </Swiper>
          <div className={"pg-segment"}>
            <PaginationButton
              prevRef={lspPrevButton}
              prevFunction={goPrevSlide}
              nextRef={lspNextButton}
              nextFunction={goNextSlide}
            />
          </div>
        </div>
        <div className={"app-landing-shop__special-buys"}>
          <div className={"app-landing-shop__special-buys-review"}>
            <h3>20% Sale Off</h3>
            <p>
              Synthetic Seeds
              <br />
              Net 2.0 OZ
            </p>
          </div>
          <a href={"/get-product-by-sr"} className={"a-btn"}>
            Shop Now{" "}
          </a>
        </div>
      </section>

      <CategoriesProducts
        leadingInfo={{
          title: "Browse Category",
          link: "All categories",
          urlLink: "/all-categories",
        }}
        pagInfos={{
          prevRef: catgProductPrevButton,
          prevFunction: goPrevCategoriesProductSlide,
          nextRef: catgProductNextButton,
          nextFunction: goNextCategoriesProductSlide,
        }}
        catgSwiperData={{
          ref: productsCatgSwiperRef,
          dataSlider: CategoriesDatabase,
        }}
      />

      <AppProductDynamicVisual
        type="base"
        baseConfig={{
          className: "app-featured-brand",
          swiperRef: featureBrandSwiperRef,
          swiperData: FeaturedBrandsData,
          swiperSpaceBetween: 20,
          title: "Featured Brands",
          urlTag: "All Offers",
          urlLink: "/all-farmart-offers",
        }}
        pagInfos={{
          prevRef: FBPrevButton,
          prevFunction: goPrevFBSlide,
          nextRef: FBNextButton,
          nextFunction: goNextFBSlide,
        }}
        attachComponent={false}
        xyId={"no-emit-apv"}
      />

      <section className="app-today-saver">
        <div className="app-today-saver__left">
          <AppProductDynamicVisual
            type="base"
            baseConfig={{
              className: "app-today-saver-s",
              swiperRef: topSaverSwiperRef,
              swiperData: TopTodaySaverData,
              swiperSpaceBetween: 20,
              title: "Top Saver Today",
              urlTag: "All Offers",
              urlLink: "/farmart-top-saver",
            }}
            pagInfos={{
              prevRef: catgProductPrevButton,
              prevFunction: goPrevTSSlide,
              nextRef: catgProductNextButton,
              nextFunction: goNextTSSlide,
            }}
            attachComponent={true}
            xyId={undefined}
          />
        </div>
        <div className="app-today-saver__right">
          <h2>15% Off</h2>
          <p>For new member sign up at the first time.</p>
          <form method="POST">
            <div>
              <MdOutlineEmail />
              <input
                type="email"
                placeholder="Email"
                id="ats-email-box"
                required
              />
            </div>
            <div>
              <CgLock />
              <input
                type="password"
                placeholder="Password"
                id="ats-pwd-box"
                required
              />
            </div>
            <div>
              <RiRotateLockLine />
              <input
                type="password"
                placeholder="Re-type Password"
                id="ats-c-pwd-box"
                required
              />
            </div>
            <button type="submit">Register Now</button>
          </form>
        </div>
      </section>

      <section id="sand-landing">
        <AppProductDynamicVisual
          type="custom"
          baseConfig={{
            className: "sand-landing-sec",
            swiperRef: bestSellerSwiperRef,
            swiperData: BestSellersDatas,
            swiperSpaceBetween: 3,
            title: "Best Seller",
            urlTag: null,
            urlLink: "/farmart-best-seller",
          }}
          pagInfos={{
            prevRef: catgProductPrevButton,
            prevFunction: goPrevBSSlide,
            nextRef: catgProductNextButton,
            nextFunction: goNextBSSlide,
          }}
          attachComponent={true}
          xyId={undefined}
        />

        <AppProductDynamicVisual
          type="custom"
          baseConfig={{
            className: "sand-landing-sec",
            swiperRef: justLandingSwiperRef,
            swiperData: JustLandingData,
            swiperSpaceBetween: 3,
            title: "Just Landing",
            urlTag: null,
            urlLink: "/farmart-epic-products",
          }}
          pagInfos={{
            prevRef: catgProductPrevButton,
            prevFunction: goPrevJLSlide,
            nextRef: catgProductNextButton,
            nextFunction: goNextJLSlide,
          }}
          attachComponent={true}
          xyId={undefined}
        />

        <MagesticProducts />

        <AppProductDynamicVisual
          type="custom"
          baseConfig={{
            className: "sand-landing-sec",
            swiperRef: essentialProductSwiperRef,
            swiperData: EssentialProductsData,
            swiperSpaceBetween: 3,
            title: "Essential Products",
            urlTag: null,
            urlLink: "/farmart-essentials-products",
          }}
          pagInfos={{
            prevRef: catgProductPrevButton,
            prevFunction: goPrevEPSlide,
            nextRef: catgProductNextButton,
            nextFunction: goNextEPSlide,
          }}
          attachComponent={true}
          xyId={undefined}
        />

        <section className="app-health-days">
          <div className="app-health-days__left-side">
            <div className="app-health-days__left-side__heading">
              <h3>Health Daily</h3>
              <a href={"https://google.com"}>
                All Articles <IoIosArrowForward />
              </a>
            </div>
            <div className="app-health-days__left-side__content">
              <div className="app-health-days__left-side__content-card">
                <div className="app-health-days__left-side__content-card__view">
                  <img src="/images/art.jpg" alt="Fruits Organics Photo" />
                </div>
                <div className="app-health-days__left-side__content-card__review">
                  <div>
                    <h4>Experiences</h4>
                    <span>March 25, 2020</span>
                  </div>
                  <h2>Tips to make your cake tasty</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, nisi. Soluta, perferendis.
                  </p>
                </div>
              </div>
              <hr />
              <div className="app-health-days__left-side__content-card">
                <div className="app-health-days__left-side__content-card__view">
                  <img
                    src="/images/art_view-2.jpg"
                    alt="Fruits Organics Photo"
                  />
                </div>
                <div className="app-health-days__left-side__content-card__review">
                  <div>
                    <h4>Experiences</h4>
                    <span>March 21, 2020</span>
                  </div>
                  <h2>How to preservation fruits & organics</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, nisi. Soluta, perferendis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="app-health-days__right-side">
            <h2>
              Shop faster <br /> with Farmart App
            </h2>
            <p>Available on both iOS & Android</p>
            <div className="app-health-download-src">
              <div>
                {/* IDK Reel links of Farmart App on Apple Store */}
                <a href="https://apple-store.com/farmart" target="_blank">
                  <img src="/images/app-store-button.jpg" alt="iOS Store" />
                </a>
              </div>
              <div>
                {/* Idem, IDK Reel links of Farmart App on Google Play Store */}
                <a href="https://google-play/farmart/" target="_blank">
                  <img
                    src="/images/google-play-button.png"
                    alt="Google Play Store"
                  />
                </a>
              </div>
            </div>
            <div className="app-health-preview">
              <div
                className="app-health-preview-view"
                title="Click To See Preview"
              >
                <img src="/images/ios-app.png" alt="iOS App Preview" />
              </div>
              <div
                className="app-health-preview-view"
                title="Click To See Preview"
              >
                <img src="/images/android-app.png" alt="Android App Preview" />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="app-ensure-process">
        <EnsureBox
          title="Free Shipping"
          review="For all orders over $200"
          logo="/icons/shuttle.png"
        />
        <EnsureBox
          title="1 & 1 Returns"
          review="Cancellation after 1 day"
          logo="/icons/sync.png"
        />
        <EnsureBox
          title="100% Secure Payment"
          review="Gurantee secure payments"
          logo="/icons/security.png"
        />
        <EnsureBox
          title="24/7 Delicated Support"
          review="Anywhere & anytime"
          logo="/icons/24-support.png"
        />
        <EnsureBox
          title="Daily Offers"
          review="Discount up to 70% OFF"
          logo="/icons/price-tag.png"
        />
      </section>
      <hr className="aep-suite-hr" />
      <footer>
        <div className="footer-content">
          <div className="footer-content__left-side">
            <div>
              <strong>Farmart - Your Online Foods & Grocery</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis.
              </p>
            </div>
            <div>
              <span>
                <MdPhone />
                Hotline 24/7:
              </span>
              <h3>(+965) 7492-4277</h3>
            </div>
            <ul>
              <li>
                <BiHomeAlt2 />
                959 Homestead Street Eastlake, NYC
              </li>
              <li>
                <a href="mailto:support@farmart.com">
                  <MdOutlineEmail />
                  support@farmart.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-content__main-side">
            <div className="footer-content__main-side-box">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="about-us">About Us</a>
                </li>
                <li>
                  <a href="contact-us">Contact</a>
                </li>
                <li>
                  <a href="support">Help Center</a>
                </li>
                <li>
                  <a href="farmart-career">Career</a>
                </li>
                <li>
                  <a href="policy">Policy</a>
                </li>
                <li>
                  <a href="farmart-sale">Flash Sale</a>
                </li>
                <li>
                  <a href="survey-official">Official</a>
                </li>
                <li>
                  <a href="on-sitemap">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="footer-content__main-side-box">
              <h3>Helps Center</h3>
              <ul>
                <li>
                  <a href="payments">Payments</a>
                </li>
                <li>
                  <a href="get-shipping">Shipping</a>
                </li>
                <li>
                  <a href="products-r">Product Returns</a>
                </li>
                <li>
                  <a href="faq">FAQ</a>
                </li>
                <li>
                  <a href="farmart-checkout">Checkout</a>
                </li>
                <li>
                  <a href="farmart-issues">Other Issues</a>
                </li>
              </ul>
            </div>
            <div className="footer-content__main-side-box">
              <h3>Farmart Busines</h3>
              <ul>
                <li>
                  <a href="farmart-sell">Sell On Farmart</a>
                </li>
                <li>
                  <a href="aff-program">Affiliate Program</a>
                </li>
                <li>
                  <a href="our-suppliers">Our Suppliers</a>
                </li>
                <li>
                  <a href="accessibility">Accessibility</a>
                </li>
                <li>
                  <a href="awu">Adverstise With Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content__right-side">
            <h3>Our Newsletter</h3>
            <p>
              Register now to get updates on promotions and coupns. Don&apos;t
              worry! We not spam.
            </p>
            <form method="POST">
              <div>
                <IoMailOutline />
                <input
                  type="email"
                  name="user-email-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer-banner">
          <p>
            &copy; 2023 <strong>Farmart</strong> All right reserved
          </p>
          <div className="footer-banner__way-paid">
            <div className="footer-banner__way-paid-view">
              <img
                src="/icons/wu-logo.jpeg"
                alt="Wester Union Logo"
                title="Buy Using Westion Union"
              />
            </div>
            <div className="footer-banner__way-paid-view">
              <img
                src="/icons/cirrus-logo.png"
                alt="Cirrus Logo"
                title="Buy Using Cirrus"
              />
            </div>
            <div className="footer-banner__way-paid-view">
              <img
                src="/icons/master.jpg"
                alt="MasterCard Logo"
                title="Buy Using Master Card"
              />
            </div>
            <div className="footer-banner__way-paid-view">
              <img
                src="/icons/skrill-logo.png"
                alt="Skrill Logo"
                title="Buy Using Skrill"
              />
            </div>
            <div className="footer-banner__way-paid-view">
              <img
                src="/icons/visa-logo.png"
                alt="Visa Union Logo"
                title="Buy Using VISA"
              />
            </div>
            <div className="footer-banner__way-paid-view">
              <img
                src="/icons/paypal-logo.png"
                alt="Paypal Logo"
                title="Buy Using Paypal"
              />
            </div>
          </div>
          <div className="footer-banner__annex-links">
            <p>Stay connected:</p>
            <div className="footter-banner__annex-socials-links">
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://google.com/" target="_blank">
                <IoLogoGoogleplus />
              </a>
              <a href="https://youtube.com/" target="_blank">
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
        <a href="#top" id="back-to-top-button">
          <SlArrowUp />
        </a>
      </footer>
    </React.Fragment>
  );
};

export default App;
