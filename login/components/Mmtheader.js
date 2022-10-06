
import {useRouter} from "next/router"
const Mmtheader = () => {
    const router=useRouter();
    const Create= async(e)=>{
        e.preventDefault();
        router.push("/createaccount");
    }
    const make=async(e)=>{
        e.preventDefault();
        router.push("/");
    }
  return (
    <>
        <div className="flex flex-row mx-12 my-2 h-14" onClick={make}>
            <div className="text-2xl">make <span className="bg-red-800 p-1 my-8 text-3xl rounded-xl" >my</span> trip</div>
            <div className="flex flex-row  mx-56">
                <div className=" border-light outline-none flex w-56 justify-evenly">
                    <h1 className="my-3">📀</h1>
                    <div className="flex flex-col ">
                        <div className="text-lg font-bold">Super Offers</div>
                        <div className="text-sm">
                        Explore great deals & offers
                        </div>  
                    </div>
                </div>
                <div className="  flex w-56 justify-evenly">
                    <h1 className="my-3">👜</h1>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">Introducing myBiz
                        </div>
                        <div className="text-sm">
                        Business Travel Solution
                        </div>  
                    </div>
                </div>
                <div className=" flex w-56 justify-evenly">
                    <h1 className="my-3">💼</h1>
                    <div className="flex flex-col">
                        <div className="text-lg font-bold">My Trips</div>
                        <div className="text-sm">
                        Manage your bookings
                        </div>  
                    </div>
                </div>
                <div className=" flex w-72 justify-evenly bg-blue-500 rounded-lg py-1">
                    <h1 className="rounded-2xl w-10 my-3 h-7 bg-white text-black text-center">my</h1>
                    
                        <div className="text-sm py-4" onClick={Create}> Login or Create Account</div>
                    <div className="text-xl py-2">
                       v
                        </div>
                </div>
                <div className=" flex w-56 justify-evenly bg-slate-700 ">
                    
                        <div className="text-lg py-3">🇮🇳  IN | ENG | INR</div>
                    <div className="text-xl py-2">
                       v
                        </div>
                </div>
                
                
                
               
            </div>
        </div>
    </>
  )
}
export default Mmtheader;