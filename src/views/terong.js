import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import './terong.css'

const Terong = (props) => {
  return (
    <div className="terong-container">
      <Helmet>
        <title>Terong - KelompokTaniSumberMakmur</title>
        <meta property="og:title" content="Terong - KelompokTaniSumberMakmur" />
      </Helmet>
      <header data-role="Header" className="terong-header">
        <Link to="/" className="terong-navlink">
          <div className="terong-container1">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="terong-image"
            />
            <span className="terong-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="terong-nav">
          <NavigationLinks rootClassName="rootClassName38"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="terong-burger-menu">
          <svg viewBox="0 0 1024 1024" className="terong-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="terong-mobile-menu">
          <div className="terong-nav1">
            <div className="terong-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="terong-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="terong-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="terong-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName39"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="terong-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="terong-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="terong-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="terong-container3">
        <div className="terong-container4">
          <div className="terong-blog-post-card">
            <div className="terong-container5">
              <img
                alt="image"
                src="https://img.freepik.com/premium-photo/whole-eggplants-slices-white-background-isolated_269543-2421.jpg?w=1380"
                className="terong-image2"
              />
              <h1 className="terong-text01">
                <span>Terong (</span>
                <span className="terong-text03">Solanum melongena</span>
                <span>)</span>
              </h1>
              <span className="terong-text05">
                <span className="terong-text06">Terung</span>
                <span>
                  {' '}
                  atau
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="terong-text08">terong</span>
                <span> (</span>
                <span className="terong-text10">Solanum melongena</span>
                <span>
                  ) adalah tumbuhan penghasil buah yang dijadikan sayur-sayuran.
                  Asalnya adalah India dan Sri Lanka. Terung berkerabat dekat
                  dengan kentang dan leunca, dan agak jauh dari tomat.
                </span>
                <br className="terong-text12"></br>
                <br className="terong-text13"></br>
                <span className="terong-text14">Terung</span>
                <span>
                  {' '}
                  ialah terna yang sering ditanam secara tahunan. Tanaman ini
                  tumbuh hingga 40–150 cm (16-57 inci) tingginya. Daunnya besar,
                  dengan lobus yang kasar. Ukurannya 10–20 cm (4-8 inci)
                  panjangnya dan 5–10 cm (2-4 inci) lebarnya. Jenis-jenis
                  setengah liar lebih besar dan tumbuh hingga setinggi 225 cm (7
                  kaki), dengan daun yang melebihi 30 cm (12 inci) dan 15 cm (6
                  inci) panjangnya. Batangnya biasanya berduri. Warna bunganya
                  antara putih hingga ungu, dengan mahkota yang memiliki lima
                  lobus. Benang sarinya berwarna kuning. Buah tepung berisi,
                  dengan diameter yang kurang dari 3 cm untuk yang liar, dan
                  lebih besar lagi untuk jenis yang ditanam.
                </span>
                <br className="terong-text16"></br>
                <br className="terong-text17"></br>
                <span>
                  Cara menanam tanaman terung adalah disemai, setelah tumbuh 4
                  daun sejati kemudian ditanam (dijadikan bibit terlebih
                  dahulu). Panen dimulai pada 70-80 hari setelah semai
                  selanjutnya setiap 5 hari.
                </span>
                <br className="terong-text19"></br>
                <br className="terong-text20"></br>
                <span>
                  Dari segi botani, buah yang dikelaskan sebagai beri memiliki
                  banyak biji yang kecil dan lembut. Biji itu dapat dimakan
                  tetapi rasanya pahit karena mengandung nikotin, sejenis
                  alkaloid yang banyak dikandung tembakau.
                </span>
              </span>
              <h1 className="terong-text22">Fakta Menarik Terong</h1>
              <h3 className="terong-text23">Asal-Usul Nama Eggplant</h3>
              <span className="terong-text24">
                Dalam bahasa Inggris terung disebut eggplant. Nama ini diduga
                muncul karena terung putih yang tersebar di Eropa sering dikira
                telur ayam karena bentuknya yang mirip. Namun, walaupun dalam
                bahasa Inggris disebut eggplant, tetapi terung di Inggris dan
                Prancis dikenal dengan nama aubergine.
              </span>
              <h3 className="terong-text25">Keluarga Beri</h3>
              <span className="terong-text26">
                Walaupun secara fisik berbeda dengan keluarga beri yang kita
                kenal, terung ternyata masuk ke dalam keluarga buah beri. Hal
                ini karena terung memiliki banyak biji kecil dan lembut yang
                merupakan ciri khas dari kelompok buah beri.
              </span>
              <h3 className="terong-text27">Mengandung Nikotin</h3>
              <span className="terong-text28">
                Banyak yang tidak tahu bahwa biji terung mengandung nikotin.
                Keberadaan nikotin ini yang menyebabkan ada rasa pahit yang
                muncul saat mengkonsumsi bijinya.
              </span>
            </div>
          </div>
          <div className="terong-blog-post-card1">
            <div className="terong-container6">
              <h1 className="terong-text29">Panen Lainya</h1>
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
                heading="Timun"
                image_src="https://img.freepik.com/premium-photo/cucumber-vegetable-isolated-white-background_42033-135.jpg?w=1380"
              ></FeatureCard>
              <FeatureCard></FeatureCard>
              <FeatureCard
                heading="Ubi Merah"
                image_src="https://img.freepik.com/free-photo/delicious-cooked-sweet-potato_1205-44.jpg?1&amp;w=1380&amp;t=st=1680362351~exp=1680362951~hmac=e2d34040a5a7219f0e769bc790ecfe038d07adfe91f96db8f90f637e733cf646"
              ></FeatureCard>
              <FeatureCard
                heading="Ubi Ungu"
                image_src="https://img.freepik.com/premium-photo/purple-sweet-potato-isolated-white-background_403166-1417.jpg?w=1380"
              ></FeatureCard>
            </div>
            <div className="terong-container7">
              <div className="terong-feature-card">
                <img
                  alt="image"
                  src="https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?t=st=1680361058~exp=1680361658~hmac=b70d11f71b859b749ae87930b37ef46acd21bfc1284117c3f86d0523dec3353f"
                  className="terong-image3"
                />
                <div className="terong-container8">
                  <h3 className="terong-text30">
                    Menyediakan kebutuhan sayur di setiap harimu
                  </h3>
                </div>
              </div>
              <button className="terong-button button">Order Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="terong-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="terong-image4"
        />
        <span className="terong-text31">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Terong
