import React from 'react';
import { AccountBox } from ".././components/accountBox";

const MyAccount = () => {

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
      }}
    >


  <AccountBox />

    </div>
  );
};

export default MyAccount;
