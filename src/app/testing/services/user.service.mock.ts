import { Observable, of } from 'rxjs';
 
export class MockUserService {
  getUserInfo(): Observable<any> {
    return of({});
  }
}