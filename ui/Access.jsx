import React, { useState } from "react"
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths"

export const Access = ()=> {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isSignUp,setIsSignUp] = useState(true)

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

    const signIn = (e)=> {
        e.preventDefault();
        Meteor.loginWithPassword(email,password,(error)=>{
            if(error){
                console.log("Error SignIn")
                return
            }else{
                console.log("Success")
                navigate(RoutePaths.HOME);
            }
        })
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="px-3 py-2 font-medium">{isSignUp ? "Sign up": "Sign in"}</h3>
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
                    {isSignUp && 
                        <button
                        type="submit" 
                        onClick={signUp}
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Sign up
                        </button>
                    }
                    {!isSignUp && 
                        <button
                        type="submit" 
                        onClick={signIn}
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Sign in
                        </button>
                    }
                </div>

                <div className="py-3">
                    <a className="cursor-pointer text-indigo-800" 
                    onClick={()=> setIsSignUp(!isSignUp)}>
                        {isSignUp ? "if you you already have an account, click here" : "if you dont have an account, click here"}
                    </a>
                </div>

                <div className="py-3">
                    <a className="cursor-pointer text-indigo-800" 
                    onClick={()=> navigate(RoutePaths.FORGOT_PASSWORD)}>
                        forgot password?
                    </a>
                </div>
            </form>
        </div>
    )
}