import React, { useState, useEffect } from "react";
import ReactJson from 'react-json-view'
import CheckBalance from "./components/checkBalance";
import TransactionDetails from "./components/transactionDetails";
import CreateAccount from "./components/createAccount";
import { getBlockData } from "./functions/blockData";


function App() {
	const [blockDetails, setBlockDetails] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data =await getBlockData()
			console.log(data);
			setBlockDetails(data)
		  }; 
		  getData()
	}, [])

	return (
		<div className="App">
			<CreateAccount />
			<ReactJson theme='tomorrow' src={blockDetails} />
			<CheckBalance />
			<TransactionDetails />
		</div>
	);
}

export default App;
