import React, { useState, useEffect, useRef } from "react";

import { web3Connect } from "./web3connect";

function CheckBalance() {
  const [balance, setBalanace] = useState();
  const [address, setAddress] = useState();

  const getBalance = async () => {
    let myBal = await web3Connect.eth.getBalance(address);
    console.log(myBal);
    setBalanace(myBal)
  };

  const getAddress = (e) => {
    e.preventDefault()
    setAddress(e.target.add.value);
  }

  useEffect(() => {
    getBalance()
  }, [address])
  

  return (
    <div>
      <h3>checkBalance</h3>
      <form onSubmit={(e) => getAddress(e)}>
        <input type="text" placeholder="Enter your address" name='add' />
        <button type="submit">getBalance</button>
      </form>
      <div>Your balanace is : {balance}</div>
    </div>
  );
}

export default CheckBalance;
