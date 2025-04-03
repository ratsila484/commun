import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

 // constructor() { }
  private apiUrl = 'http://192.168.137.1/ftp/createFolder.php';

  constructor(private http: HttpClient) {}

  createFolder(data: { name: string, status: string } | null): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
