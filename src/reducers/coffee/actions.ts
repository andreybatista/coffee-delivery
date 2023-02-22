import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_CART = "ADD_CART",
}

export function addToCartAction(qyt: number, coffeeId: number) {
  return {
    type: ActionTypes.ADD_CART,
    payload: {
      qyt,
      coffeeId,
    },
  };
}

// export function markCurrentCycleAsFinishedAction() {
//   return {
//     type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
//   }
// }

// export function interruptCurrentCycleAction() {
//   return {
//     type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
//   }
// }
