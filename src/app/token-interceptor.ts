import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "./services/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        if (req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }

        const jwtToken = this.authService.getJwtToken();

        if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 403) {
                    // logout()
                    // redirect to login()
                }
                else {
                    return throwError(error);
                }
            }));
        }

        return next.handle(req);
    }

    private addToken(req: HttpRequest<any>, jwtToken: string) {
        return req.clone({
            headers:  req.headers.set('Authorization', 'Bearer '+ jwtToken)
        });
    }
}