import React, { useState } from 'react'
import Alert from '../../components/alert/alert'
import CardHeader from '../../components/cardHeader/cardHeader'
import CardHolder from '../../components/cardHolder/cardHolder'
import CreditCard from '../../components/creditCard/creditCard'
import UserCard from '../../components/userCard/userCard'
import Layout from '../../HOC/layout/layout'
import './cards.css'

const Cards = () => {
  const [count, setCount] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [card, setCard] = useState(false);
  const renderPage = () => {
    switch (count) {
      case 0:
        return (
          <Layout type="first">
            <CardHeader />
            <div className="card-body">
              <CardHolder
                action={() => {
                  setCount(count + 1)
                }}
              />
              <CreditCard />
            </div>
            {card ? (
              <Alert
                overlay={overlay}
                title="Delete Card"
                action={() => {
                  setOverlay(false)
                }}
                simple="simple"
                question="Are you sure you want to disable this card ?"
                buttonText="Delete Card"
                type="delete"
              />
            ) : null}
          </Layout>
        )
      case 1:
        return (
          <UserCard
            deleteAction={() => {
              setOverlay(true)
              setCard(true)
              setCount(count - 1)
            }}
            action={() => {
              setCount(count - 1)
            }}
          />
        )

      default:
        return (
          <Layout type="first">
            <CardHeader />
            <div className="card-body">
              <CardHolder />
              <CreditCard />
            </div>
          </Layout>
        )
    }
<<<<<<< HEAD
  };
  return renderPage();
};
=======
  }
  return renderForm()
}
>>>>>>> 48ed322f731580c2824a45bab81ac3bf17117fa2

export default Cards
