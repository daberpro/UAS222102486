import { AfterViewInit, Component } from '@angular/core';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';

@Component({
  selector: 'app-mahasiswa',
  standalone: true,
  imports: [],
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css'
})
export class MahasiswaComponent implements AfterViewInit {

  async getData(): Promise<void>{
    const raw = await fetch("https://stmikpontianak.net/011100862/tampilMahasiswa.php");
    const data = await raw.json();

    data.forEach((d : any) =>{

      const row = [
        d["NIM"],
        d["Nama"],
        d["JenisKelamin"],
        d["TempatLahir"] + " " + d["TanggalLahir"],
        d["JP"],
        d["Alamat"],
        d["StatusNikah"],
        d["TahunMasuk"],
      ];
      this.table.row.add(row);

    });
    this.table.draw(false);


  }

  ngAfterViewInit(): void {
    this.table = new DataTable('#mahasiswa',{
      responsive: true,
    });
    this.getData().then().catch(console.error);
  }
  table: any;


}
