import { createAction, props } from '@ngrx/store';
import { Payload, User } from '../../models';

export const cargarUsuarios = createAction('[Usuarios]  Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios]  Cargar Usuarios Success',
  props<{ usuarios: User[] }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios]  Cargar Usuarios Error',
  props<{ payload: Payload }>()
);
