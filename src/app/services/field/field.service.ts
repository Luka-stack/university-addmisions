import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldModel } from 'src/app/shared/model/field.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private baseUrl = environment.url + "/api/field/"

  constructor(private httpClient: HttpClient) { }

  createField(fieldPayload: FieldModel): Observable<any> {
    return this.httpClient.post(this.baseUrl, fieldPayload);
  }

  updateField(id: number, fieldPayload: FieldModel): Observable<any> {
    return this.httpClient.put(this.baseUrl + id, fieldPayload);
  }

  getFields(): Observable<Array<FieldModel>> {
    return this.httpClient.get<Array<FieldModel>>(this.baseUrl);
  }

  deleteField(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + id);
  }

  getFieldByIdentifier(identifier: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + identifier);
  }
}
