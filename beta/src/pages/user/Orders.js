import React from 'react'
import Layout from '../../components/Layouts/Layout'
import UserMenu from '../../components/Layouts/UserMenu'

export default function Orders() {
  return (
    <Layout>
        <div className='container-flui p-3 m-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu></UserMenu>

                </div>
                <div className='col-md-9'>
                    <h1> Your Orders</h1>

                </div>

            </div>
        </div>
    </Layout>
  )
}