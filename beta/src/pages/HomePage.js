
import React from 'react'
import Layout from '../components/Layouts/Layout'
import { useAuth } from './context/auth.js'

function HomePage() {

  const [auth,setAuth] =useAuth()
  return (  

    <Layout>
        <div>HomePage</div>
        <pre  > {JSON.stringify(auth,null,4)}</pre>
    </Layout>
    
  )
}
 
export default HomePage
