import { Component, OnInit } from '@angular/core';
import { Platform} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  ios: boolean;
      android: boolean;
      
      constructor(public platform: Platform) {
          this.ios = platform.is('ios');
          this.android = platform.is('android');
}

}
