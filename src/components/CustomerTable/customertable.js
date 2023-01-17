import React from 'react'
import AdminTable from '../adminTable/adminTable'
import DashboardContainer from '../dashboardContainer/dashboardContainer'
import './customertable.css'

const Customertable = ({ page, action }) => {
  const table = [
    {
      first: 'KYC 1',
      second: '23,933',
      third: '23,933',
      fourth: '23,933',
    },
    {
      first: 'KYC 1',
      second: '23,933',
      third: '23,933',
      fourth: '23,933',
    },
    {
      first: 'KYC 1',
      second: '23,933',
      third: '23,933',
      fourth: '23,933',
    },
    {
      first: 'KYC 1',
      second: '23,933',
      third: '23,933',
      fourth: '23,933',
    },
  ]
  return (
    <div className="customer-table">
      <DashboardContainer>
        <div className="dashboard-category">
          <div className="dashboard-top">
            <h2>Customer</h2>
            <div
              className={page === 'manageCustomer' ? 'customer-form' : 'days'}
            >
              <form className="dashboard-form">
                {page === 'manageCustomer' ? (
                  <svg
                    className="dashboard-search-svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z"
                      fill="#292D32"
                    />
                  </svg>
                ) : null}
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Search users by name or email"
                />
              </form>
            </div>
          </div>
        </div>
        <AdminTable
          type="head"
          first="Name"
          second="Email"
          third="Phone"
          fourth="Date Joined"
        />
        {table?.map((item, index) => {
          return (
            <div className="adminTable-table" onClick={action}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 39.9942C31.0457 39.9942 40 31.2598 40 20.4854C40 9.71095 31.0457 0.976562 20 0.976562C8.9543 0.976562 0 9.71095 0 20.4854C0 31.2598 8.9543 39.9942 20 39.9942Z"
                  fill="#F2FCF5"
                />
                <path
                  d="M20 10.5938C15.86 10.5938 12.5 13.8712 12.5 17.9096C12.5 21.8698 15.68 25.0888 19.9 25.2058C19.96 25.2058 20.04 25.2058 20.08 25.2058C20.12 25.2058 20.18 25.2058 20.22 25.2058C20.24 25.2058 20.26 25.2058 20.26 25.2058C24.3 25.0693 27.48 21.8698 27.5 17.9096C27.5 13.8712 24.14 10.5938 20 10.5938Z"
                  fill="#34C759"
                />
                <path
                  d="M33.5575 34.8295C29.9975 38.0289 25.2375 39.9993 19.9975 39.9993C14.7575 39.9993 9.9975 38.0289 6.4375 34.8295C6.9175 33.0542 8.2175 31.435 10.1175 30.1864C15.5775 26.6358 24.4575 26.6358 29.8775 30.1864C31.7975 31.435 33.0775 33.0542 33.5575 34.8295Z"
                  fill="#34C759"
                />
              </svg>
              <AdminTable
                key={index}
                type="body"
                first={item.first}
                second={item.second}
                third={item.third}
                fourth={item.fourth}
                fifth={item.fifth}
              />
            </div>
          )
        })}
      </DashboardContainer>
    </div>
  )
}

export default Customertable
