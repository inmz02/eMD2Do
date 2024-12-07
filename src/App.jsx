import { TitleBar } from "./myComps/TitleBar";
import { Toolbar } from "./myComps/Toolbar";
import { MainScreen } from "./myComps/MainScreen.jsx";



function App() {

  return (
    <div id="container" className="bg-[#d5d5d5] w-1/4 h-[80%] rounded-sm flex flex-col">
      <TitleBar />
      <Toolbar />
      <MainScreen />
    </div>
  )
}



export default App
