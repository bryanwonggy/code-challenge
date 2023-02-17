import { ethers } from "ethers";

// Define the contract ABI
const ABI = [
  "function balanceOf(address) view returns (uint256)"
];

// Define the contract address and provider
const tokenAddress: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org");

// Define the list of addresses to retrieve
const addresses: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];

// Define the token values (in wei)
const swthValue = ethers.utils.parseUnits("1", 9); // 1 $SWTH

// Connect to the contract using the ABI and provider
const swthContract = new ethers.Contract(tokenAddress, ABI, provider);

// Retrieve the token balances for each address
async function retrieveBalances() {
  for (const address of addresses) {
    const balance: BigInt = await swthContract.balanceOf(address);
    const formattedBalance = ethers.utils.formatUnits(balance, swthValue);
    console.log(`${address} ${formattedBalance}`);
  }
}

retrieveBalances();
