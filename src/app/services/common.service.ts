import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Account } from '../common-classes/account';

@Injectable()
export class CommonService {
    private initialState;
  	subject = new Subject<{accounts:Account [], total:Account}>();

  	constructor() { }
 
    getAccounts(): Observable<{accounts:Account [], total:Account}> {
        return this.subject.asObservable();
    }
    
    notifyNext() {
      this.subject.next(this.initialState);
    }	
}
