import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" className='glow-on-hover'>Sign In</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton className='glow-on-hover' href="#" onClick={switchToSignup}>Sign Up</SubmitButton>
    </BoxContainer>
  );
}
