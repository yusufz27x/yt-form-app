'use client'
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import FormHeader from "./components/FormHeader";
import SuccessNotification from "./components/SuccessNotification";
import UnsuccessNotification from "./components/UnsuccessfulNotification";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <FormHeader />
      {/* < SuccessNotification /> */}
      <UnsuccessNotification/>
      <Footer/>
    </main>
  );
}
