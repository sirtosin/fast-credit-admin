import React from 'react'
import './customerdetails.css'

const Customerdetails = () => {
  const table = [
    {
      title: 'First Name',
      name: 'Bolaji',
    },
    {
      title: 'Last Name',
      name: 'Oladele',
    },
    {
      title: 'Email Address',
      name: 'oladelebolaji@gmail.com',
    },
    {
      title: 'Phone Number',
      name: '+234 70697 59604',
    },
  ]
  return (
    <div className="customerdetails">
      <h1>Customer details</h1>
      <div className="customerdetails-details">
        {table?.map((item, index) => {
          return (
            <div className="customerdetails-details-inner">
              <div>
                <p>{item.title}</p>
                <p>{item.name}</p>
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Customerdetails
