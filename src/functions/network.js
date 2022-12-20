import {web3Connect} from "./web3connect";

export const getBalance = async () => {
    let network = await web3Connect.eth.net.getNetworkType();
    console.log(network);
    return network
}