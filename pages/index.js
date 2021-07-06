import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Welcome to My Personal Web Site.</p>
      <p>Welcome to My Personal Web Site.</p>
      <Link href="/home">
        <a>See Gallery Listing</a>
      </Link>
    </div>
  );
}
