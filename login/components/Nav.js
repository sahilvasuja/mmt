import Bigdiv from "./Bigdiv";

 const Nav = () => {
  return (
    <div className="w-screen h-screen bg-blue-900  p-32 relative"> 
       
        <div className="bg-white w-max-content h-full px-14  py-20 my-20 text-gray-400 rounded-xl ">
             
            <div className="px-24 bg-green-800 z-20 shadow-xl w-4/6 mx-20 my-36 -top-0 h-24 absolute text-gray-400 rounded-xl">
                <div className="flex flex-row justify-evenly mt-5" >
                        <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-3 items-center ">✈️</h1>
                        <h5>Flight</h5>
                        </div>
                        <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-3">🏬</h1>
                        <h5 className="">Hotels</h5>
                        </div>
                        <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-6">🏬</h1>
                        <h5 className="">Homestays</h5>
                        </div>
                   
              
                    <div className="flex flex-col">
                    <h1 className="w-30 h-30 veiwbox-24 ml-11">🍟</h1>
                    <h5>Holiday Packages</h5>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-3">🚂</h1>
                        <h5>Trains</h5>
                        </div>
                        <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-3">🚌</h1>
                        <h5 className="">Buses</h5>
                        </div>
                   
              
                    <div className="flex flex-col">
                    <h1 className="w-30 h-30 veiwbox-24 ml-2">🚙</h1>
                    <h5>cabs</h5>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-3">🏬</h1>
                        <h5>Forex</h5>
                        </div>
                        <div className="flex flex-col">
                        <h1 className="w-30 h-30 veiwbox-24 ml-9">🛬</h1>
                        <h5 className="">Charter Flights</h5>
                        </div>
                   
              
                    <div className="flex flex-col">
                    <h1 className="w-30 h-30 veiwbox-24 ml-4">🚶‍♂️</h1>
                    <h5>Activity</h5>
                    </div>
                </div>
                    
                       
               
            </div>
            <div className=" my-4  flex flex-row px-3 ">
                <div >
                <input type="radio" name="prefer "></input>
                <label for="ONEWAY" className="pl-2 font-bold" >ONEWAY</label>
                </div>
                <div className="pl-4">
                <input type="radio" name="prefer" ></input>
                <label for="ROUND TRIP" className="pl-2 font-bold">ROUND TRIP</label>
                </div>
                <div className="pl-4">
                <input type="radio" name="prefer"></input>
                <label for="MULTI CITY" className="pl-2 font-bold">MULTI CITY</label>
                </div>
            </div>
            <div >
            <Bigdiv />
            </div>
            <div className="my-8">
            <Bigdiv />
            </div>
            <div className="flex flex-row ">

            
                <div className="flex flex-row  ">
                <div className="w-20 bg-white ">Select A Fare Type:</div>
                    <div className="border border-black w-20 h-12  bg-gray-300"> <input type="radio" name="type"/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm " >Regular  Fares</label></div>

                    <div className="border border-black w-32 h-12 ml-1 bg-gray-300"><input type="radio" name="type" className=""/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm" >Armed Forces Fares NEW</label></div>

                    <div className="border border-black w-24 h-12 ml-1 bg-gray-300"><input type="radio" name="type"/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm" >Student Fares</label></div>

                    <div className="border border-black w-24 h-12 ml-1 bg-gray-300"><input type="radio" name="type"/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm" >Senior Citizen Fares</label></div>
                    
                    <div className="border border-black w-28 h-12 ml-1 bg-gray-300" ><input type="radio" name="type"/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm" >Doctors & Nurses Fares</label></div>
                </div>
                <div className=" ml-32 ">
                Trending Searches:
                </div>
                <div className="border border-black w-72 mx-4 h-12  " ><input type="radio" name="med"/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm" >Doctors & Nurses Fares</label></div>
                <div className="border border-black w-72 h-12  " ><input type="radio" name="med"/>
                    <label for="html" className="pl-2 text-gray-700 font-bold text-sm" >Doctors & Nurses Fares</label></div>
            </div>
            <button className="m-8 ml-96 text-slate-50 text-3xl bg-sky-400 rounded-2xl font-bold border-solid w-56  h-14 ">Search</button>
        </div>
       
    </div>
    
  )
}
export default Nav;