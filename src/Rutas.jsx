import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage'
import { SelectUserPage } from 'pages/SelectUserPage';
import { WaiterTableNumberPage } from 'pages/WaiterTableNumberPage';
import { WaiterMenuPage } from 'pages/WaiterMenuPage';
import { WaiterOrderCartPage } from 'pages/WaiterOrderCartPage';
import { OrderStatusPage } from 'pages/OrderStatusPage';



export function Rutas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<LoginPage/>}/>
                    <Route path="SelectUser" element={<SelectUserPage/>}/>
                    <Route path="TableNumber" element={<WaiterTableNumberPage/>}/>
                    <Route path="Menu" element={<WaiterMenuPage />}/>
                    <Route path="OrderCart" element={<WaiterOrderCartPage/>}/>
                    <Route path="OrderStatus" element={<OrderStatusPage/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}
