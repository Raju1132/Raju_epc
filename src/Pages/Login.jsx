import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Login.css";
import login1 from "../assets/login/Bike-No-Background.png";
import login2 from "../assets/login/login3.jpg";
import login3 from "../assets/login/png-transparent-honda-livo-bike.png";

function Login() {
  const [captcha, setCaptcha] = useState("AB12");
  const [userType, setUserType] = useState("retailer");
  const [forgotModel, setForgotModel] = useState(false); // Initially false for showing the login
  const [email, setEmail] = useState(""); // For storing the email input

  const handleForget = () => setForgotModel(true);
  const closeForgotModal = () => {
    setForgotModel(false);
    setEmail(""); // Clear email when closing
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Password reset link sent to ${email}`);
      closeForgotModal();
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForgotModal();
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative w-[100%] login-wrapper">
      <div className="login-container">
        {/* Left Side - Carousel */}
        <div className="login-left">
          <Slider {...sliderSettings} className="login-carousel">
            <div>
              <h1>Exclusive Honda Deals – Ride with Confidence!</h1>
              <img src={login1} alt="Slide 1" className="login-image" />
            </div>
            <div>
              <h1>Premium Bike Parts – Power Your Journey!</h1>
              <img src={login2} alt="Slide 2" className="login-image" />
            </div>
            <div>
              <h1>Unbeatable Prices – Gear Up & Save Big!</h1>
              <img src={login3} alt="Slide 3" className="login-image" />
            </div>
          </Slider>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-right">
          <div className="login-form-container">
            <h2 className="login-heading">Login to your account</h2>
            <form className="login-form">
              <label className="login-label">User Type</label>
              <select
                className="login-input"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="retailer">Retailer</option>
                <option value="distribution">Distribution</option>
                <option value="oem">OEM</option>
              </select>

              <label className="login-label">Username</label>
              <input
                type="text"
                className="login-input"
                placeholder="Enter username"
              />

              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                placeholder="Enter password"
              />

              <label className="login-label">Enter Captcha Code</label>
              <div className="login-captcha-container">
                <span className="login-captcha-code">{captcha}</span>
                <input
                  type="text"
                  className="login-input login-captcha-input"
                  placeholder="Enter captcha"
                />
              </div>

              <div className="login-options">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <div
                  onClick={handleForget}
                  href="#"
                  className="login-forgot-password"
                >
                  Forgot Password?
                </div>
              </div>

              <div className="login-buttons">
                <button type="submit" className="login-button login-submit">
                  Submit
                </button>
                <button type="reset" className="login-button login-reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModel && (
        <div
          className="fixed w-full h-full grid place-items-center z-50 bg-black/50 backdrop-blur-sm"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-lg shadow-xl w-[400px] max-w-[90%] relative animate-fadeIn m-4 h-72 !p-10 border border-[#c31c00]">
            {/* Close button */}
            <button
              onClick={closeForgotModal}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              X
            </button>

            <div className="!py-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Reset Password
              </h2>
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 !my-2">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    className="w-full !p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-4 !py-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
                  >
                    Reset Password
                  </button>
                  <button
                    type="button"
                    onClick={closeForgotModal}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
