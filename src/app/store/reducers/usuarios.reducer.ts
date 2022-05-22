import { Action, createReducer, on } from '@ngrx/store';
import { Payload, User } from '../../models';
import {
  cargarUsuarios,
  cargarUsuariosSuccess,
  cargarUsuariosError,
} from '../actions';

export interface UsuariosState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: Payload | undefined;
}

const initialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: undefined,
};

const _usersReducer = createReducer(
  initialState,

  on(cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),
  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usersReducer(state: UsuariosState | undefined, action: Action) {
  return _usersReducer(state, action);
}
