import { supabase } from "../utils/supabase";
import { useState } from "react";
import Header from "../components/Header";

const SignUp = () => {
    const [mail,setmail]= useState("");
    const [pass, setpass]=useState("");
     function handlemail(e){
        setmail(e.target.value);
    }
    function handlpass(e){
        setpass(e.target.value);
    }
    const signup= async(e)=>{
        e.preventDefault();
        const {user,session,error}=await supabase.auth.signUp({
            email: mail,
            password: pass
        });
        const { data: { user: newuser } }=await supabase.auth.getUser()
        console.log(newuser +" hello");
        error? console.log(error) : console.log(user);
        console.log(user,error,mail,pass);
    }
  return (
    <>
      <Header />

      <div className="min-h-screen min-w-screen bg-gray-700 flex justify-center items-center">
        <form className="px-10 py-8 rounded-sm bg-white shadow flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
            value={mail}
            onChange={e=>(handlemail(e))}
          />
          <input
            type="password"
            placeholder="Enter a pasword..."
            className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
            value={pass}
            onChange={e=>(handlpass(e))}
          />

          <button className="px-4 py-2 rounded-sm bg-emerald-500 text-white hover:bg-emerald-400 duration-100" onClick={signup}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
