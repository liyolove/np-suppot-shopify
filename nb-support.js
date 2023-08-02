const urlParams = new URLSearchParams(window.location.search);
const TOKEN = urlParams.get('TOKEN');

const btnPopup = document.querySelector('body');
btnPopup.innerHTML = `
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgb(130, 106, 251);
    }
    .chat-worksuite {
      width: 125px;
      height: 45px;
      border-radius: 60px;
      position: fixed;
      bottom: 40px;
      right: 40px;
      background-color: rgb(10, 124, 255);
      background-repeat: no-repeat;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }
    .chat-worksuite span {
      font-size: 14px;
      margin-left: 5px;
      color: #fff;
    }
    .support-background {
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: none;
    }
    
    .support-modal {
      position: absolute;
      width: 30%;
      margin: 0 auto;
      background: #fff;
      padding: 30px 25px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .support-modal header {
      font-size: 1.5rem;
      color: #333;
      font-weight: 500;
      text-align: left;
    }
    .support-modal .form {
      margin-top: 20px;
    }
    .form .input-box {
      width: 100%;
      margin-top: 20px;
    }
    .input-box label {
      color: #000;
      font-size: 14px;
    }
    .input-box label span {
      color: red;
    }
    .form :where(.input-box input, .input-box textarea, .select-box) {
      position: relative;
      height: 40px;
      width: 100%;
      outline: none;
      font-size: 13px;
      color: #707070;
      margin-top: 8px;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 0 15px;
    }
    .form .input-box textarea {
      height: auto;
      padding: 10px 15px;
    }
    .input-box input:focus,
    .input-box textarea:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
    .form .column {
      display: flex;
      justify-content: left;
      column-gap: 20px;
    }
    .form .gender-box {
      margin-top: 20px;
    }
    .gender-box h3 {
      color: #333;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .form :where(.gender-option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 50px;
      flex-wrap: wrap;
    }
    .form .gender {
      column-gap: 5px;
    }
    .gender input {
      accent-color: rgb(130, 106, 251);
    }
    .form :where(.gender input, .gender label) {
      cursor: pointer;
    }
    .gender label {
      color: #707070;
    }
    .address :where(input, .select-box) {
      margin-top: 15px;
    }
    .textarea :where(textarea, .select-box) {
      display: block;
      margin-top: 15px;
      border-radius: 5px;
      width: 100%;
    }
    .select-box select {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      color: #707070;
      font-size: 1rem;
    }
    .form .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      margin-top: 40px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      background: #2d58af;
      border-radius: 5px;
      padding: 0 25px;
    }
    .form .btn.cancel {
      background-color: #fff;
      border: 1px solid #ddd;
      color: #000;
    }
    .form .btn.cancel:hover {
      color: #fff;
    }
    .form .btn:hover {
      background: rgb(88, 56, 250);
    }
    /*Responsive*/
    @media screen and (max-width: 500px) {
      .form .column {
        flex-wrap: wrap;
      }
      .form :where(.gender-option, .gender) {
        row-gap: 15px;
      }
    }
  </style>
  <div class='chat-worksuite'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 11.9125C0.75 5.6422 5.66254 1 12 1C18.3375 1 23.25 5.6422 23.25 11.9125C23.25 18.1828 18.3375 22.825 12 22.825C10.8617 22.825 9.76958 22.6746 8.74346 22.3925C8.544 22.3376 8.33188 22.3532 8.1426 22.4368L5.90964 23.4224C5.32554 23.6803 4.66618 23.2648 4.64661 22.6267L4.58535 20.6253C4.57781 20.3789 4.46689 20.1483 4.28312 19.9839C2.09415 18.0264 0.75 15.1923 0.75 11.9125ZM8.54913 9.86084L5.24444 15.1038C4.92731 15.6069 5.54578 16.1739 6.01957 15.8144L9.56934 13.1204C9.80947 12.9381 10.1413 12.9371 10.3824 13.118L13.0109 15.0893C13.7996 15.6809 14.9252 15.4732 15.451 14.6392L18.7556 9.39616C19.0727 8.893 18.4543 8.326 17.9805 8.68555L14.4307 11.3796C14.1906 11.5618 13.8587 11.5628 13.6176 11.3819L10.9892 9.41061C10.2005 8.81909 9.07479 9.02676 8.54913 9.86084Z" fill="white"></path></svg>
    <span>Help Desk</span>
  </div>
  <div class="support-background">
    <div class="support-modal">
      <header>Add Ticket</header>
      <form class="form">
        <div class="input-box">
          <label>Full Name <span>*</span></label>
          <input class="name-ws" type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email <span>*</span></label>
          <input class="email-ws" type="text" placeholder="Enter email address" required />
        </div>
        <div class="input-box">
          <label>Phone <span>*</span></label>
          <input class="phone-ws" type="number" placeholder="Enter phone number" required />
        </div>
        <div class="input-box textarea">
          <label>Messenger</label>
          <textarea class="mess-ws" rows="4" cols="50"></textarea>
        </div>
        <div class="column">
          <button class="btn">Submit</button>
          <div class="btn cancel">Cancel</div>
        </div>
      </form>
    </div>
  </div>
`;

const openBtn = document.querySelector('.chat-worksuite');
const modalBackground = document.querySelector('.support-background');
const closeBtn = document.querySelector('.cancel');
const formSubmit = document.querySelector('.form');

const inputName = document.querySelector('.name-ws');
const inputEmail = document.querySelector('.email-ws');
const inputPhone = document.querySelector('.phone-ws');
const inputMess = document.querySelector('.mess-ws');

if (openBtn) {
  openBtn.addEventListener('click', function () {
    modalBackground.style.display = 'block';
  });
  closeBtn.addEventListener('click', function () {
    modalBackground.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
    if (event.target === modalBackground) {
      modalBackground.style.display = 'none';
    }
  });

  formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      mess: inputMess.value
    }

    console.log(data, 'data')

    const REST_API_WORKSUITE_V3 = `https://erp.cloodo.com/api/v3`;
    const response = fetch(`${REST_API_WORKSUITE_V3}/tickets`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify(data)
    })
    response
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
