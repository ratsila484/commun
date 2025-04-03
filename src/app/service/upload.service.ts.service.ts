import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve } from 'node:path';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceTsService {

  private apiUrl = 'http://localhost:8000/upload.php';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(this.apiUrl, formData);
  }

  getFiles(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/liste_file.php');
  }

  // Fonction pour télécharger le fichier
  downloadFile(filename: string): void {
    const link = document.createElement('a');
    link.href = `http://localhost:8000/download.php?filename=${filename}`;
    link.download = filename;
    link.click();
  }

}


