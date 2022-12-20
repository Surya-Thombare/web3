import {web3Connect} from "./web3connect";

export const getBalance = async (address) => {
    let myBal = await web3Connect.eth.getBalance(address);
    console.log(myBal);
    return myBal
}