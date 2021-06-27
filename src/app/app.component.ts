import { Component } from '@angular/core';
import arraywords from '../utils/words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  limit:number=10;
  words:string='';

  handleLimit(newLimit:number){
    this.limit=newLimit;
  }

  generateWord(newLimit:number){
    this.words=arraywords.slice(0,newLimit).join(" ");
  }
}
