import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebcamInitError, WebcamModule } from 'ngx-webcam';
import { MatSharedModule } from '../../common/mat-shared/mat-shared.module';

@Component({
  selector: 'app-scanner-window',
  imports: [CommonModule, MatSharedModule, FormsModule, WebcamModule],
  templateUrl: './scanner-window.component.html',
  styleUrl: './scanner-window.component.scss'
})
export class ScannerWindowComponent {
  openCamera: boolean = false;
  vehicleNumber: string = '';

  constructor() { }
  
  ngOnInit(): void {  }

  onOffCamera() {
    this.openCamera = !this.openCamera;
  }

  handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }else {
      console.warn("Camera initialization fails for some reason,");
    }
    this.openCamera = false;
  }

}
