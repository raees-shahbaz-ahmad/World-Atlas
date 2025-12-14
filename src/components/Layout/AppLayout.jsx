import React from 'react'
import Headers from '../UI/Headers.jsx'
import Footers from '../UI/Footers.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <Headers />
            <Outlet />
            <Footers />
        </>
    )
}

export default AppLayout