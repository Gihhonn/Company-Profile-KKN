import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import './ubiungu.css'

const Ubiungu = (props) => {
  return (
    <div className="ubiungu-container">
      <Helmet>
        <title>Ubiungu - KelompokTaniSumberMakmur</title>
        <meta
          property="og:title"
          content="Ubiungu - KelompokTaniSumberMakmur"
        />
      </Helmet>
      <header data-role="Header" className="ubiungu-header">
        <Link to="/" className="ubiungu-navlink">
          <div className="ubiungu-container1">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="ubiungu-image"
            />
            <span className="ubiungu-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="ubiungu-nav">
          <NavigationLinks rootClassName="rootClassName46"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="ubiungu-burger-menu">
          <svg viewBox="0 0 1024 1024" className="ubiungu-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="ubiungu-mobile-menu">
          <div className="ubiungu-nav1">
            <div className="ubiungu-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="ubiungu-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="ubiungu-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="ubiungu-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName47"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="ubiungu-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="ubiungu-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="ubiungu-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="ubiungu-container3">
        <div className="ubiungu-container4">
          <div className="ubiungu-blog-post-card">
            <div className="ubiungu-container5">
              <img
                alt="image"
                src="https://img.freepik.com/premium-photo/purple-sweet-potato-isolated-white-background_403166-1417.jpg?w=1380"
                className="ubiungu-image2"
              />
              <h1 className="ubiungu-text01">
                <span>Ubi Jalar Ungu (</span>
                <span className="ubiungu-text03">
                  Ipomoea Batatas var Ayamurasaki
                </span>
                <span>)</span>
              </h1>
              <span className="ubiungu-text05">
                <span className="ubiungu-text06">Ubi jalar ungu</span>
                <span> (</span>
                <span className="ubiungu-text08">
                  Ipomoea batatas var Ayumurasaki
                </span>
                <span>
                  ) biasa disebut
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="ubiungu-text10">Ipomoea batatas</span>
                <span>
                  {' '}
                  karena memiliki kulit dan daging umbi yang berwarna ungu
                  kehitaman (ungu pekat). Ubi jalar ungu mengandung pigmen
                  antosianin yang lebih tinggi daripada ubi jalar jenis lain.
                  Menurut Sri Kumala Ningsih (2006), menyatakan bahwa ubi jalar
                  ungu mulai dikenal menyebar ke seluruh dunia terutama
                  negaranegara yang beriklim tropis. Pada abad ke-16
                  diperkirakan ubi jalar ungu pertama kali di Spanyol melalui
                  Tahiti, Kepulauan Guam, Fiji dan Selandia Baru.
                </span>
                <br></br>
                <br></br>
                <span>
                  Keunggulan ubi ungu adalah adalah zat antioksidan yang
                  membantu tubuh menangkal radikal bebas, selain itu, prebiotik
                  bisa mengusir zat-zat racun penyebab kanker (antikarsinogenik)
                  dan melawan mikroba pengganggu (anti mikrobial). Kabar baik
                  lainnya, prebiotik membantu menyerap mineral serta mengatur
                  keseimbangan kadarnya di dalam tubuh, dengan begitu, akan
                  terhindar dari osteoporosis. Kandungan lain yang bermanfaat
                  pada ubi jalar ungu adalah fenol, yaitu senyawa kimia yang
                  memiliki efek anti-penuaan dan kompenen antioksidan. Ubi jalar
                  ungu merupakan sumber karbohidrat dan sumber kalori yang cukup
                  tinggi.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <h1 className="ubiungu-text15">Fakta Menarik Ubi Jalar Ungu</h1>
              <h3 className="ubiungu-text16">Menjaga kesehatan mata</h3>
              <span className="ubiungu-text17">
                Dikutip dari Lemonilo, Ubi Ungu memiliki kandungan pro vitamin A
                yang terdiri atas beta karoten dan karotenoid lain. Kedua
                kandungan pro vitamin A ini nantinya akan diubah tubuh menjadi
                vitamin A. Vitamin A dari ubi ungu inilah yang nantinya akan
                berguna untuk menjaga kesehatan mata.
              </span>
              <h3 className="ubiungu-text18">
                Mengurangi peradangan, risiko penyakit jantung, dan tekanan
                darah tinggi
              </h3>
              <span className="ubiungu-text19">
                <span>
                  Dilansir dari Eating well, pigmen antosianin dari antioksidan
                  tinggi yang dikandung dalam ubi ungu mampu mengurangi
                  peradangan. Ubi ungu juga dapat membantu mengurangi risiko
                  penyakit jantung serta kanker.
                </span>
                <br className="ubiungu-text21"></br>
                <br></br>
                <span>
                  Sejalan dengan itu, Adelia Bovel Benjamin yang dikutip dari
                  Lemonilo berkata bahwa perpaduan kombinasi karoten dengan
                  antosianin sangat berperan dalam menurunkan tekanan darah.
                </span>
              </span>
              <h3 className="ubiungu-text24">
                Kandungan Ubi Ungu yang kaya gizi
              </h3>
              <span className="ubiungu-text25">
                Ubi jalar ungu juga merupakan sumber vitamin dan mineral,
                vitamin yang terkandung dalam ubi jalar antara lain Vitamin A,
                Vitamin C, thiamin (vitamin B1) dan ribovlavin, sedangkan
                mineral dalam ubi jalar di antaranya adalah zat besi (Fe),
                fosfor (P) dan kalsium (Ca). Kandungan lainnya adalah protein,
                lemak, serat kasar dan abu
              </span>
            </div>
          </div>
          <div className="ubiungu-blog-post-card1">
            <div className="ubiungu-container6">
              <h1 className="ubiungu-text26">Panen Lainya</h1>
              <FeatureCard
                heading="Buncis"
                image_src="https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?w=1060&amp;t=st=1678690438~exp=1678691038~hmac=8f778d5e2506a87dfce738085eb8f2c3b7399f1a4078b6fcdbb10f9715a7b80f"
              ></FeatureCard>
              <FeatureCard
                heading="Cabai"
                image_src="https://img.freepik.com/free-vector/one-red-chili-pepper-is-other_1284-47414.jpg?w=826&amp;t=st=1680362080~exp=1680362680~hmac=05c374579db7bea8820d6947a43e46e6554043eece2924c1e58742c7027c4be7"
              ></FeatureCard>
              <FeatureCard
                heading="Pare"
                image_src="https://img.freepik.com/free-photo/bitter-melon_74190-4097.jpg?w=1380&amp;t=st=1680362177~exp=1680362777~hmac=5947ff184207d76c782b6441af171bf50ddabf2beeb35c1a2111fce82784519f"
              ></FeatureCard>
              <FeatureCard
                heading="Terong"
                image_src="https://img.freepik.com/premium-photo/whole-eggplants-slices-white-background-isolated_269543-2421.jpg?w=1380"
              ></FeatureCard>
              <FeatureCard
                heading="Timun"
                image_src="https://img.freepik.com/premium-photo/cucumber-vegetable-isolated-white-background_42033-135.jpg?w=1380"
              ></FeatureCard>
              <FeatureCard></FeatureCard>
              <FeatureCard
                heading="Ubi Merah"
                image_src="https://img.freepik.com/free-photo/delicious-cooked-sweet-potato_1205-44.jpg?1&amp;w=1380&amp;t=st=1680362351~exp=1680362951~hmac=e2d34040a5a7219f0e769bc790ecfe038d07adfe91f96db8f90f637e733cf646"
              ></FeatureCard>
            </div>
            <div className="ubiungu-container7">
              <div className="ubiungu-feature-card">
                <img
                  alt="image"
                  src="https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?t=st=1680361058~exp=1680361658~hmac=b70d11f71b859b749ae87930b37ef46acd21bfc1284117c3f86d0523dec3353f"
                  className="ubiungu-image3"
                />
                <div className="ubiungu-container8">
                  <h3 className="ubiungu-text27">
                    Menyediakan kebutuhan sayur di setiap harimu
                  </h3>
                </div>
              </div>
              <button className="ubiungu-button button">Order Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="ubiungu-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="ubiungu-image4"
        />
        <span className="ubiungu-text28">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Ubiungu
