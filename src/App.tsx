import Home from "./pages/Home";
import "./App.css";
import RegistrationPage from "./pages/Registration";
import NavBar from "./components/NavBar";
import Timeline from "./pages/Timeline";
import "react-tooltip/dist/react-tooltip.css";
import Footer from "./components/Footer";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Rewards />
      <Timeline />
      <RegistrationPage />
      <Footer />
    </>
  );
}

export default App;
