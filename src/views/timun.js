import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import './timun.css'

const Timun = (props) => {
  return (
    <div className="timun-container">
      <Helmet>
        <title>Timun - KelompokTaniSumberMakmur</title>
        <meta property="og:title" content="Timun - KelompokTaniSumberMakmur" />
      </Helmet>
      <header data-role="Header" className="timun-header">
        <Link to="/" className="timun-navlink">
          <div className="timun-container1">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="timun-image"
            />
            <span className="timun-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="timun-nav">
          <NavigationLinks rootClassName="rootClassName40"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="timun-burger-menu">
          <svg viewBox="0 0 1024 1024" className="timun-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="timun-mobile-menu">
          <div className="timun-nav1">
            <div className="timun-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="timun-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="timun-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="timun-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName41"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="timun-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="timun-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="timun-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="timun-container3">
        <div className="timun-container4">
          <div className="timun-blog-post-card">
            <div className="timun-container5">
              <img
                alt="image"
                src="https://img.freepik.com/premium-photo/cucumber-vegetable-isolated-white-background_42033-135.jpg?w=1380"
                className="timun-image2"
              />
              <h1 className="timun-text01">
                <span>Timun (</span>
                <span className="timun-text03">Cucumis sativus</span>
                <span>)</span>
              </h1>
              <span className="timun-text05">
                <span className="timun-text06">Mentimun</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="timun-text08">timun</span>
                <span>
                  , atau
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="timun-text10">ketimun</span>
                <span> (</span>
                <span className="timun-text12">Cucumis sativus L.</span>
                <span>
                  {' '}
                  suku labu-labuan atau
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="timun-text14">Cucurbitaceae</span>
                <span>
                  ) merupakan tumbuhan yang menghasilkan buah yang dapat
                  dimakan. Buahnya biasanya dipanen ketika belum masak benar
                  untuk dijadikan sayuran atau penyegar, tergantung jenisnya.
                  Mentimun dapat ditemukan di berbagai hidangan dari seluruh
                  dunia dan memiliki kandungan air cukup banyak di dalamnya
                  sehingga berfungsi menyejukkan. Potongan buah mentimun juga
                  digunakan untuk membantu melembabkan wajah serta banyak
                  dipercaya dapat menurunkan tekanan darah tinggi.
                </span>
                <br className="timun-text16"></br>
                <br className="timun-text17"></br>
                <span>
                  Habitus mentimun berupa herba lemah melata atau setengah
                  merambat dan merupakan tanaman semusim: setelah berbunga dan
                  berbuah tanaman mati. Perbungaannya berumah satu (
                </span>
                <span className="timun-text19">monoecious</span>
                <span>
                  ) dengan tipe bunga jantan dan bunga hermafrodit (berkelamin
                  ganda). Bunga pertama yang dihasilkan, biasanya pada usia 4-5
                  minggu, adalah bunga jantan. Bunga-bunga selanjutnya adalah
                  bunga hermafrodit apabila pertumbuhannya baik. Satu tumbuhan
                  dapat menghasilkan 20 buah, namun dalam budidaya biasanya
                  jumlah buah dibatasi untuk menghasilkan ukuran buah yang baik.
                </span>
                <br className="timun-text21"></br>
                <br className="timun-text22"></br>
                <span>
                  Buah berwarna hijau ketika muda dengan larik-larik putih
                  kekuningan. Semakin buah masak warna luar buah berubah menjadi
                  hijau pucat sampai putih. Bentuk buah memanjang seperti
                  torpedo. Daging buahnya perkembangan dari bagian mesokarp,
                  berwarna kuning pucat sampai jingga terang. Buah dipanen
                  ketika masih setengah masak dan biji belum masak fisiologi.
                  Buah yang masak biasanya mengering dan biji dipanen, warnanya
                  hitam.
                </span>
              </span>
              <h1 className="timun-text24">Fakta Menarik Timun</h1>
              <h3 className="timun-text25">
                Timun bisa menghilangkan bau mulut
              </h3>
              <span className="timun-text26">
                Caranya mudah, kamu hanya tinggal mengiris tipis timun dan
                meletakkannya pada langit-langit mulutmu. Timun bisa menyerap
                bakteri yang ada di mulutmu sehingga bisa menghilangkan bau
                tidak sedap.
              </span>
              <h3 className="timun-text27">Timun bisa memperkuat tulang</h3>
              <span className="timun-text28">
                Timun mengandung vitamin K yang sangat tinggi. Sehingga sangat
                baik bagi tulang dan jaringan-jaringan pembentuknya. Kamu yang
                ingin memiliki kesehatan tulang yang baik, maka timun adalah
                pilihan tepat untukmu.
              </span>
              <h3 className="timun-text29">
                Timun bisa digunakan untuk membersihkan cermin
              </h3>
              <span className="timun-text30">
                Ternyata timun juga bisa digunakan untuk membersihkan cermin.
                Caranya juga sangat mudah yaitu kamu tinggal mengiris tipis
                timun dan mengusapkannya di cermin kamar mandi atau kamar.
                Dijamin cerminmu akan jadi lebih bersih dan mengkilap.
              </span>
              <h3 className="timun-text31">
                Timun bisa menghilangkan pengaruh alkohol
              </h3>
              <span className="timun-text32">
                Timun ampuh untuk menghilangkan pengaruh alkohol. Saat kamu
                sedang dalam pengaruh alkohol, coba konsumsi beberapa iris timun
                sebelum tidur dan rasakan bagaimana khasiatnya setelah bangun
                pagi.
              </span>
            </div>
          </div>
          <div className="timun-blog-post-card1">
            <div className="timun-container6">
              <h1 className="timun-text33">Panen Lainya</h1>
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
            <div className="timun-container7">
              <div className="timun-feature-card">
                <img
                  alt="image"
                  src="https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?t=st=1680361058~exp=1680361658~hmac=b70d11f71b859b749ae87930b37ef46acd21bfc1284117c3f86d0523dec3353f"
                  className="timun-image3"
                />
                <div className="timun-container8">
                  <h3 className="timun-text34">
                    Menyediakan kebutuhan sayur di setiap harimu
                  </h3>
                </div>
              </div>
              <button className="timun-button button">Order Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="timun-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="timun-image4"
        />
        <span className="timun-text35">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Timun
