import { createAction, props } from '@ngrx/store';
import { Payload, User } from '../../models';

export const cargarUsuario = createAction(
  '[Usuario]  Cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario]  Cargar Usuario Success',
  props<{ usuario: User }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario]  Cargar Usuario Error',
  props<{ payload: Payload }>()
);
