import Footer from "./Footer";
import Navbar from "./Navbar";

const Minuman = () => {
 return (
    <>
    {/* Navbar */}
    <Navbar/>

    <main className="flex justify-start">
    <div className="shadow-lg shadow-gray-500 rounded-md flex mx-5 my-6" >
        <img src="https://haus.co.id/assets/thai_tea_with_boba_brown_sugar-D35UJiNz.png" 
        alt=""  className="size-40 h-40 w-44"/>
        <h1 className="font-bold mx-3 my-2 ">
           <a href="" className="hover:text-gray-700 delay-75">Minuman terenak dari &copy;haus, salah satunya varian rasa Thai tea with Boba brown sugar <br />
               Bisa kalian coba dikala sedang haus dan capek <br /> Cocok di minum saat kepanasan di siang hari <br /> Sikat GANN !!</a>
          <p className="font-extralight">
            6 Bulan lalu | Indonesia
          </p>
        </h1>
      </div>
    </main>
    <main className="flex justify-start">
    <div className="shadow-lg shadow-gray-500 rounded-md flex mx-5 my-6" >
        <img src="https://estehindonesia.sgp1.cdn.digitaloceanspaces.com/uploads/3f2d47325ff0176191285f1748f31b4f.jpg" 
        alt=""  className="size-40 h-40 w-44"/>
        <h1 className="font-bold mx-3 my-2 ">
           <a href="" className="hover:text-gray-700 delay-75">Brand &copy;estehindonesia,Mengeluarkan varian rasa yang baru yaitu Choccolate Macchiato <br />
               &copy;estehindonesia Baru saja mengeluarkan varian Coklat baru <br /> Cocok bagi kalian yang suka coklat ni <br /> Sikat maniss !!!</a>
          <p className="font-extralight">
            6 Bulan lalu | Indonesia
          </p>
        </h1>
      </div>
    </main>
    <main className="flex justify-start">
    <div className="shadow-lg shadow-gray-500 rounded-md flex mx-5 my-6" >
        <img src="https://estehindonesia.sgp1.cdn.digitaloceanspaces.com/uploads/6c4a7356c380628b2cc7eb987415aa70.jpg" 
        alt=""  className="size-40 h-40 w-44"/>
        <h1 className="font-bold mx-3 my-2 ">
           <a href="" className="hover:text-gray-700 delay-75">Varian terbaik ni ! dari brand&copy;estehindoneisa, varian Chizu Red Velvet. Varian ini banyak <br />
              digemari para penikmat &copy;estehindoneisa <br /> Langsungin aja manis dicoba varian chizu Red Velvet <br /> Sikat GANN !!</a>
          <p className="font-extralight">
            1 Hari lalu | Indonesia
          </p>
        </h1>
      </div>
    </main>





    {/* Footer */}
    <Footer/>
    
    
    </>
 )
}
export default Minuman;