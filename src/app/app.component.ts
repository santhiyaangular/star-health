import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-grid';
  uhc = 'https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-260nw-766886038.jpg';
  click(){
    return "hello"+ this.title
  }
}
