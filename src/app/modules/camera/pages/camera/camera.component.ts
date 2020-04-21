import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  hideCurtain = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hideCurtain = true;
    }, 1000);
  }

}
