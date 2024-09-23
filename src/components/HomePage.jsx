import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
 return (
    <>
    {/* Main-Article */}

    <main className="mx-5 my-4  ">
      <div className="shadow-xl shadow-gray-400 py-2 rounded-2xl md:grid-cols-3 sm:grid-cols-4">
        <h1 className=" mx-4 font-medium">
            Kacang Tanah, Asal-usul hingga Peran dalam Kuliner Nusantara
        </h1>
        <p className="mx-4 font-normal">
          Sejarah asal-usul kacang tanah dan perannya dalam kuliner di bumi Nusantara
        </p>
        <p className="font-extralight mx-4">
          16 Jam lalu | Indonesia 
        </p>
        <div className="flex justify-end items-end mx-5 md:grid-cols-3 sm:grid-cols-4">
          <button className="text-white my-2">
            <a href="" className=" bg-slate-700 rounded-md py-1 mx-3 px-2 hover:bg-slate-950 delay-200" onClick={() => navigate('/')}>Selengkapnya</a>
          </button>
        </div>
      </div>
    </main>

    {/* Main-Article-1 */}

    <main>
      <div className="mx-4 my-7 md:grid-cols-3 lg:grid-cols-5">
        <ul className="flex gap-7">
          <li className="shadow-md shadow-gray-400 ">
            <img src="https://assets-a3.kompasiana.com/items/album/2024/04/17/1000171719-661f40f2c57afb6e39761032.jpg?t=o&v=410&x=225" 
            alt="" />
            <h1 className="font-bold mx-2 md:grid-cols-3 sm:grid-cols-4">
                <a href="" className="hover:text-gray-600 delay-150">
                Tempat kumpul di Krakasan jawa Timur  <br /> Layak Dicoba
                </a>
            </h1>
            <p className="font-normal mx-2 md:grid-cols-3 sm:grid-cols-4">
              Tempat kumpul bareng teman-teman <br /> di daerah Krakasan Jawa timur <br />yang sangat <br /> layak untuk dicoba 
            </p>
            <p className="font-extralight my-2 mx-2 md:grid-cols-3 sm:grid-cols-4">
              2 Hari lalu | Jawa Timur 
            </p>
          </li>
          <li className="shadow-md shadow-gray-400 md:grid-cols-3 sm:grid-cols-4">
            <img src="https://assets-a3.kompasiana.com/items/album/2024/04/17/1000171719-661f40f2c57afb6e39761032.jpg?t=o&v=410&x=225" 
            alt="" className="" />
             <h1 className="font-bold mx-2">
                <a href="" className="hover:text-gray-600 delay-150">
                13 Rekomendasi Wisata Kuliner Kraksaan yang <br /> Layak Dicoba
                </a>
            </h1>
            <p className="font-normal mx-2">
              13 Tempat kulineran di daerah Krakasan Jawa Timur <br />yang sangat <br /> layak untuk dicoba 
            </p>
            <p className="font-extralight my-2 mx-2">
              1 Minggu lalu | Jawa Timur
            </p>
          </li>
        </ul>
      </div>

      {/* Article */}

    </main>
    <main className="flex justify-between md:grid-cols-3 sm:grid-cols-4">
      <div className="shadow-lg mx-5 shadow-gray-500 px-12">
          <h1 className="font-semibold ">
            <a href="" className="hover:text-gray-500 delay-100">Minuman yang bagus <br /> untuk kesehatan</a>
          </h1>
          <p className="my-3 ">
            Minuman yang bagus untuk <br /> kesehatan tubuh <br /> yang disarankan oleh para  ahli dan dokter
          </p>
          <p className="font-extralight my-3" >
            4 Minggu lalu | Indonesia
          </p>
      </div>

      {/* Article-1 */}

      <div className="shadow-lg mx-5 shadow-gray-500 px-12 md:grid-cols-3 sm:grid-cols-4">
          <h1 className="font-semibold ">
            <a href="" className="hover:text-gray-500 delay-100">Dampak kesehatan akibat banyak mengkonsumsi gula</a>
          </h1>
          <p className="my-3 ">
           Dampak yang ditimbulkan akibat <br /> mengkonsumsi gula  yang berlebihan mengakibatkan <br /> banyak penyakit
          </p>
          <p className="font-extralight my-3" >
            1 Jam Lalu | Indonesia
          </p>
      </div>

      {/* Article-2 */}

      <div className="shadow-lg mx-5 shadow-gray-500 px-12 md:grid-cols-3 sm:grid-cols-4">
          <h1 className="font-semibold ">
            <a href="" className="hover:text-gray-500 delay-100">Apa saja minuman yang bahaya  untuk kesehatan !?</a>
          </h1>
          <p className="my-3 ">
            inilah berbagai minuman yang tidak baik <br /> untuk kesehatan tubuh oleh para  ahli dan dokter
          </p>
          <p className="font-extralight my-3" >
           1 bulan lalu | Indonesia
          </p>
      </div>
      
      {/* Article-3 */}
      <div className="shadow-lg mx-5 shadow-gray-500 px-12 md:grid-cols-3 sm:grid-cols-4">
          <h1 className="font-semibold ">
            <a href="" className="hover:text-gray-500 delay-100">Makanan yang sayang banget  kamu lewatkan !!</a>
          </h1>
          <p className="my-3 ">
            Banyak sekali makanan yang <br />sayang banget <br /> kamu lewatkan  yang disarankan oleh Tim Ferdona.id
          </p>
          <p className="font-extralight my-3" >
            3 Bulan lalu | Indonesia
          </p>
      </div>
    </main>

    {/* Article-Footer */}

    <main className="flex justify-between my-5 mx-5 md:grid-cols-3 sm:grid-cols-4">
      <div className="">
          <img src="https://statik.tempo.co/data/2019/01/03/id_808551/808551_400.jpg" 
          alt="" />
      </div>
      {/* Article-Footer-1 */}

      <div>
        <img src="https://statik.tempo.co/data/2019/01/03/id_808551/808551_400.jpg" 
        alt="" />
      </div>
      {/* Article-Footer-2 */}

      <div>
        <img src="https://statik.tempo.co/data/2018/09/20/id_734830/734830_400.jpg" 
        alt="" />
      </div>
    </main>

    {/* Footer-Article */}

    <main className="mx-5 my-4 md:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 ">
      <div className="shadow-xl shadow-gray-400 py-2 rounded-2xl ">
        <h1 className=" mx-4 font-medium">
            Dampak langsung minuman bewarna dan kemasan bagi kesehatan tubuh dan 
        </h1>
        <p className="mx-4 font-normal">
          Sejarah asal-usul toko roti yang ada di indonesia
        </p>
        <p className="font-extralight mx-4">
          5 Hari lalu | Indonesia
        </p>
        <div className="flex justify-end items-end mx-5 md:grid-cols-3 sm:grid-cols-4">
          <button className="text-white my-2">
            <a href="" className=" bg-slate-700 rounded-md py-1 mx-3 px-2 hover:bg-slate-950 delay-200" onClick={() => navigate('/')}>Selengkapnya</a>
          </button>
        </div>
      </div>
    </main>

    </>
 )
}
export default HomePage;


                  