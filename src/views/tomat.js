import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import './tomat.css'

const Tomat = (props) => {
  return (
    <div className="tomat-container">
      <Helmet>
        <title>Tomat - KelompokTaniSumberMakmur</title>
        <meta property="og:title" content="Tomat - KelompokTaniSumberMakmur" />
      </Helmet>
      <header data-role="Header" className="tomat-header">
        <Link to="/" className="tomat-navlink">
          <div className="tomat-container1">
            <img
              alt="logo"
              src="/playground_assets/logo-removebg-preview-200w.png"
              className="tomat-image"
            />
            <span className="tomat-text">Sumber Makmur</span>
          </div>
        </Link>
        <div className="tomat-nav">
          <NavigationLinks rootClassName="rootClassName42"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="tomat-burger-menu">
          <svg viewBox="0 0 1024 1024" className="tomat-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="tomat-mobile-menu">
          <div className="tomat-nav1">
            <div className="tomat-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="tomat-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="tomat-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="tomat-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName43"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="tomat-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="tomat-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="tomat-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="tomat-container3">
        <div className="tomat-container4">
          <div className="tomat-blog-post-card">
            <div className="tomat-container5">
              <img
                alt="image"
                src="https://img.freepik.com/free-photo/tomato-isolated_2829-17582.jpg?w=826&amp;t=st=1680360412~exp=1680361012~hmac=3e7dab527fad8ee9f63da858574e7e74eb6990c332ba88b9a965d8ab7342fc95"
                className="tomat-image2"
              />
              <h1 className="tomat-text01">
                <span>Tomat (</span>
                <span className="tomat-text03">Lycopersicon</span>
                <span>)</span>
              </h1>
              <span className="tomat-text05">
                <span className="tomat-text06">Tomat</span>
                <span>
                  {' '}
                  atau
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="tomat-text08">rangam</span>
                <span> (</span>
                <span className="tomat-text10">Solanum lycopersicum syn.</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="tomat-text12">Lycopersicum esculentum</span>
                <span>
                  ) adalah tumbuhan dari keluarga
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="tomat-text14">Solanaceae</span>
                <span>
                  , tumbuhan asli Amerika Tengah dan Selatan, dari Meksiko
                  sampai Peru. Tomat merupakan tumbuhan siklus hidup singkat,
                  dapat tumbuh setinggi 1 sampai 3 meter. Tumbuhan ini memiliki
                  buah berwarna hijau, kuning, dan merah yang biasa dipakai
                  sebagai sayur dalam masakan atau dimakan secara langsung tanpa
                  diproses. Tomat memiliki batang dan daun yang tidak dapat
                  dikonsumsi karena masih sekeluarga dengan kentang dan terung
                  yang mengadung alkaloid.
                </span>
                <br className="tomat-text16"></br>
                <br className="tomat-text17"></br>
                <span>
                  Cara menanam tanaman tomat adalah disemai lebih dahulu,
                  setelah tumbuh 4 daun sejati kemudian ditanam (dijadikan bibit
                  terlebih dahulu). Panen dimulai usia 9 minggu setelah tanam
                  selanjutnya setiap 5 hari.
                </span>
                <br className="tomat-text19"></br>
                <br className="tomat-text20"></br>
                <span>
                  Kata &quot;tomat&quot; berasal dari kata dalam bahasa Nahuatl,
                  tomat. Salah satu produk buatan hasil olahan tomat yang
                  digemari, yaitu saus tomat. Hampir di berbagai negara
                  memproduksi saus tomat. Saus tomat sendiri banyak dimanfaatkan
                  untuk bumbu tambahan dalam mengolah berbagai masakan. Saus
                  tomat juga dapat disajikan langsung bersama burger, sandwich,
                  dan banyak lagi yang lainnya. Selain untuk tambahan dalam
                  mengolah makanan, tomat juga dapat diolah menjadi jus tomat.
                </span>
              </span>
              <h1 className="tomat-text22">Fakta Menarik Buncis</h1>
              <h3 className="tomat-text23">
                Tomat ditemukan pertama kali oleh Suku Aztek di Amerika
              </h3>
              <span className="tomat-text24">
                <span>
                  Semua tanaman memang biasanya memiliki asal muasal tersendiri.
                  Termasuk dalam hal ini adalah keberadaan tanaman tomat yang
                  kerap dimanfaatkan oleh berbagai orang di seluruh penjuru
                  dunia.
                </span>
                <br className="tomat-text26"></br>
                <br></br>
                <span>
                  Dilansir Tomato Cages, tomat konon ditemukan pertama kali pada
                  awal masa Suku Aztek sekitar 700 Masehi. Tidak mengherankan
                  apabila memang tomat dianggap sebagai jenis tanaman asli
                  Amerika. Meski begitu, tak sampai awal abad ke-16, tanaman ini
                  mulai diperkenalkan secara luas pada publik Eropa.
                </span>
              </span>
              <h3 className="tomat-text29">
                {' '}
                Tomat lebih cocok dibudidayakan pada temperatur yang hangat
              </h3>
              <span className="tomat-text30">
                <span>
                  Tomat bisa dikatakan sebagai tanaman yang cocok dengan iklim
                  tropis. Hal ini karena memang tomat dapat tumbuh secara
                  maksimal pada suhu hangat dengan kelembapan tertentu.
                </span>
                <br className="tomat-text32"></br>
                <br></br>
                <span>
                  Mengutip Star ke Ayres, suhu minimum untuk membudidayakan
                  tomat adalah sekitar 10 derajat selsius, serta suhu
                  maksimalnya adalah 34 derajat Celsius. Meski begitu, suhu
                  optimum tomat biasanya sekitar 26-29 derajat Celsius. Bahkan
                  tanaman tomat juga memerlukan kelembapan antara sekitar 65-85
                  persen.
                </span>
              </span>
              <h3 className="tomat-text35">
                Memiliki banyak manfaat kesehatan
              </h3>
              <span className="tomat-text36">
                <span>
                  Tomat bukan hanya dikenal sebagai jenis tanaman untuk memasak.
                  Nyatanya tomat juga bisa dikonsumsi untuk banyak tujuan, salah
                  satunya agar dapat memperoleh manfaat kesehatan yang maksimal.
                </span>
                <br className="tomat-text38"></br>
                <br></br>
                <span>
                  Bahkan, tomat memiliki beberapa manfaat baik, seperti tinggi
                  serat, kaya vitamin dan mineral, serta mengandung banyak
                  manfaat untuk melawan berbagai penyakit, seperti dilansir
                  Health Line. Tidak mengherankan bila banyak orang mengonsumsi
                  tomat untuk dibuat jus, salad, dan lain sebagainya, sehingga
                  dapat memperoleh manfaatnya dengan maksimal.
                </span>
              </span>
              <h3 className="tomat-text41">
                Tomat sebetulnya digolongkan sebagai buah, bukan sayur
              </h3>
              <span className="tomat-text42">
                <span>
                  Perdebatan mengenai klasifikasi dari tomat mungkin menjadi
                  topik yang kerap dibahas. Hal ini karena beberapa orang
                  memiliki pandangan yang berbeda dalam mengklasifikasikan tomat
                  ke dalam buah atau pun sayuran.
                </span>
                <br className="tomat-text44"></br>
                <br></br>
                <span>
                  Secara botani, ternyata tomat diklasifikasikan sebagai buah,
                  sebab memiliki biji di dalamnya dan tumbuh dari bunga yang
                  terdapat pada tanamannya, seperti dikutip Britannica. Meski
                  termasuk buah, tapi banyak orang justru memperlakukan tomat
                  selayaknya bagian dari sayuran.
                </span>
              </span>
              <h3 className="tomat-text47">
                Tiongkok berhasil menjadi produsen tomat terbesar di dunia
              </h3>
              <span className="tomat-text48">
                <span>
                  Tomat termasuk ke dalam kategori komoditas ekspor yang kerap
                  dilakukan oleh beberapa negara. Hal ini karena memang
                  permintaan terhadap tomat cukup tinggi, serta tidak semua
                  negara mampu untuk melakukan budidaya secara langsung.
                </span>
                <br className="tomat-text50"></br>
                <br></br>
                <span>
                  Dilansir AtlasBig, Tiongkok berhasil menduduki posisi pertama
                  sebagai produsen tomat terbesar di dunia, yaitu mencapai angka
                  56,4 juta ton produksi setiap tahunnya. Deret ini diikuti oleh
                  India dengan 18,3 juta ton, serta Amerika Serikat yang
                  mencapai 13 jutaan ton.
                </span>
              </span>
            </div>
          </div>
          <div className="tomat-blog-post-card1">
            <div className="tomat-container6">
              <h1 className="tomat-text53">Panen Lainya</h1>
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
              <FeatureCard
                heading="Ubi Merah"
                image_src="https://img.freepik.com/free-photo/delicious-cooked-sweet-potato_1205-44.jpg?1&amp;w=1380&amp;t=st=1680362351~exp=1680362951~hmac=e2d34040a5a7219f0e769bc790ecfe038d07adfe91f96db8f90f637e733cf646"
              ></FeatureCard>
              <FeatureCard
                heading="Ubi Ungu"
                image_src="https://img.freepik.com/premium-photo/purple-sweet-potato-isolated-white-background_403166-1417.jpg?w=1380"
              ></FeatureCard>
            </div>
            <div className="tomat-container7">
              <div className="tomat-feature-card">
                <img
                  alt="image"
                  src="https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?t=st=1680361058~exp=1680361658~hmac=b70d11f71b859b749ae87930b37ef46acd21bfc1284117c3f86d0523dec3353f"
                  className="tomat-image3"
                />
                <div className="tomat-container8">
                  <h3 className="tomat-text54">
                    Menyediakan kebutuhan sayur di setiap harimu
                  </h3>
                </div>
              </div>
              <button className="tomat-button button">Order Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="tomat-footer">
        <img
          alt="logo"
          src="/playground_assets/logo-removebg-preview-200w.png"
          className="tomat-image4"
        />
        <span className="tomat-text55">
          © 2023 KKN C-7 Sumber Makmur, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Tomat
