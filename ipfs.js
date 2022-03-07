var ethers = require('ethers');
var url = 'https://rinkeby.infura.io/v3/d00f341268954cc79fe46df8c67d4aa0';
var provider = new ethers.providers.JsonRpcProvider(url);
var address  = '0xD3375e8dce2C5E414881328F576568CF178ea705';
var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var contract = new ethers.Contract(address,abi,provider);

contract.getHash().then((result) =>{
  document.getElementById("btn").onclick = function () {
		location.href = "https://ipfs.io/ipfs/"+result;
  	};
});