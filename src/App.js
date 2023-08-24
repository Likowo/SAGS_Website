import { useState } from 'react';
//Import Pages
import Auth from './pages/AuthPage/Auth.jsx'
import FoodHandler from './pages/TrainingPage/FoodHandlerPage/FoodHandler.jsx';
import FoodManager from './pages/TrainingPage/FoodManagerPage/FoodManager.jsx';
//Import Components
//Import CSS
import './App.css';

 const App = () => {
  const [user, setUser] = useState('Ann1')

  return (
    <main className="App">

      {user?
      <FoodHandler />
      // <FoodManager />
      :
      <Auth />

      }

     
    

      
      
    </main>
  );
}

export default App;
