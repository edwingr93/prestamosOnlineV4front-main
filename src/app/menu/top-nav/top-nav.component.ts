import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
    selector: 'sb-top-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {

    ngOnInit() {}

}
