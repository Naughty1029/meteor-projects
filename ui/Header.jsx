import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { RoutePaths } from './RoutePaths';

export const Header = () => {
    const navigate = useNavigate();
    const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
    console.log(isLoadingLoggedUser);
    console.log(loggedUser);

    return (
        <header className="bg-indigo-600">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex justify-between flex-grow items-center">
                        <div>
                            <a className='cursor-pointer' onClick={()=> navigate(RoutePaths.HOME)}>
                                <span className="sr-only">Meteor Wallet</span>
                                <img
                                    className="h-10 w-auto"
                                    src="/images/logo.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            {isLoadingLoggedUser || !loggedUser && (
                                <button 
                                className='cursor-pointer text-white'
                                onClick={()=> navigate(RoutePaths.ACCESS)}>Sign Up</button>
                            )}
                            {isLoadingLoggedUser || loggedUser && (
                                <button 
                                className='cursor-pointer text-white'
                                onClick={()=> Meteor.logout()}>Log out</button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}