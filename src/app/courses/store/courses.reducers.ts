import * as CoursesActions from './courses.actions';
import { ICourse } from '../shared/models/course-list-item.model';


export interface State {
  courses: ICourse[];
  count: string;
}

const initialState: State = {
  courses: null,
  count: '10',
};

export function coursesReducer(state = initialState, action: CoursesActions.CoursesActions) {
  switch (action.type) {
    case CoursesActions.SET_COURSES:
      return {
        ...state,
        courses: action.payload
    };
    case CoursesActions.LOAD_MORE:
      return {
        ...state,
        count: (+state.count + 5).toString()
    };
    // case ShoppingListActions.ADD_COURSE:
    //   return {
    //     ...state,
    //     ingredients: [...state.ingredients, action.payload]
    //   };
    // case ShoppingListActions.ADD_INGREDIENTS:
    //   return {
    //     ...state,
    //     ingredients: [...state.ingredients, ...action.payload]
    //   };
    // case ShoppingListActions.UPDATE_INGREDIENT:
    //   const ingredient = state.ingredients[state.editedIngredientIndex];
    //   const updatedIngredient = {
    //     ...ingredient,
    //     ...action.payload.ingredient
    //   };
    //   const ingredients = [...state.ingredients];
    //   ingredients[state.editedIngredientIndex] = updatedIngredient;
    //   return {
    //     ...state,
    //     ingredients: ingredients,
    //     editedIngredient: null,
    //     editedIngredientIndex: -1
    //   };
    // case ShoppingListActions.DELETE_INGREDIENT:
    //   const oldIngredients = [...state.ingredients];
    //   oldIngredients.splice(state.editedIngredientIndex, 1);
    //   return {
    //     ...state,
    //     ingredients: oldIngredients,
    //     editedIngredient: null,
    //     editedIngredientIndex: -1
    //   };
    // case ShoppingListActions.START_EDIT:
    //   const editedIngredient = {...state.ingredients[action.payload]};
    //   return {
    //     ...state,
    //     editedIngredient: editedIngredient,
    //     editedIngredientIndex: action.payload
    //   };
    // case ShoppingListActions.STOP_EDIT:
    //   return {
    //     ...state,
    //     editedIngredient: null,
    //     editedIngredientIndex: -1
    //   };
    default:
      return state;
  }
}
