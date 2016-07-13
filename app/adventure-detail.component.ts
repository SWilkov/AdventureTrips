import { Component, OnInit, Input } from '@angular/core';
import { AdventureEvent } from "./models/AdventureEvent";

@Component({
    selector: 'adventure-detail',
    templateUrl: './app/views/adventure-detail.component.html'
})
export class AdventureDetailComponent implements OnInit {
    @Input() adventure: AdventureEvent;

    constructor() { }

    ngOnInit() { 

    }

}