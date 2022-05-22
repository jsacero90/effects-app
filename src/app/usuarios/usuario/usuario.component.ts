import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unsubscribable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions';
import { User, Payload } from '../../models';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  error: Payload | undefined = undefined;
  unSubscribable!: Unsubscribable;
  user!: User | undefined;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.unSubscribable = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });

    this.store.select('usuario').subscribe(({ user, loading, error }) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.unSubscribable.unsubscribe();
  }
}
