import { Component, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  ios: boolean;
      android: boolean;
      
      constructor(public platform: Platform) {
          this.ios = platform.is('ios');
          this.android = platform.is('android');

  
}
@ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
