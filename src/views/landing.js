import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard1 from '../components/feature-card1'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard2 from '../components/blog-post-card2'
import FeatureCard13 from '../components/feature-card13'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>KelompokTaniSumberMakmur</title>
        <meta property="og:title" content="KelompokTaniSumberMakmur" />
      </Helmet>
      <header data-role="Header" className="landing-header">
        <Link to="/" className="landing-navlink">
          <div className="landing-container01">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="landing-image"
            />
            <span className="landing-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="landing-nav">
          <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="landing-burger-menu">
          <svg viewBox="0 0 1024 1024" className="landing-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="landing-mobile-menu">
          <div className="landing-nav1">
            <div className="landing-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="landing-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="landing-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="landing-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="landing-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="landing-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="landing-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="landing-hero">
        <span className="landing-text01">kelompok tani sumber makmur</span>
        <h1 className="landing-text02">
          <span>Freshly handpicked from</span>
          <br></br>
          <span>Farmers To You</span>
        </h1>
      </div>
      <div className="landing-banner">
        <h1 className="landing-text06">Tentang Kami</h1>
        <iframe
          src="https://www.youtube.com/embed/R0wzuJOK384"
          allowFullScreen
          className="landing-iframe"
        ></iframe>
        <span className="landing-text07">
          Kami merupakan kelompok tani, yang bernamakan &apos;Kelompok Tani
          Sumber Makmur 2 Karingau&apos;. Terletak di Jala Sultan Hasanuddin
          RT.004 Karingau, Kec.Balikpapan Barat, Kota Balikpapan, Provinsi
          Kalimantan Timur.
        </span>
        <button className="landing-button button">Read More</button>
      </div>
      <div className="landing-features">
        <h1 className="landing-text08">
          <span>Mengapa Kami?</span>
          <br></br>
        </h1>
        <span className="landing-text11">
          <span>
            Kami menyediakan bahan sayur untuk memasak yang pastinya segar dan
            higenis untuk dimasak.
          </span>
          <br></br>
        </span>
        <div className="landing-container03">
          <FeatureCard1
            title="Pesan kapan saja"
            image_src="/playground_assets/box-seam%20%5B1%5D.svg"
            description="Anda dapat memesan atau datang langsung ke lokasi untuk membeli hasil panen kami"
            rootClassName="feature-card1-root-class-name"
          ></FeatureCard1>
          <FeatureCard1
            title="Ramah lingkungan"
            image_src="/playground_assets/heart-handshake.svg"
            description="Bahan dan metode pengembangbiakan yang kami gunakan terjamin aman dan ramah lingkungan"
            rootClassName="feature-card1-root-class-name3"
          ></FeatureCard1>
          <FeatureCard1
            title="Hasil panen yang segar"
            image_src="/playground_assets/leaf.svg"
            description="Hasil dari panen yang dipetik dijamin segar dan dipanen langsung oleh kami "
            rootClassName="feature-card1-root-class-name2"
          ></FeatureCard1>
          <FeatureCard1
            title="Harga terjangkau"
            image_src="/playground_assets/coins.svg"
            description="Kami memberikan harga yang terjangkau untuk anda dan memberikan banyak pilihan untuk pembayaran"
            rootClassName="feature-card1-root-class-name1"
          ></FeatureCard1>
        </div>
      </div>
      <div className="landing-products">
        <div className="landing-produk-kami">
          <h1 className="landing-text14">Produk Kami</h1>
        </div>
        <div className="landing-gallery">
          <div className="landing-container04">
            <div className="landing-container05">
              <div className="landing-container06">
                <Link to="/buncis" className="landing-navlink1">
                  <GalleryCard2
                    title="Buncis"
                    image_src="https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?w=1060&amp;t=st=1678690438~exp=1678691038~hmac=8f778d5e2506a87dfce738085eb8f2c3b7399f1a4078b6fcdbb10f9715a7b80f"
                    rootClassName="rootClassName2"
                    className="landing-component06"
                  ></GalleryCard2>
                </Link>
              </div>
              <div className="landing-container07">
                <GalleryCard2
                  title="Ubi Ungu"
                  image_src="https://img.freepik.com/free-photo/purple-sweet-potato_1205-764.jpg?1&amp;w=1060&amp;t=st=1678690869~exp=1678691469~hmac=807a8424e3edfb2ce6c6b1f9bcf2a9c212ddb29ac95a3ca8a9ab292b705457b5"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="landing-container08">
              <GalleryCard2
                title="Cabai"
                image_src="https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?w=1060&amp;t=st=1678690438~exp=1678691038~hmac=8f778d5e2506a87dfce738085eb8f2c3b7399f1a4078b6fcdbb10f9715a7b80f"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
            <div className="landing-container09">
              <GalleryCard2
                title="Cabai"
                image_src="https://img.freepik.com/free-photo/purple-sweet-potato_1205-764.jpg?1&amp;w=1060&amp;t=st=1678690869~exp=1678691469~hmac=807a8424e3edfb2ce6c6b1f9bcf2a9c212ddb29ac95a3ca8a9ab292b705457b5"
                rootClassName="rootClassName9"
              ></GalleryCard2>
            </div>
            <div className="landing-container10">
              <GalleryCard2
                title="Cabai"
                image_src="https://img.freepik.com/free-photo/chilli-pepper-dark-surface_1150-42083.jpg?w=1060&amp;t=st=1678690594~exp=1678691194~hmac=ea626b50d6eb1945db49452acd23b0fcef9c92c92c0c45b458af43e156eb6ddc"
                rootClassName="rootClassName8"
              ></GalleryCard2>
            </div>
          </div>
          <div className="landing-container11">
            <GalleryCard2
              title="Tomat"
              image_src="https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg?w=1060&amp;t=st=1678690921~exp=1678691521~hmac=1668cec8ab569a5beee0ca94825ab7426be7deeb52b0cec95e0ca514005cb75a"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
          <div className="landing-container12">
            <GalleryCard2
              title="Tomat"
              image_src="https://img.freepik.com/free-photo/purple-sweet-potato_1205-764.jpg?1&amp;w=1060&amp;t=st=1678690869~exp=1678691469~hmac=807a8424e3edfb2ce6c6b1f9bcf2a9c212ddb29ac95a3ca8a9ab292b705457b5"
              rootClassName="rootClassName7"
            ></GalleryCard2>
          </div>
          <div className="landing-container13">
            <GalleryCard2
              title="Tomat"
              image_src="https://img.freepik.com/free-photo/chilli-pepper-dark-surface_1150-42083.jpg?w=1060&amp;t=st=1678690594~exp=1678691194~hmac=ea626b50d6eb1945db49452acd23b0fcef9c92c92c0c45b458af43e156eb6ddc"
              rootClassName="rootClassName6"
            ></GalleryCard2>
          </div>
          <div className="landing-container14">
            <GalleryCard2
              title="Tomat"
              image_src="https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg?w=1060&amp;t=st=1678690921~exp=1678691521~hmac=1668cec8ab569a5beee0ca94825ab7426be7deeb52b0cec95e0ca514005cb75a"
              rootClassName="rootClassName1"
            ></GalleryCard2>
          </div>
        </div>
      </div>
      <div className="landing-teams">
        <div className="landing-team-kami">
          <h1 className="landing-text15">Team Kami</h1>
        </div>
        <div className="landing-blog">
          <div className="landing-container15">
            <BlogPostCard2
              label="Ketua"
              title="Mr. Dolor"
              image_src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&amp;t=st=1678692362~exp=1678692962~hmac=b60cc402bf96aed71089e20947310be4cc95ec3afc96bdbb9379fc1e050bc594"
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></BlogPostCard2>
          </div>
          <div className="landing-container16">
            <BlogPostCard2
              label="Sekretaris"
              title="Mrs. Ipsum"
              image_src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&amp;t=st=1678691222~exp=1678691822~hmac=c72218480e909d0bb7b8eede7127dcf3cb4250d68b0f7f9f3208b2c2c4ea91c7"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard2>
          </div>
          <div className="landing-container17">
            <BlogPostCard2
              label="Bendahara"
              title="Mr. Lorem"
              image_src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?w=740&amp;t=st=1678691203~exp=1678691803~hmac=b0615b1952c8d82760348bf997c2ea5a76edcfbffffa4d349564c621b80a66e0"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></BlogPostCard2>
          </div>
        </div>
      </div>
      <div className="landing-hubungi-kami">
        <div className="landing-container18">
          <img
            alt="image"
            src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=1380&amp;t=st=1678692844~exp=1678693444~hmac=afcbe7c8a65ac6ce1a9fdbd37437abd564e0f37b1188f8099384eee26e55fc0c"
            className="landing-image2"
          />
        </div>
        <div className="landing-container19">
          <h1 className="landing-text16">Hubungi Kami</h1>
          <span className="landing-text17">
            Hubungi kami jika anda memiliki pertanyaan dan membutuhkan bantuan
            dalam pemesanan
          </span>
          <a
            href="https://wa.me/6281375567466"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-link"
          >
            <div className="landing-container20 button">
              <svg viewBox="0 0 1024 1024" className="landing-icon10">
                <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
              </svg>
              <span className="landing-text18">+62 813 0000 00000</span>
            </div>
          </a>
        </div>
      </div>
      <div className="landing-features1">
        <h1 className="landing-text19">Social Media</h1>
        <div className="landing-container21">
          <div className="landing-feature-card">
            <a
              href="https://www.instagram.com/sumbermakmur.garden/"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-link1"
            >
              <img
                alt="image"
                src="/playground_assets/icons8-instagram-240.svg"
                className="landing-image3"
              />
            </a>
          </div>
          <div className="landing-feature-card1">
            <a
              href="https://www.facebook.com/profile.php?id=100090434927415"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-link2"
            >
              <img
                alt="image"
                src="/playground_assets/icons8-facebook-240.svg"
                className="landing-image4"
              />
            </a>
          </div>
          <div className="landing-feature-card2">
            <a
              href="https://shp.ee/ru94bez"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-link3"
            >
              <img
                alt="image"
                src="/playground_assets/icons8-shopee-144.svg"
                className="landing-image5"
              />
            </a>
          </div>
          <div className="landing-feature-card3">
            <a
              href="https://tokopedia.link/h6mz9nGn0yb"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-link4"
            >
              <img
                alt="image"
                src="/playground_assets/pngwing.com%20%5B2%5D-200h.png"
                className="landing-image6"
              />
            </a>
          </div>
        </div>
        <div className="landing-container22">
          <FeatureCard13
            image_src="/playground_assets/icons8-instagram-240.svg"
            rootClassName="feature-card13-root-class-name"
          ></FeatureCard13>
          <FeatureCard13
            image_src="/playground_assets/icons8-facebook-240.svg"
            rootClassName="feature-card13-root-class-name3"
          ></FeatureCard13>
          <FeatureCard13
            image_src="/playground_assets/icons8-shopee-144.svg"
            rootClassName="feature-card13-root-class-name2"
          ></FeatureCard13>
          <FeatureCard13 rootClassName="feature-card13-root-class-name1"></FeatureCard13>
        </div>
      </div>
      <footer className="landing-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="landing-image7"
        />
        <span className="landing-text20">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Landing
