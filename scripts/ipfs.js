var ethers = require('ethers');
var url = 'https://ropsten.infura.io/v3/d00f341268954cc79fe46df8c67d4aa0';
var provider = new ethers.providers.JsonRpcProvider(url);
var address  = '0x50985Ea7Eee069c8DBE0Ced93ac2627055Ad50Aa';
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