import { ChangeEvent, useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { Coffee } from "../../../reducers/coffee/reducer";

import { CoffeeListContainer } from "./styles";


export function CoffeeList({ id, image, categories, name, description, value }: Coffee) {
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
  function handleSetValue(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value == '') {
      return setQyt(1)
    }
    if (parseInt(e.target.value) >= 99) {
      return setQyt(99)
    }
    if (parseInt(e.target.value) <= 1) {
      return setQyt(1)
    }

    setQyt(parseInt(e.target.value))
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
            <input type="number" onChange={(e) => handleSetValue(e)} value={qyt} min={1} max={5} />
            <button type="button" onClick={handleMoreOneQyt}>
              <Plus size={14} weight="fill" />
            </button>
          </div>
          <button onClick={addToCart(id)} className="buy__cart">
            <ShoppingCart size={19} weight="fill" />
          </button>
        </div>

      </div>
    </CoffeeListContainer >
  )
}