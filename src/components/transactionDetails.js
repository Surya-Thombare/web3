import React, { useState, useEffect, useRef } from "react";
import ReactJson from 'react-json-view'
import { gettransaction } from "../functions/transaction";

function TransactionDetails() {
  const [transaction, setTransaction] = useState();
  const [TransactionAddress, setTransactionAddress] = useState();

  const getTransactionAddress = (e) => {
    e.preventDefault()
    setTransactionAddress(e.target.add.value);
  }

  useEffect(() => {
    const getData = async () => {
      const data =await gettransaction(TransactionAddress)
      console.log(data);
      setTransaction(data)
    }; 
    getData()
  }, [TransactionAddress])
  

  return (
    <div>
      <h3>checktransaction</h3>
      <form onSubmit={(e) => getTransactionAddress(e)}>
        <input type="text" placeholder="Enter your transaction address" name='add' />
        <button type="submit">get transaction details</button>
      </form>
      <div>Your balanace is : {transaction ? <ReactJson theme='tomorrow' src={transaction} /> : <></>}</div>
    </div>
  );
}

export default TransactionDetails;
