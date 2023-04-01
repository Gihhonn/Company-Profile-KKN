import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import GalleryCard11 from '../components/gallery-card11'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>AboutUs - KelompokTaniSumberMakmur</title>
        <meta
          property="og:title"
          content="AboutUs - KelompokTaniSumberMakmur"
        />
      </Helmet>
      <header data-role="Header" className="about-us-header">
        <Link to="/" className="about-us-navlink">
          <div className="about-us-container01">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="about-us-image"
            />
            <span className="about-us-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="about-us-nav">
          <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="about-us-burger-menu">
          <svg viewBox="0 0 1024 1024" className="about-us-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="about-us-mobile-menu">
          <div className="about-us-nav1">
            <div className="about-us-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="about-us-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="about-us-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="about-us-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="about-us-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="about-us-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="about-us-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="about-us-hero">
        <span className="about-us-text01">kelompok tani sumber makmur</span>
        <h1 className="about-us-text02">
          <span className="about-us-text03">About Us</span>
          <br></br>
        </h1>
      </div>
      <div className="about-us-banner">
        <h1 className="about-us-text05">Tentang Kami</h1>
        <div className="about-us-gallery">
          <div className="about-us-container03">
            <div className="about-us-container04">
              <h1 className="about-us-text06">Project Title</h1>
              <span className="about-us-text07">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="about-us-container05">
            <div className="about-us-container06">
              <h1 className="about-us-text09">Project Title</h1>
              <span className="about-us-text10">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="about-us-container07">
            <div className="about-us-container08">
              <h1 className="about-us-text12">Project Title</h1>
              <span className="about-us-text13">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="about-us-container09">
            <div className="about-us-container10">
              <h1 className="about-us-text15">Project Title</h1>
              <span className="about-us-text16">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="about-us-container11">
            <div className="about-us-container12">
              <h1 className="about-us-text18">Project Title</h1>
              <span className="about-us-text19">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="about-us-container13">
            <div className="about-us-container14">
              <h1 className="about-us-text21">Project Title</h1>
              <span className="about-us-text22">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-container15">
        <h1 className="about-us-text24">Team Kami</h1>
        <div className="about-us-gallery1">
          <GalleryCard11
            title="Mr. LoremIpsum"
            subtitle="Ketua"
            image_src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&amp;t=st=1678692362~exp=1678692962~hmac=b60cc402bf96aed71089e20947310be4cc95ec3afc96bdbb9379fc1e050bc594"
            rootClassName="rootClassName"
          ></GalleryCard11>
          <GalleryCard11
            title="Mr. IpsumLorem"
            subtitle="Wakil Ketua"
            image_src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?w=740&amp;t=st=1678691203~exp=1678691803~hmac=b0615b1952c8d82760348bf997c2ea5a76edcfbffffa4d349564c621b80a66e0"
            rootClassName="rootClassName1"
          ></GalleryCard11>
          <GalleryCard11
            title="Mr. Sandhika"
            subtitle="Web Dev"
            image_src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&amp;t=st=1678692362~exp=1678692962~hmac=b60cc402bf96aed71089e20947310be4cc95ec3afc96bdbb9379fc1e050bc594"
            rootClassName="rootClassName2"
          ></GalleryCard11>
          <GalleryCard11
            title="Mrs. Lydia"
            subtitle="Sekretaris"
            image_src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&amp;t=st=1678691222~exp=1678691822~hmac=c72218480e909d0bb7b8eede7127dcf3cb4250d68b0f7f9f3208b2c2c4ea91c7"
            rootClassName="rootClassName3"
          ></GalleryCard11>
          <GalleryCard11
            title="Mrs. Rahma"
            subtitle="Bendahara"
            image_src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&amp;t=st=1678691222~exp=1678691822~hmac=c72218480e909d0bb7b8eede7127dcf3cb4250d68b0f7f9f3208b2c2c4ea91c7"
            rootClassName="rootClassName4"
          ></GalleryCard11>
        </div>
      </div>
      <footer className="about-us-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="about-us-image2"
        />
        <span className="about-us-text25">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default AboutUs
