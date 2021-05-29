import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdmissionModel } from 'src/app/shared/model/admission.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  private baseUrl = environment.url + "/api/admission/";

  constructor(private httpClient: HttpClient) { }

  createAdmission(admissionPayload: AdmissionModel): Observable<any> {
    return this.httpClient.post(this.baseUrl, admissionPayload);
  }

  updateAdmission(id: number, admissionPayload: AdmissionModel): Observable<any> {
    return this.httpClient.put(this.baseUrl + id, admissionPayload);
  }

  getAdmissionById(id: number): Observable<AdmissionModel> {
    return this.httpClient.get<AdmissionModel>(this.baseUrl + id);
  }

  getAdmissions(): Observable<Array<AdmissionModel>> {
    return this.httpClient.get<Array<AdmissionModel>>(this.baseUrl);
  }

  deleteAdmission(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + id);
  }
}
