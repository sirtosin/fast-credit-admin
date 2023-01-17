import React from 'react'
import './adminTable.css'

const AdminTable = ({ first, second, third, fourth, fifth, type }) => {
  return (
    <div
      className={
        type === 'head' ? 'admin-table' : type === 'body' ? 'admin-body' : null
      }
    >
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>
      <p>{fourth}</p>
      <p className="total-table">{fifth}</p>
    </div>
  )
}

export default AdminTable
