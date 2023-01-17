import React from 'react'
import './accountmanagement.css'
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
    width: '558px',
  },
}

const Accountmanagemment = () => {
  let subtitle
  const [modalIsOpenDel, setIsOpenDel] = React.useState(false)
  const [modalIsOpenDelFrc, setIsOpenDelFrc] = React.useState(false)
  const [modalIsOpenAuth, setIsOpenAuth] = React.useState(false)
  const [modalIsOpenAuthMeth, setIsOpenAuthMeth] = React.useState(false)

  // Auth MMethod Modal
  function openModalAuthMeth() {
    setIsOpenAuthMeth(true)
  }

  function afterOpenModalAuthMeth() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModalAuthMeth() {
    setIsOpenAuthMeth(false)
  }

  //Delete account modal

  function openModal() {
    setIsOpenDel(true)
  }

  //Auth modal controls

  function openModalAuth() {
    setIsOpenAuth(true)
  }

  function afterOpenModalAuth() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModalAuth() {
    setIsOpenAuth(false)
  }

  //Delete account modal

  function openModal() {
    setIsOpenDel(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpenDel(false)
  }

  //force delete modal controls

  function openModalForce() {
    setIsOpenDelFrc(true)
  }

  function afterOpenModalForce() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModalForce() {
    setIsOpenDelFrc(false)
  }
  return (
    <div className="accountmanagement">
      <h1>Account Management</h1>
      <div className="accountmanagement-upload">
        <div className="accountmanagement-left">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.985 17.6599C23.9743 17.6301 23.9578 17.6027 23.9364 17.5793C23.915 17.5558 23.8892 17.5369 23.8605 17.5235C23.8318 17.5101 23.8007 17.5026 23.769 17.5013C23.7373 17.4999 23.7057 17.5049 23.676 17.5159L21.84 18.1849V2.03987C21.84 0.911943 20.928 0 19.8 0H4.2C3.072 0 2.16 0.911943 2.16 2.03987V18.1849L0.321 17.5159C0.294 17.5069 0.267 17.5009 0.24 17.5009C0.108 17.5009 0 17.6089 0 17.7409V19.5288C0 19.6278 0.0630001 19.7178 0.159 19.7538L11.67 23.9415C11.883 24.0195 12.114 24.0195 12.327 23.9415L23.841 19.7568C23.937 19.7208 24 19.6308 24 19.5318V17.7439C24 17.7139 23.994 17.6869 23.985 17.6599ZM12 21.7636L3.75 18.9708V1.5H20.25V18.75L12 21.7636Z"
                fill="#029247"
              />
              <path
                d="M8.50391 15.5327V7.81931C8.50386 7.65538 8.55826 7.49607 8.65857 7.36641C8.75888 7.23676 8.89941 7.14409 9.0581 7.10297C9.21679 7.06184 9.38464 7.07459 9.5353 7.13921C9.68595 7.20383 9.81088 7.31667 9.89045 7.45999L14.1628 15.1508C14.2424 15.2941 14.3673 15.407 14.518 15.4716C14.6686 15.5362 14.8365 15.549 14.9952 15.5078C15.1539 15.4667 15.2944 15.374 15.3947 15.2444C15.495 15.1147 15.5494 14.9554 15.5494 14.7915V7.07812"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09375 9.89844H16.9574"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09375 12.7188H16.9574"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Upload Bank Statement</p>
          </div>
          <div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9998 23.1611C11.7598 23.1611 11.5199 23.1314 11.2899 23.0621C6.09986 21.6472 2.33984 16.8482 2.33984 11.6436V7.29977C2.33984 6.19156 3.14985 4.99434 4.18985 4.56887L9.75986 2.31284C11.2099 1.72905 12.7998 1.72905 14.2398 2.31284L19.8098 4.56887C20.8498 4.99434 21.6599 6.19156 21.6599 7.29977V11.6436C21.6599 16.8383 17.8898 21.6373 12.7098 23.0621C12.4798 23.1314 12.2398 23.1611 11.9998 23.1611ZM11.9998 3.37159C11.4298 3.37159 10.8698 3.48045 10.3298 3.69813L4.75986 5.9541C4.27986 6.15199 3.83984 6.79515 3.83984 7.30967V11.6535C3.83984 16.1952 7.13985 20.3906 11.6898 21.6373C11.8898 21.6967 12.1098 21.6967 12.3098 21.6373C16.8598 20.3906 20.1599 16.1952 20.1599 11.6535V7.30967C20.1599 6.79515 19.7198 6.15199 19.2398 5.9541L13.6699 3.69813C13.1299 3.48045 12.5698 3.37159 11.9998 3.37159Z"
                fill="#029247"
              />
              <path
                d="M12 13.7702C10.48 13.7702 9.25 12.5532 9.25 11.0492C9.25 9.54518 10.48 8.32812 12 8.32812C13.52 8.32812 14.75 9.54518 14.75 11.0492C14.75 12.5532 13.52 13.7702 12 13.7702ZM12 9.81234C11.31 9.81234 10.75 10.3664 10.75 11.0492C10.75 11.7319 11.31 12.286 12 12.286C12.69 12.286 13.25 11.7319 13.25 11.0492C13.25 10.3664 12.69 9.81234 12 9.81234Z"
                fill="#029247"
              />
              <path
                d="M12 16.7339C11.59 16.7339 11.25 16.3975 11.25 15.9918V13.0234C11.25 12.6177 11.59 12.2812 12 12.2812C12.41 12.2812 12.75 12.6177 12.75 13.0234V15.9918C12.75 16.3975 12.41 16.7339 12 16.7339Z"
                fill="#029247"
              />
            </svg>

            <p onClick={openModalAuthMeth}> Create Authentication Method</p>
            <Modal
              isOpen={modalIsOpenAuthMeth}
              onAfterOpen={afterOpenModalAuthMeth}
              onRequestClose={closeModalAuthMeth}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="cuatomer-card-modal">
                <div className="cuatomer-card-modal-flex">
                  <div>
                    <h2
                      ref={(_subtitle) => (subtitle = _subtitle)}
                      className="cuatomer-card-modal-h2"
                    >
                      Authentication Method
                    </h2>
                  </div>
                  <div onClick={closeModalAuthMeth}>
                    <svg
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
                </div>
                <div className="accountManagement-authentication">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10.25C21.59 10.25 21.25 9.91 21.25 9.5V7.5C21.25 4.92 19.58 3.25 17 3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H17C20.44 1.75 22.75 4.06 22.75 7.5V9.5C22.75 9.91 22.41 10.25 22 10.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M2 10.25C1.59 10.25 1.25 9.91 1.25 9.5V7.5C1.25 4.06 3.56 1.75 7 1.75H9C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25H7C4.42 3.25 2.75 4.92 2.75 7.5V9.5C2.75 9.91 2.41 10.25 2 10.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M17 23.25H15C14.59 23.25 14.25 22.91 14.25 22.5C14.25 22.09 14.59 21.75 15 21.75H17C19.58 21.75 21.25 20.08 21.25 17.5V15.5C21.25 15.09 21.59 14.75 22 14.75C22.41 14.75 22.75 15.09 22.75 15.5V17.5C22.75 20.94 20.44 23.25 17 23.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M9 23.25H7C3.56 23.25 1.25 20.94 1.25 17.5V15.5C1.25 15.09 1.59 14.75 2 14.75C2.41 14.75 2.75 15.09 2.75 15.5V17.5C2.75 20.08 4.42 21.75 7 21.75H9C9.41 21.75 9.75 22.09 9.75 22.5C9.75 22.91 9.41 23.25 9 23.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M11.9996 10.3711C11.5096 10.3711 11.0996 10.7711 11.0996 11.2711V13.7411C11.0996 14.2411 11.4996 14.6411 11.9996 14.6411C12.4996 14.6411 12.8996 14.2411 12.8996 13.7411V11.2711C12.8996 10.7711 12.4896 10.3711 11.9996 10.3711Z"
                      fill="#029247"
                    />
                    <path
                      d="M15.5298 7.89969C15.1898 7.55969 14.7998 7.26969 14.3798 7.02969C14.2398 6.95969 14.0898 6.88969 13.9398 6.81969C13.7898 6.75969 13.6398 6.69969 13.4798 6.65969C13.3198 6.60969 13.1598 6.56969 12.9998 6.52969C12.9898 6.52969 12.9698 6.52969 12.9598 6.51969C12.6498 6.45969 12.3298 6.42969 12.0098 6.42969H11.9898C11.6698 6.42969 11.3598 6.45969 11.0498 6.51969C11.0098 6.52969 10.9698 6.52969 10.9398 6.54969C10.7998 6.57969 10.6598 6.60969 10.5198 6.65969C10.3498 6.69969 10.1798 6.76969 10.0098 6.83969C9.87977 6.89969 9.74977 6.96969 9.62977 7.02969C9.47977 7.10969 9.34977 7.19969 9.20977 7.28969C8.94977 7.46969 8.69977 7.66969 8.46977 7.89969C8.35977 8.00969 8.24977 8.12969 8.14977 8.24969C8.04976 8.37969 7.94977 8.49969 7.85977 8.63969C7.76977 8.76969 7.68977 8.90969 7.60977 9.04969C7.22977 9.75969 7.00977 10.5697 7.00977 11.4297V13.5697C7.00977 15.2997 7.88977 16.8197 9.20977 17.7097C9.32977 17.7997 9.45977 17.8697 9.58977 17.9497L10.1398 18.2097C10.4198 18.3197 10.7098 18.4097 10.9998 18.4697C11.3198 18.5297 11.6498 18.5697 11.9898 18.5697C11.9998 18.5697 11.9998 18.5697 12.0098 18.5697C12.3498 18.5697 12.6798 18.5297 12.9998 18.4697C13.2998 18.4097 13.5898 18.3197 13.8698 18.2097C14.0598 18.1297 14.2398 18.0397 14.4098 17.9497C15.9498 17.0997 16.9898 15.4497 16.9898 13.5697V11.4297C16.9898 10.0497 16.4298 8.79969 15.5298 7.89969ZM14.3998 13.7397C14.3998 15.0597 13.3198 16.1397 11.9998 16.1397C10.6798 16.1397 9.59977 15.0597 9.59977 13.7397V11.2697C9.59977 9.94969 10.6798 8.86969 11.9998 8.86969C13.3198 8.86969 14.3998 9.94969 14.3998 11.2697V13.7397Z"
                      fill="#029247"
                    />
                  </svg>

                  <p>Biometrics</p>
                  <svg
                    width="40"
                    height="25"
                    viewBox="0 0 40 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2167_137985)">
                      <rect
                        y="0.5"
                        width="40"
                        height="24"
                        rx="12"
                        fill="#029247"
                      />
                      <g filter="url(#filter0_dd_2167_137985)">
                        <circle cx="28" cy="12.5" r="10" fill="white" />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_2167_137985"
                        x="-66"
                        y="-63.5"
                        width="188"
                        height="188"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="4"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow_2167_137985"
                        />
                        <feOffset dy="18" />
                        <feGaussianBlur stdDeviation="44" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.14 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2167_137985"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="6"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect2_dropShadow_2167_137985"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="14" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_2167_137985"
                          result="effect2_dropShadow_2167_137985"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_2167_137985"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_2167_137985">
                        <rect
                          y="0.5"
                          width="40"
                          height="24"
                          rx="12"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="accountManagement-authentication">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10.25C21.59 10.25 21.25 9.91 21.25 9.5V7.5C21.25 4.92 19.58 3.25 17 3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H17C20.44 1.75 22.75 4.06 22.75 7.5V9.5C22.75 9.91 22.41 10.25 22 10.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M2 10.25C1.59 10.25 1.25 9.91 1.25 9.5V7.5C1.25 4.06 3.56 1.75 7 1.75H9C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25H7C4.42 3.25 2.75 4.92 2.75 7.5V9.5C2.75 9.91 2.41 10.25 2 10.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M17 23.25H15C14.59 23.25 14.25 22.91 14.25 22.5C14.25 22.09 14.59 21.75 15 21.75H17C19.58 21.75 21.25 20.08 21.25 17.5V15.5C21.25 15.09 21.59 14.75 22 14.75C22.41 14.75 22.75 15.09 22.75 15.5V17.5C22.75 20.94 20.44 23.25 17 23.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M9 23.25H7C3.56 23.25 1.25 20.94 1.25 17.5V15.5C1.25 15.09 1.59 14.75 2 14.75C2.41 14.75 2.75 15.09 2.75 15.5V17.5C2.75 20.08 4.42 21.75 7 21.75H9C9.41 21.75 9.75 22.09 9.75 22.5C9.75 22.91 9.41 23.25 9 23.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M11.9996 10.3711C11.5096 10.3711 11.0996 10.7711 11.0996 11.2711V13.7411C11.0996 14.2411 11.4996 14.6411 11.9996 14.6411C12.4996 14.6411 12.8996 14.2411 12.8996 13.7411V11.2711C12.8996 10.7711 12.4896 10.3711 11.9996 10.3711Z"
                      fill="#029247"
                    />
                    <path
                      d="M15.5298 7.89969C15.1898 7.55969 14.7998 7.26969 14.3798 7.02969C14.2398 6.95969 14.0898 6.88969 13.9398 6.81969C13.7898 6.75969 13.6398 6.69969 13.4798 6.65969C13.3198 6.60969 13.1598 6.56969 12.9998 6.52969C12.9898 6.52969 12.9698 6.52969 12.9598 6.51969C12.6498 6.45969 12.3298 6.42969 12.0098 6.42969H11.9898C11.6698 6.42969 11.3598 6.45969 11.0498 6.51969C11.0098 6.52969 10.9698 6.52969 10.9398 6.54969C10.7998 6.57969 10.6598 6.60969 10.5198 6.65969C10.3498 6.69969 10.1798 6.76969 10.0098 6.83969C9.87977 6.89969 9.74977 6.96969 9.62977 7.02969C9.47977 7.10969 9.34977 7.19969 9.20977 7.28969C8.94977 7.46969 8.69977 7.66969 8.46977 7.89969C8.35977 8.00969 8.24977 8.12969 8.14977 8.24969C8.04976 8.37969 7.94977 8.49969 7.85977 8.63969C7.76977 8.76969 7.68977 8.90969 7.60977 9.04969C7.22977 9.75969 7.00977 10.5697 7.00977 11.4297V13.5697C7.00977 15.2997 7.88977 16.8197 9.20977 17.7097C9.32977 17.7997 9.45977 17.8697 9.58977 17.9497L10.1398 18.2097C10.4198 18.3197 10.7098 18.4097 10.9998 18.4697C11.3198 18.5297 11.6498 18.5697 11.9898 18.5697C11.9998 18.5697 11.9998 18.5697 12.0098 18.5697C12.3498 18.5697 12.6798 18.5297 12.9998 18.4697C13.2998 18.4097 13.5898 18.3197 13.8698 18.2097C14.0598 18.1297 14.2398 18.0397 14.4098 17.9497C15.9498 17.0997 16.9898 15.4497 16.9898 13.5697V11.4297C16.9898 10.0497 16.4298 8.79969 15.5298 7.89969ZM14.3998 13.7397C14.3998 15.0597 13.3198 16.1397 11.9998 16.1397C10.6798 16.1397 9.59977 15.0597 9.59977 13.7397V11.2697C9.59977 9.94969 10.6798 8.86969 11.9998 8.86969C13.3198 8.86969 14.3998 9.94969 14.3998 11.2697V13.7397Z"
                      fill="#029247"
                    />
                  </svg>

                  <p>Face Id</p>
                  <svg
                    width="40"
                    height="25"
                    viewBox="0 0 40 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2167_137985)">
                      <rect
                        y="0.5"
                        width="40"
                        height="24"
                        rx="12"
                        fill="#029247"
                      />
                      <g filter="url(#filter0_dd_2167_137985)">
                        <circle cx="28" cy="12.5" r="10" fill="white" />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_2167_137985"
                        x="-66"
                        y="-63.5"
                        width="188"
                        height="188"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="4"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow_2167_137985"
                        />
                        <feOffset dy="18" />
                        <feGaussianBlur stdDeviation="44" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.14 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2167_137985"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="6"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect2_dropShadow_2167_137985"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="14" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_2167_137985"
                          result="effect2_dropShadow_2167_137985"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_2167_137985"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_2167_137985">
                        <rect
                          y="0.5"
                          width="40"
                          height="24"
                          rx="12"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="accountManagement-authentication">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10.25C21.59 10.25 21.25 9.91 21.25 9.5V7.5C21.25 4.92 19.58 3.25 17 3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H17C20.44 1.75 22.75 4.06 22.75 7.5V9.5C22.75 9.91 22.41 10.25 22 10.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M2 10.25C1.59 10.25 1.25 9.91 1.25 9.5V7.5C1.25 4.06 3.56 1.75 7 1.75H9C9.41 1.75 9.75 2.09 9.75 2.5C9.75 2.91 9.41 3.25 9 3.25H7C4.42 3.25 2.75 4.92 2.75 7.5V9.5C2.75 9.91 2.41 10.25 2 10.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M17 23.25H15C14.59 23.25 14.25 22.91 14.25 22.5C14.25 22.09 14.59 21.75 15 21.75H17C19.58 21.75 21.25 20.08 21.25 17.5V15.5C21.25 15.09 21.59 14.75 22 14.75C22.41 14.75 22.75 15.09 22.75 15.5V17.5C22.75 20.94 20.44 23.25 17 23.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M9 23.25H7C3.56 23.25 1.25 20.94 1.25 17.5V15.5C1.25 15.09 1.59 14.75 2 14.75C2.41 14.75 2.75 15.09 2.75 15.5V17.5C2.75 20.08 4.42 21.75 7 21.75H9C9.41 21.75 9.75 22.09 9.75 22.5C9.75 22.91 9.41 23.25 9 23.25Z"
                      fill="#029247"
                    />
                    <path
                      d="M11.9996 10.3711C11.5096 10.3711 11.0996 10.7711 11.0996 11.2711V13.7411C11.0996 14.2411 11.4996 14.6411 11.9996 14.6411C12.4996 14.6411 12.8996 14.2411 12.8996 13.7411V11.2711C12.8996 10.7711 12.4896 10.3711 11.9996 10.3711Z"
                      fill="#029247"
                    />
                    <path
                      d="M15.5298 7.89969C15.1898 7.55969 14.7998 7.26969 14.3798 7.02969C14.2398 6.95969 14.0898 6.88969 13.9398 6.81969C13.7898 6.75969 13.6398 6.69969 13.4798 6.65969C13.3198 6.60969 13.1598 6.56969 12.9998 6.52969C12.9898 6.52969 12.9698 6.52969 12.9598 6.51969C12.6498 6.45969 12.3298 6.42969 12.0098 6.42969H11.9898C11.6698 6.42969 11.3598 6.45969 11.0498 6.51969C11.0098 6.52969 10.9698 6.52969 10.9398 6.54969C10.7998 6.57969 10.6598 6.60969 10.5198 6.65969C10.3498 6.69969 10.1798 6.76969 10.0098 6.83969C9.87977 6.89969 9.74977 6.96969 9.62977 7.02969C9.47977 7.10969 9.34977 7.19969 9.20977 7.28969C8.94977 7.46969 8.69977 7.66969 8.46977 7.89969C8.35977 8.00969 8.24977 8.12969 8.14977 8.24969C8.04976 8.37969 7.94977 8.49969 7.85977 8.63969C7.76977 8.76969 7.68977 8.90969 7.60977 9.04969C7.22977 9.75969 7.00977 10.5697 7.00977 11.4297V13.5697C7.00977 15.2997 7.88977 16.8197 9.20977 17.7097C9.32977 17.7997 9.45977 17.8697 9.58977 17.9497L10.1398 18.2097C10.4198 18.3197 10.7098 18.4097 10.9998 18.4697C11.3198 18.5297 11.6498 18.5697 11.9898 18.5697C11.9998 18.5697 11.9998 18.5697 12.0098 18.5697C12.3498 18.5697 12.6798 18.5297 12.9998 18.4697C13.2998 18.4097 13.5898 18.3197 13.8698 18.2097C14.0598 18.1297 14.2398 18.0397 14.4098 17.9497C15.9498 17.0997 16.9898 15.4497 16.9898 13.5697V11.4297C16.9898 10.0497 16.4298 8.79969 15.5298 7.89969ZM14.3998 13.7397C14.3998 15.0597 13.3198 16.1397 11.9998 16.1397C10.6798 16.1397 9.59977 15.0597 9.59977 13.7397V11.2697C9.59977 9.94969 10.6798 8.86969 11.9998 8.86969C13.3198 8.86969 14.3998 9.94969 14.3998 11.2697V13.7397Z"
                      fill="#029247"
                    />
                  </svg>

                  <p>Password</p>
                  <svg
                    width="40"
                    height="25"
                    viewBox="0 0 40 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2167_137985)">
                      <rect
                        y="0.5"
                        width="40"
                        height="24"
                        rx="12"
                        fill="#029247"
                      />
                      <g filter="url(#filter0_dd_2167_137985)">
                        <circle cx="28" cy="12.5" r="10" fill="white" />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_2167_137985"
                        x="-66"
                        y="-63.5"
                        width="188"
                        height="188"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="4"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow_2167_137985"
                        />
                        <feOffset dy="18" />
                        <feGaussianBlur stdDeviation="44" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.14 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2167_137985"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="6"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect2_dropShadow_2167_137985"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="14" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_2167_137985"
                          result="effect2_dropShadow_2167_137985"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_2167_137985"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_2167_137985">
                        <rect
                          y="0.5"
                          width="40"
                          height="24"
                          rx="12"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="accountManagement-buttons-div">
                  <div>
                    <button className="accountManagement-buttons-confirm">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.985 17.6599C23.9743 17.6301 23.9578 17.6027 23.9364 17.5793C23.915 17.5558 23.8892 17.5369 23.8605 17.5235C23.8318 17.5101 23.8007 17.5026 23.769 17.5013C23.7373 17.4999 23.7057 17.5049 23.676 17.5159L21.84 18.1849V2.03987C21.84 0.911943 20.928 0 19.8 0H4.2C3.072 0 2.16 0.911943 2.16 2.03987V18.1849L0.321 17.5159C0.294 17.5069 0.267 17.5009 0.24 17.5009C0.108 17.5009 0 17.6089 0 17.7409V19.5288C0 19.6278 0.0630001 19.7178 0.159 19.7538L11.67 23.9415C11.883 24.0195 12.114 24.0195 12.327 23.9415L23.841 19.7568C23.937 19.7208 24 19.6308 24 19.5318V17.7439C24 17.7139 23.994 17.6869 23.985 17.6599ZM12 21.7636L3.75 18.9708V1.5H20.25V18.75L12 21.7636Z"
                fill="#029247"
              />
              <path
                d="M8.50391 15.5327V7.81931C8.50386 7.65538 8.55826 7.49607 8.65857 7.36641C8.75888 7.23676 8.89941 7.14409 9.0581 7.10297C9.21679 7.06184 9.38464 7.07459 9.5353 7.13921C9.68595 7.20383 9.81088 7.31667 9.89045 7.45999L14.1628 15.1508C14.2424 15.2941 14.3673 15.407 14.518 15.4716C14.6686 15.5362 14.8365 15.549 14.9952 15.5078C15.1539 15.4667 15.2944 15.374 15.3947 15.2444C15.495 15.1147 15.5494 14.9554 15.5494 14.7915V7.07812"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09375 9.89844H16.9574"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09375 12.7188H16.9574"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>View Statement</p>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.985 17.6599C23.9743 17.6301 23.9578 17.6027 23.9364 17.5793C23.915 17.5558 23.8892 17.5369 23.8605 17.5235C23.8318 17.5101 23.8007 17.5026 23.769 17.5013C23.7373 17.4999 23.7057 17.5049 23.676 17.5159L21.84 18.1849V2.03987C21.84 0.911943 20.928 0 19.8 0H4.2C3.072 0 2.16 0.911943 2.16 2.03987V18.1849L0.321 17.5159C0.294 17.5069 0.267 17.5009 0.24 17.5009C0.108 17.5009 0 17.6089 0 17.7409V19.5288C0 19.6278 0.0630001 19.7178 0.159 19.7538L11.67 23.9415C11.883 24.0195 12.114 24.0195 12.327 23.9415L23.841 19.7568C23.937 19.7208 24 19.6308 24 19.5318V17.7439C24 17.7139 23.994 17.6869 23.985 17.6599ZM12 21.7636L3.75 18.9708V1.5H20.25V18.75L12 21.7636Z"
                fill="#029247"
              />
              <path
                d="M8.50391 15.5327V7.81931C8.50386 7.65538 8.55826 7.49607 8.65857 7.36641C8.75888 7.23676 8.89941 7.14409 9.0581 7.10297C9.21679 7.06184 9.38464 7.07459 9.5353 7.13921C9.68595 7.20383 9.81088 7.31667 9.89045 7.45999L14.1628 15.1508C14.2424 15.2941 14.3673 15.407 14.518 15.4716C14.6686 15.5362 14.8365 15.549 14.9952 15.5078C15.1539 15.4667 15.2944 15.374 15.3947 15.2444C15.495 15.1147 15.5494 14.9554 15.5494 14.7915V7.07812"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09375 9.89844H16.9574"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09375 12.7188H16.9574"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Process Loan</p>
          </div>
        </div>
        <hr />
        <div className="accountmanagement-right">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 1.99219V21.9922"
                stroke="#029247"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0961 12H11.1051"
                stroke="#029247"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.09607 12H7.10505"
                stroke="#029247"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Reset Password </p>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9998 22.6767C11.7598 22.6767 11.5199 22.647 11.2899 22.5778C6.09986 21.1628 2.33984 16.3638 2.33984 11.1592V6.81539C2.33984 5.70718 3.14985 4.50997 4.18985 4.0845L9.75986 1.82847C11.2099 1.24468 12.7998 1.24468 14.2398 1.82847L19.8098 4.0845C20.8498 4.50997 21.6599 5.70718 21.6599 6.81539V11.1592C21.6599 16.3539 17.8898 21.1529 12.7098 22.5778C12.4798 22.647 12.2398 22.6767 11.9998 22.6767ZM11.9998 2.88721C11.4298 2.88721 10.8698 2.99607 10.3298 3.21375L4.75986 5.46972C4.27986 5.66762 3.83984 6.31077 3.83984 6.8253V11.1691C3.83984 15.7108 7.13985 19.9062 11.6898 21.1529C11.8898 21.2123 12.1098 21.2123 12.3098 21.1529C16.8598 19.9062 20.1599 15.7108 20.1599 11.1691V6.8253C20.1599 6.31077 19.7198 5.66762 19.2398 5.46972L13.6699 3.21375C13.1299 2.99607 12.5698 2.88721 11.9998 2.88721Z"
                fill="#029247"
              />
              <path
                d="M13.4112 13.6861C13.2212 13.6861 13.0312 13.6169 12.8812 13.4684L10.0613 10.6781C9.77125 10.3912 9.77125 9.91622 10.0613 9.62927C10.3512 9.34233 10.8313 9.34233 11.1213 9.62927L13.9413 12.4196C14.2313 12.7065 14.2313 13.1815 13.9413 13.4684C13.7913 13.6169 13.6012 13.6861 13.4112 13.6861Z"
                fill="#029247"
              />
              <path
                d="M9.84266 12.944C9.84266 12.756 9.91265 12.568 10.0627 12.4196L12.8827 9.62927C13.1727 9.34233 13.6527 9.34233 13.9427 9.62927C14.2327 9.91622 14.2327 10.3912 13.9427 10.6781L11.1227 13.4684C10.8327 13.7554 10.3527 13.7554 10.0627 13.4684C9.91265 13.32 9.84266 13.132 9.84266 12.944Z"
                fill="#029247"
              />
            </svg>

            <p onClick={openModalAuth}>Delete Authentication Method</p>
            <Modal
              isOpen={modalIsOpenAuth}
              onAfterOpen={afterOpenModalAuth}
              onRequestClose={closeModalAuth}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="cuatomer-card-modal">
                <div className="cuatomer-card-modal-flex">
                  <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    className="cuatomer-card-modal-h2"
                  >
                    Delete Authentication
                  </h2>
                  <div onClick={closeModalAuth}>
                    <svg
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
                </div>
                <p className="accountManagement-p">
                  Are you sure you want to delete authentication of this account
                  ?
                </p>
                <div className="accountManagement-buttons-div">
                  <div className="accountManagement-buttons">
                    <button>Cancel</button>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
                fill="#029247"
              />
              <path
                d="M15.21 22.1903C15 22.1903 14.79 22.1603 14.58 22.1103C13.96 21.9403 13.44 21.5503 13.11 21.0003L12.99 20.8003C12.4 19.7803 11.59 19.7803 11 20.8003L10.89 20.9903C10.56 21.5503 10.04 21.9503 9.42 22.1103C8.79 22.2803 8.14 22.1903 7.59 21.8603L5.87 20.8703C5.26 20.5203 4.82 19.9503 4.63 19.2603C4.45 18.5703 4.54 17.8603 4.89 17.2503C5.18 16.7403 5.26 16.2803 5.09 15.9903C4.92 15.7003 4.49 15.5303 3.9 15.5303C2.44 15.5303 1.25 14.3403 1.25 12.8803V11.1203C1.25 9.66029 2.44 8.47029 3.9 8.47029C4.49 8.47029 4.92 8.30029 5.09 8.01029C5.26 7.72029 5.19 7.26029 4.89 6.75029C4.54 6.14029 4.45 5.42029 4.63 4.74029C4.81 4.05029 5.25 3.48029 5.87 3.13029L7.6 2.14029C8.73 1.47029 10.22 1.86029 10.9 3.01029L11.02 3.21029C11.61 4.23029 12.42 4.23029 13.01 3.21029L13.12 3.02029C13.8 1.86029 15.29 1.47029 16.43 2.15029L18.15 3.14029C18.76 3.49029 19.2 4.06029 19.39 4.75029C19.57 5.44029 19.48 6.15029 19.13 6.76029C18.84 7.27029 18.76 7.73029 18.93 8.02029C19.1 8.31029 19.53 8.48029 20.12 8.48029C21.58 8.48029 22.77 9.67029 22.77 11.1303V12.8903C22.77 14.3503 21.58 15.5403 20.12 15.5403C19.53 15.5403 19.1 15.7103 18.93 16.0003C18.76 16.2903 18.83 16.7503 19.13 17.2603C19.48 17.8703 19.58 18.5903 19.39 19.2703C19.21 19.9603 18.77 20.5303 18.15 20.8803L16.42 21.8703C16.04 22.0803 15.63 22.1903 15.21 22.1903ZM12 18.4903C12.89 18.4903 13.72 19.0503 14.29 20.0403L14.4 20.2303C14.52 20.4403 14.72 20.5903 14.96 20.6503C15.2 20.7103 15.44 20.6803 15.64 20.5603L17.37 19.5603C17.63 19.4103 17.83 19.1603 17.91 18.8603C17.99 18.5603 17.95 18.2503 17.8 17.9903C17.23 17.0103 17.16 16.0003 17.6 15.2303C18.04 14.4603 18.95 14.0203 20.09 14.0203C20.73 14.0203 21.24 13.5103 21.24 12.8703V11.1103C21.24 10.4803 20.73 9.96029 20.09 9.96029C18.95 9.96029 18.04 9.52029 17.6 8.75029C17.16 7.98029 17.23 6.97029 17.8 5.99029C17.95 5.73029 17.99 5.42029 17.91 5.12029C17.83 4.82029 17.64 4.58029 17.38 4.42029L15.65 3.43029C15.22 3.17029 14.65 3.32029 14.39 3.76029L14.28 3.95029C13.71 4.94029 12.88 5.50029 11.99 5.50029C11.1 5.50029 10.27 4.94029 9.7 3.95029L9.59 3.75029C9.34 3.33029 8.78 3.18029 8.35 3.43029L6.62 4.43029C6.36 4.58029 6.16 4.83029 6.08 5.13029C6 5.43029 6.04 5.74029 6.19 6.00029C6.76 6.98029 6.83 7.99029 6.39 8.76029C5.95 9.53029 5.04 9.97029 3.9 9.97029C3.26 9.97029 2.75 10.4803 2.75 11.1203V12.8803C2.75 13.5103 3.26 14.0303 3.9 14.0303C5.04 14.0303 5.95 14.4703 6.39 15.2403C6.83 16.0103 6.76 17.0203 6.19 18.0003C6.04 18.2603 6 18.5703 6.08 18.8703C6.16 19.1703 6.35 19.4103 6.61 19.5703L8.34 20.5603C8.55 20.6903 8.8 20.7203 9.03 20.6603C9.27 20.6003 9.47 20.4403 9.6 20.2303L9.71 20.0403C10.28 19.0603 11.11 18.4903 12 18.4903Z"
                fill="#029247"
              />
            </svg>

            <p onClick={openModalForce}>Force Sign-out</p>
            <Modal
              isOpen={modalIsOpenDelFrc}
              onAfterOpen={afterOpenModalForce}
              onRequestClose={closeModalForce}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="cuatomer-card-modal">
                <div className="cuatomer-card-modal-flex">
                  <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    className="cuatomer-card-modal-h2"
                  >
                    Force Sign-Out
                  </h2>
                  <div onClick={closeModalForce}>
                    <svg
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
                </div>
                <p className="accountManagement-p">
                  Are you sure you want to force sign out this account ?
                </p>
                <div className="accountManagement-buttons-div">
                  <div className="accountManagement-buttons">
                    <button>Cancel</button>
                    <button>Sign Out</button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div onClick={openModal}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4901 2.22469L5.50015 4.09468C4.35015 4.52468 3.41016 5.88467 3.41016 7.11467V14.5447C3.41016 15.7247 4.19017 17.2747 5.14017 17.9847L9.44016 21.1947C10.8502 22.2547 13.1701 22.2547 14.5801 21.1947L18.8802 17.9847C19.8302 17.2747 20.6101 15.7247 20.6101 14.5447V7.11467C20.6101 5.88467 19.6701 4.52468 18.5201 4.09468L13.5302 2.22469C12.6802 1.91469 11.3201 1.91469 10.4901 2.22469Z"
                stroke="#BD0A00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9997 10.9185C11.9597 10.9185 11.9097 10.9185 11.8697 10.9185C10.9297 10.8885 10.1797 10.1084 10.1797 9.15845C10.1797 8.18845 10.9697 7.39844 11.9397 7.39844C12.9097 7.39844 13.6997 8.18845 13.6997 9.15845C13.6897 10.1184 12.9397 10.8885 11.9997 10.9185Z"
                stroke="#BD0A00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0091 13.7194C9.04906 14.3594 9.04906 15.4094 10.0091 16.0494C11.0991 16.7794 12.8891 16.7794 13.9791 16.0494C14.9391 15.4094 14.9391 14.3594 13.9791 13.7194C12.8991 12.9894 11.1091 12.9894 10.0091 13.7194Z"
                stroke="#BD0A00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Delete Account</p>

            <Modal
              isOpen={modalIsOpenDel}
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
                    Delete Account
                  </h2>
                  <div onClick={closeModal}>
                    <svg
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
                </div>
                <p className="accountManagement-p">
                  Are you sure you want to delete this account ?
                </p>
                <div className="accountManagement-buttons-div">
                  <div className="accountManagement-buttons">
                    <button>Cancel</button>
                    <button>Delete Account</button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accountmanagemment
