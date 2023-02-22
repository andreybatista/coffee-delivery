import { createContext, ReactNode, useReducer } from "react"

import { Coffee, coffeesReducer } from "../reducers/coffee/reducer"
import {
  addToCartAction
} from '../reducers/coffee/actions'

import dataCoffees from "../mocks/coffees.json";

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  coffees: Coffee[]
  coffeesCart: Coffee[] | null
  addToCart: (coffeesCart: Coffee[]) => void
  // activeCycle: Cycle | undefined
  // activeCycleId: string | null
  // amountSecondsPassed: number
  // setSecondsPassed: (seconds: number) => void
  // createNewCycle: (data: CreateCycleData) => void
  // interruptCurrentCycle: () => void
}

export const CoffeeContext = createContext({} as CoffeesContextType)

export function CoffeeContextProvider({
  children,
}: CoffeesContextProviderProps) {

  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
      coffeesCart: null,
    },
    () => {
      // const storedStateAsJSON = localStorage.getItem(
      //   '@andrey-timer:cycles-state-1.0.0',
      // )

      // if (storedStateAsJSON) {
      //   return JSON.parse(storedStateAsJSON)
      // } else {
      //   return {
      //     cycles: [],
      //     activeCycleId: null,
      //   }
      // }
      return {
        coffees: dataCoffees,
        coffeesCart: null,
      }
    },
  )
  const { coffees, coffeesCart } = coffeesState

  function addToCart(data: Coffee[]) {
    dispatch(addToCartAction(coffeesCart))
  }


  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        coffeesCart,
        addToCart
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
