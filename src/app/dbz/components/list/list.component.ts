import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html'
})

export class ListComponent{
    @Input()
    public characterList : Character[]=[]

    trackByCharacterId(index:number, character: Character): number {
        return index;
    }
    
    @Output()
    public onDelete:EventEmitter<string> = new EventEmitter()
    
    onDeletTarget(id?:string):void{
        if(!id) return
        this.onDelete.emit(id)
        console.log(id)
    }
}