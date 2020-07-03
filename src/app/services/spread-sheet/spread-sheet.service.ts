import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Company, Tag } from 'src/app/interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class SpreadSheetService {

  constructor(public http: HttpClient) { }

  getSheetData(): Observable<Company[]> {

    const url = 'https://sheets.googleapis.com/v4/spreadsheets/1ptje2D1-3WiOmLUMMflPkVl0uYxp5oejD5BE6Z7oDDA?key=AIzaSyCqyQdEJUNg97kQ7HBM91ppmrqXbXIoc60&includeGridData=true';
    return this.http.get(url).pipe(
      map((res: any) => {
        const rowData = res.sheets[0].data[0].rowData;
        const returnArray: Company[] = [];
        if (rowData && rowData.length > 0) {
          for (let entry = 1; entry < rowData.length; entry++) {
            if (rowData[entry].values[0].formattedValue == 'FALSE') {
              break;
            }
            const row = rowData[entry].values;
            const tags = [] as Tag[];
            row[6].formattedValue.split(',').forEach((tag) => {
              tags.push({ name: tag });
            });
            let company = {
              name: row[1].formattedValue,
              websiteUrl: row[2].formattedValue,
              websiteDisplay: row[3].formattedValue,
              email: row[4].formattedValue,
              product: row[5].formattedValue,
              tags: tags,
              img: `/assets/imgs/${row[7].formattedValue}`,
              location: row[8].formattedValue,
              delivery: row[9].formattedValue,
              about: 'TODO abouts',
            } as Company;
            returnArray.push(company);
          }
        }
        return returnArray;
      })
    );
  }
}
