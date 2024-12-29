import { Observable, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Component, HostListener } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OcrService } from '../../common/services/ocr.service';
import { WebcamImage, WebcamInitError, WebcamModule } from 'ngx-webcam';
import { MatSharedModule } from '../../common/mat-shared/mat-shared.module';

@Component({
  selector: 'app-scanner-window',
  imports: [CommonModule, MatSharedModule, FormsModule, WebcamModule],
  templateUrl: './scanner-window.component.html',
  styleUrl: './scanner-window.component.scss',
  providers: [UpperCasePipe]
})
export class ScannerWindowComponent {
  openCamera: boolean = false;
  vehicleNumber: string = '';
  mirrorImage: string = 'always';
  webcamImage: WebcamImage | null = null;
  trigger = new Subject<void>();
  webcamHeight: number = 0;
  webcamWidth: number = 0;

  constructor(
    private upperCasePipe: UpperCasePipe,
    private ocrService: OcrService
  ) { }

  ngOnInit(): void {
    this.adjustWebcamSize();
  }

  @HostListener('window:resize', ['$event'])
  adjustWebcamSize(): void {
    if (window.innerWidth <= 768) {
      this.webcamHeight = 250;
      this.webcamWidth = window.innerWidth - 50;
    } else {
      this.webcamHeight = 400;
      this.webcamWidth = 500;
    }
  }

  onOffCamera() {
    this.openCamera = !this.openCamera;
    this.webcamImage = null;
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


  convertDataURLToBlob(dataUrl: string): Blob {
    const byteString = atob(dataUrl.split(',')[1]); // Decode base64 string
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0]; // Extract MIME type
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([uintArray], { type: mimeString });
  }

  submit() {
    if (!this.vehicleNumber) {
      if (this.openCamera && !this.webcamImage) {
        this.trigger.next();
        this.openCamera = false;
      } else {
        const imageDataUrl = this.webcamImage?.imageAsDataUrl;
        if (imageDataUrl) {
          const imageBlob = this.convertDataURLToBlob(imageDataUrl);
          this.ocrService.performOCR(imageBlob).then(text => {
            this.vehicleNumber = text;
          }).catch(error => {
            console.error('OCR failed', error);
          });
          this.webcamImage = null;
          this.openCamera = false;
        }
      }
    } else {
      this.vehicleNumber = this.upperCasePipe.transform(this.vehicleNumber);
      this.vehicleNumber = '';
    }
  }

  handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    } else {
      console.warn("Camera initialization fails for some reason,");
    }
    this.openCamera = false;
  }

  validateNumberPlate(text: string): boolean {
    const regex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    return regex.test(text);
  }

}