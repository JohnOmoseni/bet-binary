import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import DApp from "./pages/dApp/DApp";

function App() {
  return (
    <div className="wrapper relative">
      <AnimatePresence>
        {/* {openMenu && <Menu setOpenMenu={setOpenMenu} />} */}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<DApp />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
