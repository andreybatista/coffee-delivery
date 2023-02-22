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
  id: number;
  qyt: number;
}

interface CoffeeCategoryType {
  name: string;
}

interface CoffeeState {
  coffees: Coffee[];
  coffeesCart?: CountItemCart[];
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

      let arrayCart: CountItemCart[];

      if (state.coffeesCart) {
        arrayCart = [...state.coffeesCart, addCurrentCoffeeCart];
      } else {
        arrayCart = [addCurrentCoffeeCart];
      }
      return {
        coffees: state.coffees,
        coffeesCart: arrayCart,
      };
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
