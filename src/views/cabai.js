import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import './cabai.css'

const Cabai = (props) => {
  return (
    <div className="cabai-container">
      <Helmet>
        <title>Cabai - KelompokTaniSumberMakmur</title>
        <meta property="og:title" content="Cabai - KelompokTaniSumberMakmur" />
      </Helmet>
      <header data-role="Header" className="cabai-header">
        <Link to="/" className="cabai-navlink">
          <div className="cabai-container1">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="cabai-image"
            />
            <span className="cabai-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="cabai-nav">
          <NavigationLinks rootClassName="rootClassName34"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="cabai-burger-menu">
          <svg viewBox="0 0 1024 1024" className="cabai-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="cabai-mobile-menu">
          <div className="cabai-nav1">
            <div className="cabai-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="cabai-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="cabai-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="cabai-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName35"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="cabai-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="cabai-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="cabai-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="cabai-container3">
        <div className="cabai-container4">
          <div className="cabai-blog-post-card">
            <div className="cabai-container5">
              <img
                alt="image"
                src="https://img.freepik.com/free-photo/chilli-pepper-dark-surface_1150-42083.jpg?w=1060&amp;t=st=1678690594~exp=1678691194~hmac=ea626b50d6eb1945db49452acd23b0fcef9c92c92c0c45b458af43e156eb6ddc"
                className="cabai-image2"
              />
              <h1 className="cabai-text01">
                <span>Cabai (</span>
                <span className="cabai-text03">Capsicum sp</span>
                <span>)</span>
              </h1>
              <span className="cabai-text05">
                <span className="cabai-text06">
                  Cabai
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  adalah buah dan tumbuhan anggota genus
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="cabai-text08">Capsicum</span>
                <span>
                  . Buahnya dapat digolongkan sebagai sayuran maupun bumbu,
                  tergantung bagaimana pemanfaatannya. Sebagai bumbu, buah cabai
                  yang pedas sangat populer di Asia Tenggara sebagai penguat
                  rasa untuk makanan. Bagi seni masakan Padang, cabai bahkan
                  dianggap sebagai &quot;bahan makanan pokok&quot; kesepuluh
                  (alih-alih kesembilan). Sangat sulit bagi masakan Padang
                  dibuat tanpa cabai.
                </span>
              </span>
              <h1 className="cabai-text10">Fakta Menarik Cabai</h1>
              <h3 className="cabai-text11">Daerah asal</h3>
              <span className="cabai-text12">
                Cabai adalah makanan yang mulanya berasal dari Benua Amerika dan
                masuk ke Indonesia pada abad ke-16 dengan beragam jenis tumbuhan
                lain. Nama cabai sendiri diambil dari sebutanya di Benua Amerika
                yaitu capsicum. Sedangkan di Inggris cabai disebut dengan nama
                chili.
              </span>
              <h3 className="cabai-text13">Termasuk Tanaman Obat</h3>
              <span className="cabai-text14">
                <span>
                  Ada banyak jenis cabai yang ditanam bukan untuk makanan saja
                  tapi juga untuk obat, terlebih pada jenis cabai yang batangnya
                  masih hijau.Dalam dunia medis pun kandungan pada cabai yaitu
                  Capsaicin digunakan sebagai campuran obat analgesic atau obat
                  penahan atau penghilang rasa sakit.
                </span>
                <br className="cabai-text16"></br>
                <br></br>
                <span>
                  Bahkan, cabai juga disebut berkhasiat untuk meredakan gangguan
                  paru-paru, mengeluarkan dahak, mencegah munculnya bronkitis,
                  batuk, mencegah penggumpalan darah, hingga hilangkan rasa
                  nyeri.
                </span>
              </span>
              <h3 className="cabai-text19">Makanan Alami Burung</h3>
              <span className="cabai-text20">
                <span>
                  Cabai yang memiliki rasa pedas bukan hanya digemari manusia
                  untuk dijadikan sambal atau makanan lain. Cabai juga disukai
                  oleh para burung hingga disebut sebagai makanan alami hewan
                  ini.
                </span>
                <br></br>
                <br></br>
                <span>
                  Meski memiliki rasa pedas, burung tetap bisa memakannya dengan
                  aman karena hewan ini tidak memiliki kemampuan untuk
                  mendeteksi capsaicin yang panas. Karena itu, banyak jenis
                  burung suka memakan cabai dan tanaman lain yang masih satu
                  keluarga
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="cabai-text25">Capsicum</span>
                <span>.</span>
              </span>
              <h3 className="cabai-text27">Membantu Membakar Kalori</h3>
              <span className="cabai-text28">
                <span>
                  Cabai dengan kandungan di dalamnya bisa meningkatkan suhu inti
                  tubuh selama proses pencernaan. 
                </span>
                <span>
                  Selain itu, cabai juga memicu reaksi di usus yang akan memberi
                  sinyal pada sistem saraf untuk menghasilkan lebih banyak lemak
                  cokelat. 
                </span>
                <span>
                  Lemak cokelat ini merupakan lemak sehat yang akan membantu
                  mengeluarkan kalori dari dalam tubuh.
                </span>
              </span>
              <h3 className="cabai-text32">
                Rasa Pedasnya Cabai Bukan dari Bijinya
              </h3>
              <span className="cabai-text33">
                Banyak orang masih mengira rasa pedas dari cabai berasal dari
                biji-biji tersebut. Tapi sebenarnya, rasa pedas berasal dari
                membran putih yang menjadi tempat biji melekat. Saat biji cabai
                berjumlah sedikit, bisa jadi cabai tetap terasa pedas, karena
                membran putih berjumlah banyak.
              </span>
            </div>
          </div>
          <div className="cabai-blog-post-card1">
            <div className="cabai-container6">
              <h1 className="cabai-text34">Panen Lainya</h1>
              <FeatureCard
                heading="Buncis"
                image_src="https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?w=1060&amp;t=st=1678690438~exp=1678691038~hmac=8f778d5e2506a87dfce738085eb8f2c3b7399f1a4078b6fcdbb10f9715a7b80f"
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
              <FeatureCard
                heading="Ubi Ungu"
                image_src="https://img.freepik.com/premium-photo/purple-sweet-potato-isolated-white-background_403166-1417.jpg?w=1380"
              ></FeatureCard>
            </div>
            <div className="cabai-container7">
              <div className="cabai-feature-card">
                <img
                  alt="image"
                  src="https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?t=st=1680361058~exp=1680361658~hmac=b70d11f71b859b749ae87930b37ef46acd21bfc1284117c3f86d0523dec3353f"
                  className="cabai-image3"
                />
                <div className="cabai-container8">
                  <h3 className="cabai-text35">
                    Menyediakan kebutuhan sayur di setiap harimu
                  </h3>
                </div>
              </div>
              <button className="cabai-button button">Order Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="cabai-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="cabai-image4"
        />
        <span className="cabai-text36">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Cabai
