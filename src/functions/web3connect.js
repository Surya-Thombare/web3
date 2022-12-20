
const cred = require("../creds")
const web3 = require("web3");

export const web3Connect = new web3(cred.NodeUrl); 