import { Minus, Plus, ShoppingCart } from "phosphor-react";
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

                <div>

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
                </div>

                <div className="buy">
                  <div>
                    <span>R$ <strong>9,90</strong></span>
                  </div>

                  <div className="buy__buttons">
                    <div className="buy__input">
                      <button>
                        <Minus size={14} weight="fill" />
                      </button>
                      <input type="number" value={1} min={1} max={5} />
                      <button>
                        <Plus size={14} weight="fill" />
                      </button>
                    </div>
                    <button className="buy__cart">
                      <ShoppingCart size={19} weight="fill" />
                    </button>
                  </div>

                </div>
              </CoffeeListContainer>
            )
          })}
        </div>
      </div>
    </HomeContainer>
  )
}