import AccountInfo from "./components/AccountInfo";
import AppFeatures from "./components/AppFeatures";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PaymentCards from "./components/PaymentCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AppFeatures />
      <AccountInfo />
      <PaymentCards />
    </>
  );
}

export default App;
