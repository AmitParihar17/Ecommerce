 import React, { useState } from "react";
 import Title from "../components/Title";

 const SignUP = () => {
   const [login, setLogin] = useState(false);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isDisabled, setIsDisabled] = useState(false);

   const onSubmitHandler = (e) => {
     e.preventDefault();
     setIsDisabled(true);

     if (login) {
       console.log("Login API");
     } else {
       console.log("Signup API");
     }

     setTimeout(() => {
       setIsDisabled(false);
     }, 1500);
   };

   return (
     <form
       onSubmit={onSubmitHandler}
       className="min-h-screen flex justify-center items-center bg-gray-100 px-4"
     >
       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
         <Title text1={login ? "Login" : "Sign Up"} />

         {!login && (
           <input
             value={name}
             onChange={(e) => setName(e.target.value)}
             className="w-full border px-4 py-2 my-2 rounded-md"
             type="text"
             placeholder="Name"
             required
           />
         )}

         <input
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="w-full border px-4 py-2 my-2 rounded-md"
           type="email"
           placeholder="Email"
           required
         />

         <input
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="w-full border px-4 py-2 my-2 rounded-md"
           type="password"
           placeholder="Password"
           required
         />

         <p className="text-sm mt-2">
           {login ? "Don't have an account? " : "Already have an account? "}
           <span
             onClick={() => setLogin(!login)}
             className="cursor-pointer underline hover:text-blue-500"
           >
             {login ? "Create" : "Login"}
           </span>
         </p>

         <button
           disabled={isDisabled}
           type="submit"
           className={`w-full mt-4 px-4 py-2 rounded-md text-white transition
          ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`}
         >
           {isDisabled ? "Please Wait..." : login ? "Login" : "Create Account"}
         </button>
       </div>
     </form>
   );
 };

 export default SignUP;
