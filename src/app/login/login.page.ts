import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Validators, FormControl, FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  ios: boolean; //esto es para detectar cuando un dispositivo es iOS
  android: boolean; //same with android

  usuario={ //se declara un usuario para validar
    nombre:'',
    password:''
  };

  constructor(public platform: Platform) { //valida tipo dispositivo (android o ios)
    this.ios = platform.is('ios');
    this.android = platform.is('android');

}

onSubmitTemplate(){ //Muestra datos de usuario (si son correctos <cumplen validacion>)
  console.log('Form Submited');
  console.log(this.usuario);
}
}
