import Footer from "./Footer";
import Navbar from "./Navbar";

const Makanan = () => {
 return (
   <>
   {/* Navbar */}
   <Navbar/>
   {/* Article-Food */}
   <main className="flex justify-between mx-5 my-6 shadow-md px-3 shadow-blue-600 rounded-md">

    {/* Article-Food-1 */}
    <div className="">
      <h1 className="font-bold">
        Rekomendasi tempat makan terenak di jakarta
      </h1>
      <p>
        Ada beberapa tempat di daerah Jakarta yang paling <br /> cocok buat tempat nongki bareng teman-teman
      </p>
      <button className="my-2 bg-slate-500 rounded-md py-2 px-2 text-white hover:bg-slate-900 delay-100 "> 
         <a href="" className="">Selengkapnya </a>
      </button>
    </div>

    {/* Article-Food-2 */}
    <div>
      <h1 className="font-bold">
        10 Makanan terenak di Jawa tengah 
      </h1>
      <p>
        Inilah beberapa 10 makanan terenak di daerah Jawa Tengah <br />   salah satunya membuat kamu nagih !!
      </p>
      <button className="my-2 bg-slate-500 rounded-md py-2 px-2 text-white hover:bg-slate-900 delay-100 "> 
         <a href="" className="">Selengkapnya </a>
      </button>
    </div>
    {/* Article-Food-3 */}

    <div>
    <h1 className="font-bold">
        OMGGGGG !!! Rendang masuk kedalam <br /> peringkat makanan terenak di dunia  
      </h1>
      <p>
       Rendang merupakan makanan  khas daerah  Padang  Sumatra Barat
      </p>
      <button className="my-2 bg-slate-500 rounded-md py-2 px-2 text-white hover:bg-slate-900 delay-100 "> 
         <a href="" className="">Selengkapnya </a>
      </button>
    </div>
   </main>

   {/* Food-Main */}
   <main className="mx-5 my-5 flex justify-start ">
      <div className="shadow-lg shadow-gray-500 rounded-md flex">
        <img src="https://img-global.cpcdn.com/recipes/dfc7ffcf2deb6cca/640x640sq70/photo.webp" 
        alt=""  className="size-40 h-40 w-44"/>
        <h1 className="font-bold mx-3 my-2 ">
           <a href="" className="hover:text-gray-700 delay-75">TUTOR !! INILAH CARA MEMBUAT CILOK TANPA GAGAL <br />
          kalian pasti pernah kan, membuat cilok <br /> tetapi takut meledeak.Inilah cara membuat <br /> cilok tanpa meledak</a>
          <p className="font-extralight">
            16 Jam lalu | Indonesia
          </p>
        </h1>
      </div>
      {/* Food-Main-1 */}
      <div className="shadow-lg shadow-gray-500 rounded-md flex mx-3" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/TretanMuslim.png/220px-TretanMuslim.png" 
        alt=""  className="size-40 h-40 w-44"/>
        <h1 className="font-bold mx-3 my-2 ">
           <a href="" className="hover:text-gray-700 delay-75">Bebek carok, kembali hadir di pamulang <br />
          Bebek carok merupakan usaha milik Tretan muslim <br /> Saat ini bebek carok membuka cabang di Pamulang <br /> Bagi warga Pamulang bisa nih mampir</a>
          <p className="font-extralight">
            2 Minggu lalu | Indonesia
          </p>
        </h1>
      </div>
   </main>
   <main className="mx-2 my-5 flex justify-start">
        <div className="shadow-lg shadow-gray-500 rounded-md flex mx-3" >
            <img src="https://img-global.cpcdn.com/recipes/78d9c501261cd841/680x482cq70/     ayam-kuah-kuning-topping-mie-ayam-foto-resep-utama.webp" 
            alt=""  className="size-40 h-40 w-44"/>
            <h1 className="font-bold mx-3 my-2 ">
              <a href="" className="hover:text-gray-700 delay-75">INI MIE AYAM ENAK BANGET !!     DI        DAERAH PAMULANG<br />
                Aduhai sedap nya mie ayam di daerah pamulang ini <br /> kalau kalian ngiler ini tempat mie ayam yang bikin ngiler <br /> gas lah warga Pamulang !</a>
              <p className="font-extralight">
                1 Minggu lalu | Indonesia
               </p>
            </h1>
        </div>
        <div className="shadow-lg shadow-gray-500 rounded-md flex " >
            <img src="https://akcdn.detik.net.id/community/media/visual/2022/01/13/dancing-shrimp-3_43.png?w=700&q=90" 
              alt=""  className="size-40 h-40 w-44" />
            <h1 className="font-bold mx-3 my-2 ">
              <a href="" className="hover:text-gray-700 delay-75">MAKANAN ANEH CUYY !!<br />
                Inilah makanan teraneh yang ada di Thailand <br /> 10 makanan di Thailand yang sangat aneh dan geli <br /> tetapi banyak orang yang suka</a>
              <p className="font-extralight">
                3 Jam lalu | Thailand
               </p>
            </h1>
        </div>
   </main>




  {/* Footer  */}
   <Footer/>
   </>
 )
}
export default Makanan;
  



