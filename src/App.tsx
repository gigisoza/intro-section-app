import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [openFeatures, setOpenFeatures] = useState<boolean>(false);
  const [openCompany, setOpenCompany] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOpenFeatures = () => {
    setOpenFeatures(!openFeatures);
  };

  const handleOpenCompany = () => {
    setOpenCompany(!openCompany);
  };

  return (
    <>
      <Header
        toggle={toggle}
        setToggle={setToggle}
        openFeatures={openFeatures}
        setOpenFeatures={setOpenFeatures}
        openCompany={openCompany}
        setOpenCompany={setOpenCompany}
        handleToggle={handleToggle}
        handleOpenFeatures={handleOpenFeatures}
        handleOpenCompany={handleOpenCompany}
      />
      <Landing />
    </>
  );
}

export default App;
