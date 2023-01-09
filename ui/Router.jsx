import React from 'react';
import { Route,Routes } from "react-router-dom";
import { Home } from './Home';
import { NotFound } from './NotFound';
import { RoutePaths } from './RoutePaths';
import { Access } from "./Access"
import { ForgotPassword } from './ForgotPassword';

export const Router = ()=> {
    return (
        <Routes>
            <Route path={RoutePaths.HOME} element={ <Home/> }/>
            <Route path={RoutePaths.ACCESS} element={ <Access /> }/>
            <Route path={RoutePaths.FORGOT_PASSWORD} element={ <ForgotPassword /> }/>
            <Route path='*' element={ <NotFound /> }/>
        </Routes>
    )
}