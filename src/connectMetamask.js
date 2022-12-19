import React, {useState, useEffect} from "react";
import Cred from "./creds.json";
import Web3 from "web3";

const ConnectMetamask = () => {
  const [accounts, setAccounts] = useState([]);

  const connectWallet = async () => {
    let web3 = new Web3(Web3.givenProvider || Cred.NodeUrl);
    const Accounts = await web3.eth.requestAccounts();
    setAccounts(Accounts);
  };


  return (
    <div>
      <h3></h3>
      <button onClick={() => connectWallet()}>connect Wallet</button>
      <div>Account address : {accounts}</div>
    </div>
  );
};

export default ConnectMetamask;
