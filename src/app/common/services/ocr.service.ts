import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root',
})
export class OcrService {
  performOCR(image: File | Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      Tesseract.recognize(image, 'eng')
        .then(({ data: { text } }) => {
          resolve(text);
        }).catch(error => {
          reject(error);
        });
    });
  }
}