import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Account } from '../common-classes/account';

@Injectable()
export class CommonService {
    private initialState;
  	subject = new Subject<{accounts:Account [], accountTotal:Account}>();

  	constructor() { }
 
    getAccounts(): Observable<{accounts:Account [], accountTotal:Account}> {
        return this.subject.asObservable();
    }
    
    notifyNext() {
      this.subject.next(this.initialState);
    }	
}
