import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//Import Pages
import Auth from "./pages/AuthPage/Auth.jsx";
import FoodHandler from "./pages/FoodTrainingPage/FoodHandlerPage/FoodHandler.jsx";
import FoodManager from "./pages/FoodTrainingPage/FoodManagerPage/FoodManager.jsx";
import AlcoholTraining from "./pages/AlcoholTrainingPage/AlcoholTraining.jsx";
//Import Components
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
//Import CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ? (
      <>
        <NavBar/>
        <Routes>
          <Route path='Home' element={<Home />}/>  
          <Route
            path="/foodtrainingpage"
            element={[<FoodHandler />, <FoodManager />]}
          />
          <Route path="/alcoholtrainingpage" element={<AlcoholTraining />} />
        </Routes>
      </>
        
      ) : (
        <Auth />
      )}
    </main>
  );
};

export default App;
