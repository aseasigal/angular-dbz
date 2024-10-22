import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames :string[]=["Spiderman","Ironman","Thor","Hulk","She hulk"]
  public removedHero?:string;
  removeLastHeroe():void{
    this.removedHero = this.heroNames.pop()
  }
}
