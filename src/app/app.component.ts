import { Component } from '@angular/core';
import { DummyData } from './dummy-tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'notas-app';
  tasks: any = DummyData;

  edit(id:string){

  }
  
  delete(id:string){

  }

}
