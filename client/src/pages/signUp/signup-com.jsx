import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../components/form-input/form-input.com";
import "./sign-up.sty.scss";
import CustomButton from "../../components/custom-button/custom-button.com";

import { signUpStart } from "../../redux/users/user.actions";

function SignUp({ signUpStart }) {
  const [userCredentials, setUserCredetials] = useState({
    displayName: "Waqas",
    email: "waqaskhanws2@gmail.com",
    password: "khankhan",
    confirmPassword: "khankhan",
  });

  const { displayName, password, confirmPassword, email } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("passowrd dont match");
      return;
    }

    await signUpStart(email, password, displayName);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUserCredetials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h1>SIGNUP</h1>
      <span>Sign up by providing the following details</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          handleChange={onChange}
          label="Display Name"
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={onChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={onChange}
          label="Password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          handleChange={onChange}
          label="Confirm Password"
        />
        <CustomButton type="submit" value="Signup">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});
export default connect(null, mapDispatchToProps)(SignUp);
