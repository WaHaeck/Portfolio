import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public name = '';

  constructor(private route: ActivatedRoute, private _changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.name = (params['visitor'] as String)?.toUpperCase() ?? '';
      this._changeDetectorRef.markForCheck();
    });
  }
}
