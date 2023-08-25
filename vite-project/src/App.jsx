import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "ethers";
import abi from "./kahawa.json";
import { Web3Provider } from "@ethersproject/providers";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");

  useEffect(() => {
    const initialize = async () => {
      const contractaddress = "0xa64e3144835aF8781c750ceC432784a68d883266";
      const contractABI = abi.abi;

      // Check if Ethereum (Metamask) is available
      if (typeof window.ethereum !== "undefined") {
        const { ethereum } = window;

        // Request user accounts from Metamask
        try {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          setAccount(account);

          // const provider = new ethers.provider.Web3Provider(ethereum); //read blockchin

          const provider = new Web3Provider(ethereum);

          const signer = provider.getSigner(); //write blockchain...
          const contract = new ethers.Contract(
            contractaddress,
            contractABI,
            signer
          );
          console.log(contract);
          setState({ provider, signer, contract });
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      } else {
        console.error("Metamask not available.");
      }
    };

    initialize();
  }, []);

  return (
    <div>
      <h1>Hello Web3</h1>
    </div>
  );
}

export default App;
