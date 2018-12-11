import { Component} from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
>>>>>>> b236136... formularios data

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
   forma:FormGroup;

<<<<<<< HEAD
   usuario:Object = {
      nombrecompleto: {
        nombre:"Carlos",
        apellido:"carballo"
      },
      correo: "carlos.carballo@dafqroo.gpb.mx",
      // pasatiempos: ["Correr","Dormir","Correr"]
   }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
         'nombre': new FormControl('' ,  [
           Validators.required,
           Validators.minLength(3)
         ]),
          'apellido': new FormControl('' , Validators.required )
          }),
           'correo': new FormControl('' ,   [
                                      Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]  ),
            'pasatiempos': new FormArray([
              new FormControl('Correr',Validators.required)
            ])                        
   })
   // this.forma.setValue( this.usuario);

   }
   agregarPasatiempo(){
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('Dormir', Validators.required)
     )
=======
  constructor() {

    this.forma = new FormGroup({
     'nombre': new FormControl('Fernando'),
     'apellido': new FormControl(),
     'correo': new FormControl()
   })




>>>>>>> b236136... formularios data
   }

   guardarCambios(){
      console.log( this.forma.value);
      console.log( this.forma);
<<<<<<< HEAD
      this.forma.reset({
        nombrecompleto:{
          nombre: "",
          apellido: ""
        },
        correo:""
      });
=======
>>>>>>> b236136... formularios data
   }



}
