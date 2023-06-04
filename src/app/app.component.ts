import { Component, OnInit } from '@angular/core';
import { LivroService } from './livro-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private livroService:LivroService){}

ngOnInit(): void {}
title = 'projeto-final';
}
