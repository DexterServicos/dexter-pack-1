import { Component } from '@angular/core';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';

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
