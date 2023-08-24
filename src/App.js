import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//Import Pages
import Auth from "./pages/AuthPage/Auth.jsx";
import FoodHandler from "./pages/FoodTrainingPage/FoodHandlerPage/FoodHandler.jsx";
import FoodManager from "./pages/FoodTrainingPage/FoodManagerPage/FoodManager.jsx";
//Import Components
//Import CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route
            path="/foodtrainingpage"
            element={[<FoodHandler />, <FoodManager />]}
          />
        </Routes>
      ) : (
        <Auth />
      )}
    </main>
  );
};

export default App;
