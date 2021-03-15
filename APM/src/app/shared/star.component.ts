import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent{
    
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = 
                      new EventEmitter<string>();
    starWidth: number;

    onClick() : void{
        this.ratingClicked.emit(this.rating.toString());
        console.log("Event clicked");
    }

}