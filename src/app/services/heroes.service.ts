import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from  "../interfaces/heroe.interface";
//import { Response } from "../interfaces/heroe.interface.response";
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';
//import {map} from 'rxjs/operators';
@Injectable()
export class HeroesService {
    heroesURL:string = "https://heroesapp-6569c.firebaseio.com/heroes.json"
    heroeURL:string = "https://heroesapp-6569c.firebaseio.com/heroes/";

    constructor( private http:Http ) { }
    //constructor(private http: HttpClient) { }
    nuevoHeroe (heroe:Heroe ) {
       let body=JSON.stringify( heroe );
       let headers = new Headers({
        'Content-Type':'applications/json'
      });
      return this.http.post (  this.heroesURL, body, { headers } )
      .map( res=>{
        console.log(res.json());
        return res.json();
      })

    }

    actualizarHeroe (heroe:Heroe,key$:string ) {
       let body=JSON.stringify( heroe );
       let headers = new Headers({
        'Content-Type':'applications/json'
      });
      let url=`${ this.heroeURL }/${ key$ }.json`;
      return this.http.put (  url, body, { headers } )
      .map( res=>{
        console.log(res.json());
        return res.json();
      })

    }

 //obtener heroe
 getHeroe( key$:string ) {

   let url=`${ this.heroeURL }/${ key$ }.json`;
   return this.http.get (  url )
   .map( res=> res.json() );
  }
}
