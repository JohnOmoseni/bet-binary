import FooterVariant from "@components/Footer/FooterVariant";
import BinaryHeader from "@components/Headers/BinaryHeader";
import Predict from "./Predict";
import Top from "./Top";

function DApp() {
  return (
    <>
      <BinaryHeader />
      <div className="max-w-4xl mx-auto p-section">
        <Top />
        <div className="my-[5em]">
          <Predict />
        </div>
      </div>
      <FooterVariant />
    </>
  );
}

export default DApp;
