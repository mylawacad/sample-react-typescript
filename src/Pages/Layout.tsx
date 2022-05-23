import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./Header";
import HomePage from "../Pages/Home/HomePage";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default Layout;
