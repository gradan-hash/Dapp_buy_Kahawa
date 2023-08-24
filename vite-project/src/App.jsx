import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "hardhat";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const initialize = async () => {
      // Check if Ethereum (Metamask) is available
      if (typeof window.ethereum !== "undefined") {
        const { ethereum } = window;

        // Request user accounts from Metamask
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.provider.Web3Provider(ethereum);
          
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      } else {
        console.error("Metamask not available.");
      }
    };

    // Replace with the actual contract address and ABI
    const contractaddress = "0xYourContractAddress";
    const contractABI = "yourContractABI"; // Make sure to replace this with your actual ABI

    initialize();
  }, []);

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
