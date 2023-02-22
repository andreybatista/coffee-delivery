import { ActionTypes } from "./actions";

export interface Coffee {
  id: number;
  name: string;
  description: string;
  categories?: CoffeeCategoryType[];
  image: string;
  value: number;
}

interface CoffeeCategoryType {
  name: string;
}

interface CoffeeState {
  coffees: Coffee[];
  coffeesCart: string | null;
}

export function coffeesReducer(state: CoffeeState, action: any) {
  console.log(state);
  switch (action.type) {
    case ActionTypes.ADD_CART: {

      const currentCycleIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === state.coffees.id;
      });
      if (currentCycleIndex < 0) {
        return state;
      }
      // return produce(state, (draft) => {
      //   draft.cycles[currentCycleIndex].interruptedDate = new Date();
      //   draft.activeCycleId = null;
      // });
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
