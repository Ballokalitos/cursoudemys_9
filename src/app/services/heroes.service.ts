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
  }
