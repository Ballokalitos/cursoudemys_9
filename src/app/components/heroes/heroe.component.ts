import { Component, OnInit } from '@angular/core';
import {NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router"; // se usa para importar paranetros de url
import {Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component(
  {
   selector: 'app-heroe',
   templateUrl: './heroe.component.html',
   styles: []
  })
export class HeroeComponent implements OnInit {

 private heroe:Heroe = {
 nombre:"",
 bio:"",
 casa:"Marvel"
}
nuevo:boolean = false;
id:string;

// se obtienen los parametros por medio de url se usa ActivatedRoute
  constructor(private _heroesService: HeroesService,
              private router:Router,
              private route:ActivatedRoute ) {
// seobtiene los valores de parametro ...
 // se configura Observable
  this.route.params
  .subscribe( parametros=>{
    this.id= parametros['id']
    if( this.id !== "nuevo" ) {
       this._heroesService.getHeroe( this.id)
        .subscribe( heroe=> this.heroe = heroe)

      }
    });


  }


  //private router:Router) { }

  ngOnInit() {
  }
  guardar()
  {
   console.log(this.heroe);
    if( this.id == "nuevo" ){
      //insertando
      this._heroesService.nuevoHeroe( this.heroe )
          .subscribe( data=>{
             this.router.navigate(['/heroe', data.name])
           },
           error=> console.error(error));
         }else {
           //actualizando
           this._heroesService.actualizarHeroe( this.heroe, this.id )
               .subscribe( data=>{
                  console.log(data);
                },
                error=> console.error(error));

    }
 }

agregarNuevo( forma:NgForm) {
  this.router.navigate(['/heroe','nuevo']);
  forma.reset({
    casa:"Marvel"
  });
 } 
}
