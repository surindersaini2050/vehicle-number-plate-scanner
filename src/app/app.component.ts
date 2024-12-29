import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatSharedModule } from './common/mat-shared/mat-shared.module';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, MatSharedModule, HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {
  isDesktop: boolean = true;
  loading:boolean = true;
  menuOptions: any = [
    {name: 'Scan', RouterLink: '/scan', icon: 'camera_alt'},
    {name: 'Scanned List', RouterLink: '/scanned-list', icon: 'list_alt'},
  ]
  
  constructor() { }
  
  ngOnInit(): void {  }

  onActivate() {
    this.loading = false;
  }
  
}
