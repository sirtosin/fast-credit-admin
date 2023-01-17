import React, { useState } from 'react'
import DashboardSingle from '../dashboardSingle/dashboardSingle'
import './cardHeader.css'
import Wallet from '../../assets/walletCredit.svg'
import Disabled from '../../assets/disable.svg'
import WalletEntries from '../../assets/walletEntries.svg'
import CardPopup from '../cardPopup/cardPopup'

const CardHeader = () => {
  const [overlay, setOverlay] = useState(false)
  const [disable, setDisable] = useState(false)
  const [card, setCard] = useState(false)
  return (
    <div className="card-header-container">
      <div className="card-header-wrapper">
        <div className="card-header-single">
          <DashboardSingle
            title="Card Requests"
            amount="2,067,700"
            img={Wallet}
          />
        </div>
        <div className="card-header-single">
          <DashboardSingle
            title="Issued Cards"
            amount="2,067,700"
            img={Wallet}
          />
        </div>
      </div>
      <div className="card-manage">
        <div className="card-manage-single">
          <h2>Card Management</h2>
          <div className="manage-secure">
            <img src={Disabled} alt="disable" />
            <p
              onClick={() => {
                setOverlay(true)
                setCard(true)
              }}
            >
              Issuance Request
            </p>
          </div>
          <div className="manage-secure">
            <img src={WalletEntries} alt="disable" />
            <p
              onClick={() => {
                setOverlay(true)
                setDisable(true)
              }}
            >
              Disable Card
            </p>
          </div>
          <CardPopup
            action={() => {
              setCard(false)
              setOverlay(false)
            }}
            title="Issuance Requests"
            overlay={overlay}
            card={card}
          />
          <CardPopup
            action={() => {
              setDisable(false)
              setOverlay(false)
            }}
            title="Disable Card"
            disable={disable}
            overlay={overlay}
          />
        </div>
      </div>
    </div>
  )
}

export default CardHeader
