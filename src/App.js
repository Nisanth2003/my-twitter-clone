import React from "react"
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Widgets from "./components/widgets/Widgets";
function App() {
  return (
    <div className="App">
      {/*sidebar*/}
      <Sidebar/>
      {/*middle feed bar*/}
      <Feed/>
      {/*widget right side bar*/}
      <Widgets/>

    </div>
  );
}

export default App;
