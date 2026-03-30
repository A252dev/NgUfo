import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'privacy-policy',
    standalone: true,
    templateUrl: './privacy_policy.component.html',
    styleUrl: '../../styles/docs.css'
})

export class PrivacyPolicy implements OnInit {

    constructor(private scroller: ViewportScroller) { }

    ngOnInit(): void {
        this.scroller.scrollToPosition([0, 0]);
    }
}