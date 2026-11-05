import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import PageBlog from '../pages/PageBlog'
import Mehsul from '../pages/Mehsul' // Faylın adını və importu düzəltdik
import ContactWithOfficeMap from '../pages/Contact'
import Sehife from '../pages/Sehife'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={ <Home /> } />
                    <Route path='/blog' element={ <PageBlog /> } />
                    <Route path='/mehsul' element={ <Mehsul /> } />
                    <Route path='/contact' element={ <ContactWithOfficeMap /> } />
                    <Route path='/sehife' element={ <Sehife /> } />
                </Route>
            </Routes>
        </>
    )
}

export default Router