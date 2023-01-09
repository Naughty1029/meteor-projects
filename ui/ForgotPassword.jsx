import React, { useState } from "react"
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths"
import { useAlert } from 'meteor/quave:alert-react-tailwind';


export const ForgotPassword = ()=> {
    const { openAlert } = useAlert();
    const navigate = useNavigate();
    const [email,setEmail] = useState("");

    const forgotPassword =(e)=> {
        e.preventDefault();
        Accounts.forgotPassword({email},(error)=>{
            if(error){
                console.log("Error")
            }else{
                setEmail("")
                openAlert("Success you should receive email")
                navigate(RoutePaths.HOME);
            }
        })
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="px-3 py-2 font-medium">Forgot Password</h3>
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
                </div>
                <div className="px-2 py-3 text-right">
                    <button onClick={()=> navigate(RoutePaths.ACCESS)}
                    className=" border border-gray-800 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Back to Access
                    </button>
                    <button
                    type="submit" 
                    onClick={forgotPassword}
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    )
}