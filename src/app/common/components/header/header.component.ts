import { CommonModule } from '@angular/common';
import { MatSharedModule } from '../../mat-shared/mat-shared.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, MatSharedModule],
})
export class HeaderComponent implements OnInit {
  @Input() parentRef: any;
  @Output() toggleClick = new EventEmitter<any>();

  ngOnInit(): void { }

}
