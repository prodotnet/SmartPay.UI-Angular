// Angular core and necessary services
import { Injectable } from '@angular/core';
import { UserDTO } from '../model/UserDTO';
import { environment } from '../environments/environment.development';
import { UserRegistration } from '../model/UserRegistration';
import { UserLogin } from '../model/UserLogin';
import { map, of, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Makes this service available app-wide
})

export class AccountService {
  // Base API URL for authentication routes
  private readonly API_URL = `${environment.appUrl}/api/Account`;

  // ReplaySubject to hold the latest user info (or null if logged out)
  private userSource = new ReplaySubject<UserDTO | null>(1);

  // Observable for other components to subscribe to the current user state
  user$ = this.userSource.asObservable();

  constructor(
    private http: HttpClient, // Handles HTTP requests
    private router: Router     // Used for navigation
  ) { }

  /**
   * Refresh user session from JWT token.
   * If token is null, set user as null.
   */
  RefreshPage(jwt: string | null) {
    if (jwt === null) {
      this.userSource.next(null);
      return of(undefined); // Return an observable with no value
    }

    // Set Authorization header
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + jwt);

    // Call API to get user from token
    return this.http.get<UserDTO>(`${this.API_URL}/UserToken`, { headers }).pipe(
      map((user: UserDTO) => {
        if (user) {
          this.setUser(user); // Update app with logged in user
        }
      })
    );
  }

  /**
   * Login method
   * Sends login model to backend and sets user on success
   */
  Login(model: UserLogin) {
    return this.http.post<UserDTO>(`${this.API_URL}/Login`, model).pipe(
      map((user: UserDTO) => {
        if (user) {
          this.setUser(user);
        }
      })
    );
  }

  /**
   * Logout method
   * Removes user from localStorage and resets current user observable
   */
  Logout() {
    localStorage.removeItem(environment.userkey);
    this.userSource.next(null);
    this.router.navigateByUrl('/'); // Navigate to home or login
  }


  /**
   * Registration method
   * Sends the user registration model to backend
   */
  register(model: [UserRegistration]) {
    return this.http.post(`${this.API_URL}/Register`, model);
  }

  
  /**
   * Retrieve JWT token from local storage
   * Used for authenticated requests
   */
  getJwt() {
    const key = localStorage.getItem(environment.userkey);

    if (key) {
      const user: UserDTO = JSON.parse(key);
      return user.jwt; // Return the JWT if it exists
    } else {
      return null;
    }
  }

  /**
   * Store user in localStorage and update user observable
   * Used after successful login or refresh
   */
  private setUser(user: UserDTO) {
    localStorage.setItem(environment.userkey, JSON.stringify(user));
    this.userSource.next(user); // Notify subscribers of the new user
  }
}
