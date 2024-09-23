const Footer = () => {
 return (
    <>
    <div className="h-2 w-full shadow-lg shadow-black"></div>
    <footer className="flex mx-5 my-5">
        <div>
            <h3 className="font-mono font-medium">
                | Social Media |
            </h3>
            <div className="flex mx-7">
                <ul className="flex size-16 h-16 w-20 my-3 gap-4">
                    <li><a href="https://www.instagram.com/dwiiaffa_n?utm_source=qr&igsh=NHJxdmsxenUycGtt"><img src="https://cdn-icons-png.freepik.com/256/15047/15047584.png?ga=GA1.1.590475914.1726749917&semt=ais_hybrid" 
                    alt="" /></a></li>
                    <li><a href="https://www.tiktok.com/@gopansz?_t=8psdj252KOo&_r=1"><img src="https://cdn-icons-png.freepik.com/256/2549/2549166.png?ga=GA1.1.590475914.1726749917&semt=ais_hybrid" 
                    alt="" /></a></li>
                </ul>
            </div>
        </div>
    </footer>
    <div className="bg-slate-400 h-1 w-full"></div>
    <div className="flex justify-center items-center my-2">
        <p className="font-extralight">
            &copy;DESIGNED - AFFAN DWI SAPUTRA 
        </p>
    </div>
    
    </>
 )
}
export default Footer;