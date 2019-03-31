import * as CoursesActions from './courses.actions';
import { ICourse } from '../shared/models/course-list-item.model';
import { IAuthor } from '../shared/models/author.model';
import { IAuthorFethed } from '../shared/models/authors.model';


export interface State {
  courses: ICourse[];
  count: string;
  authors: IAuthorFethed[];
}

const initialState: State = {
  courses: null,
  count: '10',
  authors: null,
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
    case CoursesActions.SET_AUTHORS:
      return {
        ...state,
        authors: action.payload
    };
    default:
      return state;
  }
}
