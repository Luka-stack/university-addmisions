import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SignUpPayload } from 'src/app/shared/auth/signup.payload';
import { LogInRequestPayload } from 'src/app/shared/auth/login-request.payload';
import { LogInResponsePayload } from 'src/app/shared/auth/login-response.payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.url + '/api/authentication';

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  signup(signupRequest: SignUpPayload): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/register', signupRequest);
  }

  login(loginRequest: LogInRequestPayload): Observable<boolean> {
    return this.httpClient
      .post<LogInResponsePayload>(this.baseUrl, loginRequest)
      .pipe(
        map((data) => {
          this.localStorage.store(
            'authenticationToken',
            data.token
          );
          this.localStorage.store('role', data.role);
          return true;
        })
      );
  }

  logout() {
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('role');
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  isPrivilegeUser() {
    return this.isLoggedIn() && this.localStorage.retrieve('role') === "ADMIN";
  }

  isLoggedIn() {
    return this.getJwtToken() != null;
  }

}
