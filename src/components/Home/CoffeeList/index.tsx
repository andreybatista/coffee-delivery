import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import CurrencyFormat from 'react-currency-format';

import { CoffeeListContainer } from "./styles";

export interface CoffeeType {
  id: number;
  name: string;
  description: string;
  categories: CoffeeCategoryType[];
  image: string;
  value: number;
}

interface CoffeeCategoryType {
  name: string;
}

export function CoffeeList({ id, image, categories, name, description, value }: CoffeeType) {
  const [qyt, setQyt] = useState(1);

  const [valueCoffee, setValueCoffee] = useState(value)

  function handleMoreOneQyt() {
    if (qyt >= 99) {
      return setQyt(99)
    }
    setQyt((state) => state + 1)
  }
  function handleLessQyt() {
    if (qyt <= 1) {
      return setQyt(1)
    }
    setQyt((state) => state - 1)
  }

  useEffect(() => {
    setValueCoffee(qyt * value)
  }, [qyt])

  return (
    <CoffeeListContainer key={id}>
      <div>
        <img width={120} height={120} src={`./src/assets/coffee/${image}`} />
        <div className="categoryList">
          {categories?.map((category: any) => {
            return (
              <span key={id + category.name}>
                {category.name}
              </span>
            )
          })}
        </div>
        <h2>
          {name}
        </h2>
        <p>
          {description}
        </p>
      </div>

      <div className="buy">
        <div>
          <p>
            R$ <span>{valueCoffee.toLocaleString('pt-br', { currency: 'BRL', minimumFractionDigits: 2 })}</span>
          </p>
        </div>

        <div className="buy__buttons">
          <div className="buy__input">
            <button type="button" value='Button Add' onClick={handleLessQyt}>
              <Minus size={14} weight="fill" />
            </button>
            <input type="number" onChange={e => setQyt(parseInt(e.target.value))} value={qyt} min={1} max={5} />
            <button type="button" onClick={handleMoreOneQyt}>
              <Plus size={14} weight="fill" />
            </button>
          </div>
          <button className="buy__cart">
            <ShoppingCart size={19} weight="fill" />
          </button>
        </div>

      </div>
    </CoffeeListContainer >
  )
}