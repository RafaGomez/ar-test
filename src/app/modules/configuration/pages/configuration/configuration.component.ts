import { Component, OnInit } from '@angular/core';
import { ILocationElement } from 'src/app/modules/shared/models/ILocationElement';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  configuredLocations$: Observable<ILocationElement[]>;
  isPopupVisible = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.configuredLocations$ = this.sharedService.getCoordinates();
  }

  onAddClicked (e) {
    this.isPopupVisible = true;
  }

}
