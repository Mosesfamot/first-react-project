import React from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
    return (
      <section>
        <Header />
        <MainContent />
        <Footer />
      </section>
    )
}