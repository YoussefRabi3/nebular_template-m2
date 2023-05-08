import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx' ;


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  data: any[] = [];
  searchTerm: string = '';
  private filteredData: any[] | undefined;

  onFileChange(event: any) {
    /* récupération du fichier excel */
    const target: DataTransfer = event.target;
    if (target.files.length !== 1) throw new Error('Sélectionnez un fichier');

    /* lecture du fichier excel */
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* récupération des données du fichier excel */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* extraction des données de la première feuille */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    };
    reader.readAsBinaryString(target.files[0]);
  }
 /* filterData(): void {
    if (this.searchTerm.trim() === '') {
      // Si la valeur de recherche est vide, affichez toutes les données
      this.filteredData = this.data;
    } else {
      // Sinon, filtrez les données en fonction de la valeur de recherche
      this.filteredData = this.data.filter((item: any) => {
        // Vérifiez chaque colonne de chaque ligne si elle contient la valeur de recherche
        for (let key in item) {
          if (item.hasOwnProperty(key) && item[key].toString().toLowerCase().includes(this.searchTerm.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
  }*/
  ngOnInit(): void {
    // this.filterData();
  }

  onSearchTermChange(): void {
    //this.filterData();
  }





}
