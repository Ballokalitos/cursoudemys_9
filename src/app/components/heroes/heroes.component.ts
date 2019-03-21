import { Component, OnInit } from '@angular/core';
import {NgForm } from "@angular/forms";
import {Heroe } from "../../interfaces/heroe.interface";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
