import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { hidenav } from '../store/slices/sideNavSlice'

const PageNotFound = () => {
    const navigate = useNavigate()
    useEffect(()=>{
navigate(hidenav())
    },[])
    return (
        <Layout>

        <div style={{height:'400px', display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>Page not found</h1>
        </div>
        </Layout>
    )
}

export default PageNotFound
