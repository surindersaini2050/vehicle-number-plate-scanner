import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  isDesktop: boolean = true;
  loading:boolean = true;
  menuOptions: any = [
    {name: 'Scan', value: 'scan', icon: 'list_alt'},
    {name: 'Scanned List', value: 'scanned-list', icon: 'camera_alt'},
  ]
  
  constructor() { }
  
  ngOnInit(): void {  }

  onActivate() {
    this.loading = false;
  }
  
}
