import React, { useState } from 'react'
import Accountmanagemment from '../../../components/accountmanagement/accountmanagemment'
import Complaints from '../../../components/complaints/complaints'
import Customertable from '../../../components/CustomerTable/customertable'
import CustomerCard from '../../../components/custommerCard/customerCard'
import Customerdetails from '../../../components/custommerdetails/customerdetails'
import DashboardSingle from '../../../components/dashboardSingle/dashboardSingle'
import RecentTransaction from '../../../components/recentTransactions/recentTransactions'
import Layout from '../../../HOC/layout/layout'
import './customer.css'
const Customer = () => {
  const [count, setCount] = useState(0)
  const renderForm = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <div className="custOmerTop">
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Registered Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Verified Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Non-Verified Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Active Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
            </div>
            <div>
              <Customertable
                action={() => {
                  setCount(count + 1)
                }}
                custommerSvg="customer"
                page="manageCustomer"
              />
            </div>
          </Layout>
        )
      case 1:
        return (
          <Layout>
            <div className="sections">
              <section className="sectionI">
                <CustomerCard />
                <Customerdetails />
                <Complaints />
              </section>
              <section className="sectipnII">
                <div className="sectionII-top">
                  <DashboardSingle
                    svg="present"
                    page="dashboard"
                    title="Balance"
                    img=""
                    amount="2,067,700"
                  />
                  <DashboardSingle
                    svg="present"
                    page="dashboard"
                    title="Transaction History"
                    img=""
                    amount="2,067,700"
                  />
                </div>
                <Accountmanagemment />
                <RecentTransaction />
              </section>
            </div>
          </Layout>
        )
      default:
        return (
          <Layout type="first">
            <div className="custOmerTop">
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Registered Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Verified Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Non-Verified Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
              <div className="customerTopChildren">
                <DashboardSingle
                  svg="present"
                  page="dashboard"
                  title="Active Customers"
                  img=""
                  amount="2,067,700"
                />
              </div>
            </div>
            <div>
              <Customertable custommerSvg="customer" page="manageCustomer" />
            </div>
          </Layout>
        )
    }
  }
  return renderForm()
}

export default Customer
