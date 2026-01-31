import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IngredientsList from './IngredientsList'

const itemsList =[

  "Sweetened condensed milk",
  "Egg yolks + 1 whole egg",
  "Fresh squeezed lemon juice",
  "Lemon zest",
  "Store bought unbaked pie crust"
];

function App() {

  return(
    <div>
      <IngredientsList items={itemsList}/>
    </div>
  );
}

export default App
