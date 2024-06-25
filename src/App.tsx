import Main from "./components/main/Main";
import Navbar from "./components/Navs/Navbar";
import SubNav from "./components/Navs/SubNav";

function App() {
  return (
    <>
      {" "}
      <div className="font-poppins">
        <div className="">
          <Navbar />
        </div>
        <div>
          <SubNav />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
