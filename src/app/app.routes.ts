import { Routes } from '@angular/router';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "mahasiswa",
    pathMatch: "full"
  },
  {
    path: "mahasiswa",
    component: MahasiswaComponent
  }
];
