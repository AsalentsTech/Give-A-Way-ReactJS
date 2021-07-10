import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="username" placeholder="Username" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Input type="password" name="confirmpassword" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" className='glow-on-hover'>Sign Up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" onClick={switchToSignin} className='glow-on-hover'>Sign In</SubmitButton>
    </BoxContainer>
  );
}
