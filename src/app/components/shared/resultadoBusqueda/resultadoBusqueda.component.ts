import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService , Heroe} from "../../../Services/heroes.Service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-resuladoBusqueda',
  templateUrl: './resultadoBusqueda.component.html',
})
export class ResultadoBusquedaComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);      
      this.termino = params['nombre'];
    })
  }

  verHeroe( idx:number ){
    this._router.navigate(['heroe',idx]);
  }

}
