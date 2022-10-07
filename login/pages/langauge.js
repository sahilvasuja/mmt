import {useRouter} from "next/router";
const Langauge = () => {
  const router=useRouter();
  const apply=async(e)=>{
    e.preventDefault();
    router.push("/");

  }
  return (
    
    <div className="bg-white w-72 h-80 m-auto rounded-3xl flex flex-col justify-between my-56 shadow-2xl">
    <form action="" >
        <select name="country" className="w-48 m-10 h-12 rounded z-20 border bg-white text-black outline-none shadow-xl">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uae">UAE</option>
           
        </select>
        
<p className="text-black px-3">Select Language</p>
 <div className="justify-evenly flex flex-row m-3">
 <div>
  <input type="radio"  name="fav_language" value="english" ></input>
  <label for="english" className="text-black">ENGLISH</label>
  </div>
<div><input type="radio"  name="fav_language" value="hindi"></input>
  <label for="hindi" className="text-black">HINDI</label></div>
</div>
<div>
<p className="text-black px-3 mt-7">Select Currency</p>
  <input type="radio"  name="fav_language" value="INR" ></input>
  <label for="inr" className="text-black">INR</label>
  
</div>  
    <button className="bg-blue-400 w-10/12 h-8 mx-4 my-3 rounded-xl" onClick={apply}>APPLY</button>
   
  
        </form>

    </div>
  )
}
export default Langauge;