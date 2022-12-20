import {web3Connect} from "./web3connect";

export const getBlockData = async () => {
    let blockData = await web3Connect.eth.getBlockNumber().then(async blockNumber => {
    let bData = await web3Connect.eth.getBlock(blockNumber)
        return bData
    })
    return blockData
}