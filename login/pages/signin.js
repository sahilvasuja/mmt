
import Header from "../components/Header";
import { useState } from "react";

const SignIn = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <Header />

      <div className="min-h-screen min-w-screen bg-gray-700 flex justify-center items-center">
        <form
          className="px-10 py-8 rounded-sm bg-white shadow flex flex-col gap-4"
          
        >
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
           />
          <input
            type="password"
            placeholder="Enter a pasword..."
            className="w-64 px-2 py-2 bg-slate-50 rounded outline-none font-medium text-gray-700"
            
          />

          <button
            className="px-4 py-2 rounded-sm bg-emerald-500 text-white hover:bg-emerald-400 duration-100"
            
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
