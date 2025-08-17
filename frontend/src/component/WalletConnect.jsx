// components/Wallet.jsx
import Web3 from "web3";
import ABI from "../pages/ABI.json"; // Adjust path based on your folder

const contractAddress = "0x6529da5Fda0E90dF512d33673ba41E15B414abc5";

export const connectWallet = async () => {
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const contract = new web3.eth.Contract(ABI, contractAddress);

      console.log("Connected Account:", accounts[0]);
      console.log("Contract Instance:", contract);

      return {
        account: accounts[0],
        contract,
        web3,
      };
    } else {
      alert("Please install MetaMask!");
      return null;
    }
  } catch (error) {
    console.error("Wallet connection error:", error);
    return null;
  }
};
