import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecializationModel } from 'src/app/shared/model/specialization.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  private baseUrl = environment.url + '/api/specialization/';

  constructor(private httpClient: HttpClient) { }

  createSpecialization(specPayload: SpecializationModel): Observable<any> {
    return this.httpClient.post(this.baseUrl, specPayload);
  }

  getSpecializations(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getSpecializationByIdentifier(identifier: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/name/"+ identifier);
  }

  deleteSpecialization(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + id);
  }

  updateSpecialization(id: number, specPayload: SpecializationModel): Observable<any> {
    return this.httpClient.put(this.baseUrl + id, specPayload);
  }
}
