import React, { useState, useEffect } from "react";
import ReactJson from 'react-json-view'
import CheckBalance from "./components/checkBalance";
import TransactionDetails from "./components/transactionDetails";
import CreateAccount from "./components/createAccount";
import { getBlockData } from "./functions/blockData";
import { getNetwork } from "./functions/network";


function App() {
	const [blockDetails, setBlockDetails] = useState([])
	const [network, setNetwork] = useState()

	useEffect(() => {
		const getData = async () => {
			const data =await getBlockData()
			const network = await getNetwork()
			console.log(network);
			setBlockDetails(data)
			setNetwork(network)
		  }; 
		  getData()
	}, [])

	return (
		<div className="App">
			<h3>Netrok type: {network}</h3>
			<ReactJson theme='tomorrow' src={blockDetails} />
			<CreateAccount />
			<CheckBalance />
			<TransactionDetails />
		</div>
	);
}

export default App;
