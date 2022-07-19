import {genAction} from '~/utils/redux';
import type {State} from '../reducers';

export const [GET_NAMESPACE, getNamespace] = genAction<[
  number
], State, number>(
  'GET_NAMESPACE',
  (value) => value
);
