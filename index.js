import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
import { abi } from "./constants";
const connectBtn = document.querySelector(".connect-btn");
connectBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await connect();
});
const fundBtn = document.querySelector(".fund-btn");
fundBtn.addEventListener("click", async (e) => {
  await fund();
});
async function connect() {
  if (typeof window.ethereum != undefined) {
    console.log("Metamask present...");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectBtn.innerHTML = "Connected";
    console.log(ethers);
  } else {
    console.log("Metamask absent...");
    connectBtn.innerHTML = "Connect Metamask";
  }
}
async function fund(ethAmount) {
  if (typeof window.ethereum != undefined) {
    //Steps
    // Provider/ Connection to the blockchain
    // Signer/ Wallet
    // Contact we want to interact
    // ABI & Address
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // return signer wallet
    const signer = provider.getSigner();
    console.log(signer);
  }
}
