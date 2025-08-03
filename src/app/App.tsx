// this is how conditional rendering is done
// this is first way of conditional rendering

// This is second way of conditional rendering
// <div>
//   {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />
//   )}
// </div>

// This is third way of conditional rendering

// <div>
//   {isLoggedIn && <AdminPanel />}
// </div>

import React from "react";
import "./App.css";
import MainPage from "../components/main-page/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
