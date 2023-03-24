import Head from 'next/head';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Head>
          <title>JSSTACK Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
}
