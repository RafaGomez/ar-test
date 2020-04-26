import { Component, OnInit, ViewChild } from '@angular/core';
import { ILocationElement } from 'src/app/modules/shared/models/ILocationElement';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { Observable } from 'rxjs/internal/Observable';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  
  supportedColors = ['red', 'green', 'yellow', 'blue'];
  configuredLocations$: Observable<ILocationElement[]>;
  isPopupVisible = false;
  newLocation = {} as ILocationElement;

  buttonOptions: any = {
    text: 'Save',
    type: 'success',
    useSubmitBehavior: true
  };


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.configuredLocations$ = this.sharedService.getLocations();
  }

  onAddClicked(e) {
    this.isPopupVisible = true;
  }

  form_fieldDataChanged(e) {
    this.newLocation = e.component.option('formData');
  }

  onFormSubmit = function(e) {
    console.log(this.newLocation);
    this.newLocation.id = Math.random().toString(36).substr(2, 9);
    this.sharedService.addLocation(this.newLocation);
    notify({
        message: 'Saved',
        position: {
            my: 'center top',
            at: 'center top'
        }
    }, 'success', 2000);
    this.newLocation = {} as ILocationElement;
    e.preventDefault();
    this.configuredLocations$ = this.sharedService.getLocations();
    this.isPopupVisible = false;
};

  removeElement(id) {
    this.sharedService.removeLocation(id);
    this.configuredLocations$ = this.sharedService.getLocations();
    notify({
      message: 'Deleted',
      position: {
          my: 'center top',
          at: 'center top'
      }
  }, 'success', 2000);
  }
}
