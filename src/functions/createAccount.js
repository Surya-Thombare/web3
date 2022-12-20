import {web3Connect} from "./web3connect";

export const createAccount = () => {
    web3Connect.eth.accounts.create()
}