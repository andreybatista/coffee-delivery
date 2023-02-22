import { useContext } from "react";

import { BannerHome } from "../../components/Home/BannerHome";
import { CoffeeList } from "../../components/Home/CoffeeList";

import { CoffeeContext } from "../../contexts/CoffeeContext";

import { HomeContainer } from "./styles";



export function Home() {
  const { coffees } = useContext(CoffeeContext)

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
            coffees.map((coffee) => {
              return <CoffeeList key={coffee.id} id={coffee.id} image={coffee.image} categories={coffee.categories} name={coffee.name} description={coffee.description} value={coffee.value} />
            })
          }


        </div>
      </div>
    </HomeContainer>
  )
}