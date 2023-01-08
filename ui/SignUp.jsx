import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths"

export const SignUp = ()=> {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signUp =(e)=> {
        e.preventDefault();
        Accounts.createUser({
            email,
            password
        },(error)=>{
            if(error){
                console.log("Error")
            }else{
                console.log("Success")
                navigate(RoutePaths.HOME);
            }
        })
    }
    return (
        <div className="flex flex-col items-center">
            <h3 className="px-3 py-2 font-medium">Sign up</h3>
            <form className="mt-6">
                <div className="flex flex-col">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
            
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="px-2 py-3 text-right">
                    <button onClick={()=> navigate(RoutePaths.HOME)}
                    className=" border border-gray-800 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Cancel
                    </button>
                    <button
                    type="submit" 
                    onClick={signUp}
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}