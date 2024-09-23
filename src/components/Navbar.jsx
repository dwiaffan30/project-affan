import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const navigate = useNavigate();
    return (
        <>
        <nav className="flex justify-between shadow-green-400 shadow-md py-3 sticky bg-black top-0 ">
            <div className="size-8 h-8 w-10 mx-3  ">
                <img src="https://cdn-icons-png.freepik.com/256/2111/2111329.png?ga=GA1.1.590475914.1726749917&semt=ais_hybrid" 
                alt="" />
            </div>
            <div className="my-2 mx-5 font-mono font-medium sticky text-white">
                <ul className="flex gap-14">
                    <li><a href="" className="hover:text-green-600 delay-200" onClick={() => navigate('/')}>Home</a></li>
                    <li><a href="" className="hover:text-green-600 delay-200" onClick={() => navigate('/Food')} >Food</a></li>
                    <li><a href="" className="hover:text-green-600 delay-200" onClick={() => navigate('/Drinks')}>Drink</a></li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-9 mx-5 my-2 font-mono font-medium sticky">
                    <li><a href="" className="text-red-400 hover:text-red-600 delay-150">Register</a></li>
                    <li><a href="" className="text-blue-400 hover:text-blue-600 delay-150">Login</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;
        
        
        
        