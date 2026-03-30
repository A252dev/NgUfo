import { ViewportScroller } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { UserAgreements } from "../../../pages/user_agreement/user_agreement.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})

export class AppFooter {
    currentTime = new Date().getFullYear();

    constructor(private scroller: ViewportScroller) { }

    scrollToUp() {
        this.scroller.scrollToPosition([0, 0]);
    }
}
