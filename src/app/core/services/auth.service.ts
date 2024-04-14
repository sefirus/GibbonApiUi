import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {TokensResponse} from "../models/auth/TokenResponseModel";
import {UserService} from "./user.service";
import moment from "moment";
import { jwtDecode } from 'jwt-decode';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenUrl: string = `${environment.authBaseUrl}/connect/token`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
  };
  login$: Subject<TokensResponse> = new Subject<TokensResponse>();

  constructor(private http: HttpClient, private userService: UserService) {
  }

  public login(email: string, password: string): Observable<TokensResponse> {
    const body = new URLSearchParams();
    body.set('username', email);
    body.set('password', password);
    body.set('grant_type', 'password');
    body.set('client_id', 'angular_client');
    body.set('client_secret', 'angular_client_secret');
    body.set('scope', 'apiAccess offline_access');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<TokensResponse>(this.tokenUrl, body.toString(), httpOptions).pipe(
      tap(tokenResponse => {
        this.setSession(tokenResponse); // Ensure this method is implemented
        this.login$.next(tokenResponse); // Ensure this Observable is declared
      }),
      catchError((error) => {
        console.error('Error in login:', error);
        return throwError(error); // Re-throw the error so that the subscribe's error handler can catch it
      })
    );
  }

  // public register(registerForm : RegisterFormModel) : Observable<User> {
  //   return this.userService.registerClient(registerForm)
  // }

  public sendRefreshRequest(refreshToken:string){
    let body = new URLSearchParams();
    body.set('grant_type', "refresh_token");
    body.set('client_id', "angular_client");
    body.set('client_secret', "angular_client_secret");
    body.set('refresh_token', refreshToken);
    body.set('scope', 'apiAccess offline_access')

    return this.http.post<TokensResponse>(this.tokenUrl, body, this.httpOptions)
  }

  private setSession(response:TokensResponse) {
    const tokenResponse = response as TokensResponse;
    const expiresAt = moment().add(tokenResponse.expires_in,'second');

    localStorage.setItem('access_token', tokenResponse.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    localStorage.setItem('token_type', tokenResponse.token_type);

    if (tokenResponse.refresh_token != null)
      localStorage.setItem('refresh_token', tokenResponse.refresh_token);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('token_type');
    localStorage.removeItem('refresh_token');
  }

  public getUserId(){
    const tokenStr = localStorage.getItem('access_token');
    if (tokenStr != null){
      try{
        const bearerToken : any = jwtDecode(tokenStr);
        return bearerToken.sub;
      }
      catch(err){
        return null;
      }
    }
  }

  public getRole(){
    const tokenStr = localStorage.getItem('access_token');
    if (tokenStr != null){
      try{
        const bearerToken : any = jwtDecode(tokenStr);
        return bearerToken.role;
      }
      catch(err){
        return null;
      }
    }
  }

  public isInRole(role:string){
    return role === this.getRole();
  }

  public getAccessToken(){
    return localStorage.getItem('access_token');
  }

  public setAccessToken(accessToken:string){
    localStorage.setItem('access_token', accessToken);
  }

  public setRefreshToken(refreshToken:string){
    localStorage.setItem('refresh_token', refreshToken);
  }

  public getRefreshToken(){
    return localStorage.getItem('refresh_token');
  }

  public isAuthorized(): boolean {
    const isExists = localStorage.getItem('access_token') != null;
    return isExists && moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    if (expiration != null){
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    return null;
  }
}
