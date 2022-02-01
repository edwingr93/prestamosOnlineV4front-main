import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'sb-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {

    ngOnInit() {}

    ngOnDestroy() {
        
    }
}
