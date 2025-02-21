import { useState } from "react";

function LoginDetails() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="!mt-8 flex justify-center items-center h-[100dvh]">
      <form
        action=""
        method="get"
        className="!px-10 !py-10 border rounded-2xl shadow-2xl flex gap-4 flex-col"
      >
        <div className="flex justify-between items-center">
          <label htmlFor="">First Name: </label>
          <input
            type="text"
            name=""
            className="!p-2 !ml-4 rounded"
            value="Sameer"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Last Name: </label>
          <input
            type="text"
            name=""
            className="!p-2 !ml-4 rounded"
            value="Verma"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Email Address: </label>
          <input
            type="email"
            name=""
            className="!p-2 !ml-4 rounded"
            value="example@gmail.com"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Mobile No: </label>
          <input
            type="number"
            name=""
            className="!p-2 !ml-4 rounded"
            value="9988776655"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Password: </label>
          <div className="flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              className="!p-2 !ml-4 rounded"
              value="password"
              required
            />
            <div
              onClick={togglePasswordVisibility}
              className="ml-2 absolute right-2 cursor-pointer"
            >
              {showPassword ? (
                <span role="img" aria-label="Hide password">
                  👁️
                </span>
              ) : (
                <span role="img" aria-label="Show password">
                  👁️‍🗨️
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Confirm-Password: </label>
          <div className="flex items-center relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name=""
              className="!p-2 !ml-4 rounded"
              value="password"
              required
            />
            <div
              onClick={toggleConfirmPasswordVisibility}
              className="ml-2 absolute right-2 cursor-pointer"
            >
              {showConfirmPassword ? (
                <span role="img" aria-label="Hide password">
                  👁️
                </span>
              ) : (
                <span role="img" aria-label="Show password">
                  👁️‍🗨️
                </span>
              )}
            </div>
          </div>
        </div>
        <button className="!mt-4">Update Account</button>
      </form>
    </div>
  );
}

export default LoginDetails;
