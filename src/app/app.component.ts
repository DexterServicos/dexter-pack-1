import { Component } from '@angular/core';

import { TimesService } from './times.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem vindos ao Workflow Dexter';


  show: boolean = true;
  hide: boolean = false;
  

}
