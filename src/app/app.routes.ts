import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScannerWindowComponent } from './pages/scanner-window/scanner-window.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    // {path:'home', component: DashboardComponent},
    {path:'home', component: ScannerWindowComponent},
    {path:'**', redirectTo:'home'}
];
