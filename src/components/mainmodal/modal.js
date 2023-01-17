// import React, {useState} from 'react'
// import Modal from 'react-modal'
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '16px',
//     padding: '32px',
//   },
// }

// const modal = () => {
//   const [modalIsOpenDel, setIsOpenDel] = useState(false)
//   let subtitle

//   function openModal() {
//     setIsOpenDel(true)
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     // subtitle.style.color = '#f00'
//   }

//   function closeModal() {
//     setIsOpenDel(false)
//   }
//   return (
//     <Modal
//       isOpen={modalIsOpenDel}
//       onAfterOpen={afterOpenModal}
//       onRequestClose={closeModal}
//       style={customStyles}
//       contentLabel="Example Modal"
//     >
//       <div className="cuatomer-card-modal">
//         <div className="cuatomer-card-modal-flex">
//           <h2
//             ref={(_subtitle) => (subtitle = _subtitle)}
//             className="cuatomer-card-modal-h2"
//           >
//             Delete Account
//           </h2>
//           <div onClick={closeModal}>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9.16992 14.8319L14.8299 9.17188"
//                 stroke="#292D32"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M14.8299 14.8319L9.16992 9.17188"
//                 stroke="#292D32"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
//                 stroke="#292D32"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//         <p className="accountManagement-p">
//           Are you sure you want to delete this account ?
//         </p>
//         <div className="accountManagement-buttons-div">
//           <div className="accountManagement-buttons">
//             <button>Cancel</button>
//             <button>Delete Account</button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   )
// }

// export default modal
