import Head from "next/head";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // ENS
  const [ens, setENS] = useState("");
  // save the address of the currently connected account
  const [address, setAddress] = useState("");
  // create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  return (
    <div>
      
    </div>
  )
}
