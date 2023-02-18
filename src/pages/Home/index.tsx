import { ShoppingCart } from "phosphor-react";
import { useState } from "react";

import { BannerHome } from "../../components/Home/BannerHome";

import dataCoffees from "../../mocks/coffees.json";

import { CoffeeListContainer, HomeContainer } from "./styles";

export interface CoffeeType {
  "id": number,
  "name": string,
  "description": string,
  "categories": CoffeeCategoryType[],
  "image": string,
  "value": number
}
interface CoffeeCategoryType {
  "name": string
}

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
          {coffee.map((coffee) => {
            return (
              <CoffeeListContainer key={coffee.id}>

                <img width={120} height={120} src={`./src/assets/coffee/${coffee.image}`} />
                <div className="categoryList">
                  {coffee.categories.map((category: any) => {
                    return (
                      <span>
                        {category.name}
                      </span>
                    )
                  })}
                </div>
                <h2>
                  {coffee.name}
                </h2>
                <p>
                  {coffee.description}
                </p>

                <footer>
                  <div>
                    <span>R$ </span>
                    <strong>9,90</strong>
                  </div>

                  <div>
                    <input type="number" value={1} />
                    <button>
                      <ShoppingCart size={32} weight="fill" />
                    </button>
                  </div>

                </footer>
              </CoffeeListContainer>
            )
          })}
        </div>
      </div>
    </HomeContainer>
  )
}