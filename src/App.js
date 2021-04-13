import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import Widgets from "./components/Widgets/Widgets";
function App() {
  return (
    <div className="app">
      <SideBar />
      <Main />
      <Widgets />
    </div>
  );
}

export default App;
