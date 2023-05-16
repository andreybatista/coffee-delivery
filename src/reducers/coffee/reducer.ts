import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Coffee {
  id: number;
  name: string;
  description: string;
  categories?: CoffeeCategoryType[];
  image: string;
  value: number;
}

export interface CountItemCart {
  coffeeId: number;
  qyt: number;
}

interface CoffeeCategoryType {
  name: string;
}

interface CoffeeState {
  coffees: Coffee[];
  coffeesCart: CountItemCart[];
}

export function coffeesReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CART: {
      const addCurrentCoffeeCart = state.coffees.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

      if (!addCurrentCoffeeCart) {
        return state;
      }

      let data: CoffeeState;

      const coffeesCart = [
        { qyt: 1, coffeeId: 1 },
        { qyt: 2, coffeeId: 1 },
        { qyt: 2, coffeeId: 3 },
        { qyt: 2, coffeeId: 4 },
        { qyt: 2, coffeeId: 1 },
        { qyt: 2, coffeeId: 1 },
      ];

      function groupBy(arr: { qyt: number, coffeeId: number }[]): { qyt: number, coffeeId: number }[] {
        const resultado: { qyt: number, coffeeId: number }[] = [];
      
        arr.forEach(objeto => {
          const index = resultado.findIndex(item => item.coffeeId === objeto.coffeeId);
      
          if (index !== -1) {
            resultado[index].qyt += objeto.qyt;
          } else {
            resultado.push({ qyt: objeto.qyt, coffeeId: objeto.coffeeId });
          }
        });
      
        return resultado;
      }
      const groupedArray = groupBy(coffeesCart);
      console.log(groupedArray);

      if (state.coffeesCart) {
        const itemCart = state.coffeesCart.find((coffee) => {
          return coffee.coffeeId === action.payload.coffeeId;
        });

        if (itemCart) {
          const arrayItem = {
            qyt: itemCart.qyt + action.payload.qyt,
            coffeeId: itemCart.coffeeId,
          };
          // console.log(arrayItem);
          data = {
            coffees: state.coffees,
            coffeesCart: [...state.coffeesCart, arrayItem],
          };
        } else {
          data = {
            coffees: state.coffees,
            coffeesCart: [...state.coffeesCart, action.payload],
          };
        }
      } else {
        data = {
          coffees: state.coffees,
          coffeesCart: [action.payload],
        };
      }
      // console.log(data);

      return data;
    }

    // case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
    //   const currentCycleIndex = state.cycles.findIndex((cycle) => {
    //     return cycle.id === state.activeCycleId
    //   })
    //   if (currentCycleIndex < 0) {
    //     return state
    //   }
    //   return produce(state, (draft) => {
    //     draft.cycles[currentCycleIndex].interruptedDate = new Date()
    //     draft.activeCycleId = null
    //   })
    // }
    // case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
    //   const currentCycleIndex = state.cycles.findIndex((cycle) => {
    //     return cycle.id === state.activeCycleId
    //   })
    //   if (currentCycleIndex < 0) {
    //     return state
    //   }
    //   return produce(state, (draft) => {
    //     draft.cycles[currentCycleIndex].finishedDate = new Date()
    //     draft.activeCycleId = null
    //   })
    // }
    default:
      return state;
  }
  return false;
}
