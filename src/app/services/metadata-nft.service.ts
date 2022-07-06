import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetadataNftService {

  constructor(private http: HttpClient) { }


  /**
   * Obtener ABI por defecto
   * @returns 
   */
  getMetadata(url, id) {
    return new Promise((resolve, reject) => {
      try {
        this.http.get<any>(`${url}/${id}`)
          .subscribe((res: any) => {
            resolve(res);
          })
      } catch (error) {
        alert(JSON.stringify(error))
        reject(error)
      }
    })
  }
}
