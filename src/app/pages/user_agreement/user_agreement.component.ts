import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'user-agreements',
    standalone: true,
    templateUrl: './user_agreement.component.html',
    styleUrl: '../../styles/docs.css'
})

export class UserAgreements implements OnInit {

    constructor(private scroller: ViewportScroller) { }

    ngOnInit(): void {
        this.scroller.scrollToPosition([0, 0]);
    }
}