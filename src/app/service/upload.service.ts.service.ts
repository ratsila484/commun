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
    return this.http.get<any>('https://127.0.0.1:5000/api/files');
  }

  // Fonction pour télécharger le fichier
  downloadFile(filename: string): void {
    const link = document.createElement('a');
    link.href = `http://192.168.0.253:5000/api/download?filename=${filename}`;
    link.download = filename;
    link.click();
  }

}


