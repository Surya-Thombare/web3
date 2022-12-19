import React, { useState, useEffect, useRef } from "react";
import { web3Connect } from "./web3connect";

const CreateAccount = () => {

    const createAccount = () => {
        web3Connect.eth.accounts.create()
    }

  return (
    <button onClick={createAccount()}>createAccount</button>
  )
}

export default CreateAccount