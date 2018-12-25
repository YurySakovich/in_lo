import { Observable, of } from 'rxjs';

export class MockDashboardService {
    getCardDara(): Observable<any> {
        return of([1, 1]);
    }
}