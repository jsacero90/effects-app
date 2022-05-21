import { Component, OnInit } from '@angular/core';
import { User } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: User[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((users) => {
      console.log(users);
      this.usuarios = users;
    });
  }
}
