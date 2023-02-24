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
  function organizandoObjeto(arr: any) {
    let memory = {
      temp: [],
      result: [],
    };

    arr.map((o) => {
      if (!memory.temp.includes(o.coffeeId)) {
        memory.temp.push(o.coffeeId);
        const qyt = dados.filter((t) => t.coffeeId === o.coffeeId);
        memory.result.push({ coffeeId: o.coffeeId, qyt: qyt });
      }
    });

    return memory.result;
  }
  switch (action.type) {
    case ActionTypes.ADD_CART: {
      const addCurrentCoffeeCart = state.coffees.find((coffee) => {
        return coffee.id === action.payload.coffeeId;
      });

      if (!addCurrentCoffeeCart) {
        return state;
      }

      let data: CoffeeState;

      if (state.coffeesCart) {
        data = {
          coffees: state.coffees,
          coffeesCart: [...state.coffeesCart, action.payload],
        };
      } else {
        data = {
          coffees: state.coffees,
          coffeesCart: [action.payload],
        };
      }

      const users = [
        {
          id: 1,
          name: "Expresso Tradicional",
          description:
            "O tradicional café feito com água quente e grãos moídos",
          categories: [
            {
              name: "Tradicional",
            },
          ],
          image: "expresso.png",
          value: 9.9,
        },
        {
          id: 2,
          name: "Expresso Americano",
          description: "Expresso diluído, menos intenso que o tradicional",
          categories: [
            {
              name: "Tradicional",
            },
          ],
          image: "americano.png",
          value: 9.9,
        },
        {
          id: 1,
          name: "Expresso Tradicional",
          description:
            "O tradicional café feito com água quente e grãos moídos",
          categories: [
            {
              name: "Tradicional",
            },
          ],
          image: "expresso.png",
          value: 9.9,
        },
      ];

      function groupBy(array: any, key: any) {
        return array.reduce((hash: any, obj: any) => {
          if (obj[key] === undefined) return hash;
          return Object.assign(hash, {
            [obj[key]]: (hash[obj[key]] || []).concat(obj),
          });
        }, {});
      }
      const groupedArray = groupBy(users, "id");
      console.log(groupedArray);

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
