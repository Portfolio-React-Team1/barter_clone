import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './login.css'
import Logo from '../../assets/images/logo.png'
// import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";

function Login() {

  const [formValid, setFormValid] = useState(false)
  const [form] = useState({
    name: "",
    email: "",
  });


  useEffect(() => {
    if (
      form.name !== "" &&
      form.email !== ""
    ) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [form])



  const submitHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem('userDetails', JSON.stringify({ ...form }));

    window.location = "/";
  };



  return (

    <div className="auth_signup">
      {/* <ToastContainer /> */}
      <div className="auth_signup-container" >
        <div className="account__head">

          <div className="account__head__logo">
            <img style={{ width: '130px', height: '30px' }} src={Logo} alt='Barter logo'></img>
          </div>
          <h1 >Login to your barter account</h1>
        </div>


        <div className="guard">

          <form onSubmit={submitHandler}>

            <div className="form__item">
              <label className="form__label form__label--2"> Email Address / Phone Number</label>
              <input autofucus="autofocus" type="text" className="form__input form__input--2" />
            </div>

            <div className="form__item mb-10">
              <label className="form__label form__label--2"> Enter Your Password</label>
              <input autofucus="autofocus" type="password" className="form__input form__input--2" />
            </div>


            <div style={{ display: "flex", alignItems: "flex-start" }}>

              <Link to="/Forgotpassword"><p className="already"> Forgot password?</p></Link>
            </div>
            <Link to='/' > <button
              className={formValid ? "auth_signup-active" : "auth_signup-submit"}
            >
              Log in

            </button>
            </Link>

            <div className="que">

              <div><p> Don't have an account? <Link className="already form__link--highlight" to="/signup"> Register </Link> </p> </div>

            </div>



          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;