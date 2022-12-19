import React, { useState, useEffect, useRef } from "react";
import ReactJson from 'react-json-view'
import { web3Connect } from "./web3connect";

function TransactionDetails() {
  const [transaction, setTransaction] = useState();
  const [TransactionAddress, setTransactionAddress] = useState();

  const gettransaction = async (TransactionAddress) => {
    console.log(TransactionAddress);
    // Works
    // let mytransaction = await web3Connect.eth.getTransaction("0x1bdfc9a291918e4cc81735abf95b6165b1117ad619e7090315661abf20124b4b");
    // not working
    let mytransaction = await web3Connect.eth.getTransaction(TransactionAddress);
    console.log(mytransaction, 'mytransaction');
    setTransaction(mytransaction)
  };

  const getTransactionAddress = (e) => {
    e.preventDefault()
    console.log(e.target.add.value);
    setTransactionAddress(e.target.add.value);
  }

  useEffect(() => {
    gettransaction(TransactionAddress)
    console.log(TransactionAddress);
  }, [TransactionAddress])
  

  return (
    <div>
      <h3>checktransaction</h3>
      <form onSubmit={(e) => getTransactionAddress(e)}>
        <input type="text" placeholder="Enter your transaction address" name='add' />
        <button type="submit">get transaction details</button>
      </form>
      <div>Your balanace is : <ReactJson theme='tomorrow' src={transaction} /></div>
    </div>
  );
}

export default TransactionDetails;
