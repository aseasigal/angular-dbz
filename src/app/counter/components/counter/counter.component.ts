import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    template:`
    <h3>Counter : {{counter}}</h3>
    <button (click)="increaseBy()" >+1</button>
    <button (click)="decreaseBy()">-1</button>

    `
})
export class CounterComponent{
    counter = 0
    increaseBy():void{
      this.counter +=1;
    };
    decreaseBy():void{
      this.counter -=1;
    };

}