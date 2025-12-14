import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <>
            <h1>Opps! An Error Occured.</h1>
            <h3>{error.data}</h3>
        </>
    )
}

export default ErrorPage