import {web3Connect} from "./web3connect";

export const gettransaction = async (TransactionAddress) => {
    let mytransaction = await web3Connect.eth.getTransaction(TransactionAddress);
    return mytransaction
  };