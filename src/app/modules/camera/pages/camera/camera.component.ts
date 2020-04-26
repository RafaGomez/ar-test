import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { ILocationElement } from 'src/app/modules/shared/models/ILocationElement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  hideCurtain = false;
  locations$: Observable<ILocationElement[]>;

  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    this.locations$ = this.sharedService.getLocations();
    setTimeout(() => {
      this.hideCurtain = true;
    }, 1000);
  }

}
