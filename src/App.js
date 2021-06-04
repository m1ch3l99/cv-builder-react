import React, { useEffect } from "react";
import CvFormEditor from "./Components/CoreComponents/CvFormEditor";
import CvPreview from "./Components/CoreComponents/CvPreview";
import Header from "./Components/CoreComponents/Header";
import Footer from "./Components/UI/Footer";
import Toast from "./Components/UI/Toast";
import useStatValue from "./Context/StateProvider";
import "./styles/App.css";

function App() {
  const [{ toggle, savedInfo }, dispatch] = useStatValue();

  useEffect(() => {
    if (savedInfo) {
      setTimeout(() => {
        dispatch({
          type: "RESET",
        });
      }, 3000);
    }
  });

  return (
    <div className="app">
      <Header />
      {savedInfo && <Toast message="Informations saved succesfully" />}
      <CvFormEditor />
      {toggle && <CvPreview />}
      <Footer />
    </div>
  );
}

export default App;
