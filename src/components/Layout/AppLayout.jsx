import React from 'react'
import Headers from '../Ui/Headers'
import Footers from '../UI/Footers'
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