import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";

import { BannerHome } from "../../components/Home/BannerHome";
import { CoffeeList, CoffeeType } from "../../components/Home/CoffeeList";

import dataCoffees from "../../mocks/coffees.json";

import { HomeContainer } from "./styles";



export function Home() {
  const [coffee, setCoffee] = useState<CoffeeType[]>(dataCoffees);

  return (
    <HomeContainer>
      <BannerHome />

      <div className="container">
        <h2 className="title">
          Nossos cafés
        </h2>
      </div>

      <div className="container">
        <div className="coffeeList">

          {
            coffee.map((coffee) => {
              return <CoffeeList key={coffee.id} id={coffee.id} image={coffee.image} categories={coffee.categories} name={coffee.name} description={coffee.description} value={coffee.value} />
            })
          }


        </div>
      </div>
    </HomeContainer>
  )
}