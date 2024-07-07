// Creator Developer: Maria
// Date created:6 july 2024
// Decsription: Login component with api Integration

// Modifior Developer: Maria
// Date Modified:7 july 2024
// Modifications: Add reuseable component in it previously it was done without dummy components

import React, { useState } from "react";
import { login } from "../../../services/authApis/login";
import eyeIcon from "../../../assets/icons/_Tinted Icon Hide.svg";
import eyeSlashIcon from "../../../assets/icons/_Tinted Icon.svg";
import uncheckedIcon from "../../../assets/icons/Checked=False.svg";
import checkedIcon from "../../../assets/icons/Checked=True.svg";
import loginIllustration from "../../../assets/images/authentication/login.png";
import Button from "../../ui/Button";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import AuthScreenTemp from "../../ui/AuthScreenTemp";
import GoogleSSOButton from "../../common/GoogleSSOButton";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login({ username: userName, password });
      console.log(response);
      // if there wil be dashboard/homescreen that I would have directed it to that screen using react router dom.
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthScreenTemp
      mainHeading="Welcome back"
      subHeading="You need to be signed in to access the project dashboard."
      illustration={loginIllustration}
    >
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <Label htmlFor="userName" text={"Email or username"} />
          <Input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col relative">
          <Label htmlFor="password" text="Password" />
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-[60%] right-0 flex items-center px-3 focus:outline-none"
          >
            <img
              src={showPassword ? eyeSlashIcon : eyeIcon}
              alt={showPassword ? "Hide password" : "Show password"}
              className="w-4 h-4"
            />
          </button>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <img
              src={isChecked ? checkedIcon : uncheckedIcon}
              alt={isChecked ? "Checked" : "Unchecked"}
              className="w-5 h-5"
            />
            <span className="ml-2">Keep me signed in</span>
          </label>

          <a
            href="#"
            className="font-[500] text-[16px] leading-[24px] underline mt-5 md:mt-0"
          >
            Forgot password?
          </a>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <Button text="Sign In" type="submit" />
        <GoogleSSOButton />
        <div className="text-center text-sm mt-4">
          Haven't joined yet?{" "}
          <a
            href="#"
            className="font-[500] text-[16px] leading-[24px] underline"
          >
            Sign Up
          </a>
        </div>
      </form>
    </AuthScreenTemp>
  );
};

export default Login;
