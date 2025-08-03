import React from "react";
import "./App.css";
import FirstName from "../component/first-name/FirstName";
import Image from "../component/image/Image";
import Profile from "../component/profile/Profile";

function App() {
  return (
    <div className="App">
      <FirstName />
      <Image />
      <Profile />
    </div>
  );
}

export default App;
