import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSharedModule } from '../../mat-shared/mat-shared.module';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatSharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
