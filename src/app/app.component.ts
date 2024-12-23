import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WebcamInitError, WebcamModule } from 'ngx-webcam';
import { MatSharedModule } from './common/mat-shared/mat-shared.module';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, MatSharedModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  // title = 'vehicle-number-plate-scanner';
  isDesktop: boolean = true;
  loading:boolean = true
  
  constructor() { }
  
  ngOnInit(): void {  }

  onActivate() {
    this.loading = false;
  }
  
}
