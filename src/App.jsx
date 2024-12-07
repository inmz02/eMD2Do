import { TitleBar } from "./myComps/TitleBar";
import { Toolbar } from "./myComps/Toolbar";



function App() {

  return (
    <div id="container" className="bg-[#d5d5d5] w-1/4 h-[80%] rounded-sm">
      <TitleBar />
      <Toolbar />
    </div>
  )
}



export default App
