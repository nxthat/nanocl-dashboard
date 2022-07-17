import type {ReducerAction} from '~/utils/redux';
import type {ReducerHooks} from '~/utils/reducer';
import { createReducer } from '~/utils/reducer';

import {
  GET_NAMESPACE,
  getNamespace,
} from '../actions/home';

export type HomeState = {
  counter: number;
};

const initialState: HomeState = {
  counter: 0,
};

const reducerHooks: ReducerHooks<HomeState> = {
  [GET_NAMESPACE.DEFAULT]:
    (state, action: ReducerAction<typeof getNamespace>) => ({
      ...state,
      counter: action.payload,
    }),
};

const reducer = createReducer<HomeState>(initialState, reducerHooks);

export default reducer;
