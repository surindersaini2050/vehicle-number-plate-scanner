import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScannerWindowComponent } from './pages/scanner-window/scanner-window.component';

export const routes: Routes = [
    {path:'', redirectTo:'scan', pathMatch: 'full'},
    {path:'scanned-list', component: DashboardComponent},
    {path:'scan', component: ScannerWindowComponent},
    {path:'**', redirectTo:'scan'}
];
