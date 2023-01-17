import React from 'react'
import customerImage from '../../assets/profileImage.png'
import './customerCard.css'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '16px',
    padding: '32px',
  },
}

const CustomerCard = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="customer-card">
      <div className="cuatomer-card-image">
        <img src={customerImage} alt="customer card" />
        <div className="cuatomer-card-info">
          <h1>Bolaji Ololade</h1>
          <p>Joined August 13th, 2022</p>
        </div>
      </div>
      <div className="cuatomer-card-settings">
        <p>Account Verified</p>
        <p onClick={openModal}>Edit Profile</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cuatomer-card-modal">
          <div className="cuatomer-card-modal-flex">
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="cuatomer-card-modal-h2"
            >
              Upload Bank Statement
            </h2>
            <svg
              onClick={closeModal}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16992 14.8319L14.8299 9.17188"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 14.8319L9.16992 9.17188"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <form className="cuatomer-card-modal-form">
            <div>
              <label>First Name</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div>
              <label>Last Name</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div>
              <label>Email Address</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div>
              <input type="file" className="cuatomer-card-modal-file" />
            </div>
            <div className="cuatomer-card-modal-button">
              <button>Send Uploaded Statement</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default CustomerCard
