import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'data-protection',
    standalone: true,
    templateUrl: './data_protection.component.html',
    styleUrl: '../../styles/docs.css'
})

export class DataProtection implements OnInit {

    constructor(private scroller: ViewportScroller) { }

    ngOnInit(): void {
        this.scroller.scrollToPosition([0, 0]);
    }
}