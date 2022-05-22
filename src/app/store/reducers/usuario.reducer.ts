import { Action, createReducer, on } from '@ngrx/store';
import { Payload, User } from '../../models';
import {
  cargarUsuario,
  cargarUsuarioSuccess,
  cargarUsuarioError,
} from '../actions';

export interface UsuarioState {
  id: string;
  user: User | undefined;
  loaded: boolean;
  loading: boolean;
  error: Payload | undefined;
}

const initialState: UsuarioState = {
  id: '',
  user: undefined,
  loaded: false,
  loading: false,
  error: undefined,
};

const _userReducer = createReducer(
  initialState,

  on(cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
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

export function userReducer(state: UsuarioState | undefined, action: Action) {
  return _userReducer(state, action);
}
