import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from '../common-classes/account';
import { CommonService } from '../services/common.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnDestroy {

    accountTotal: Account;
    subscription: Subscription;
    accounts:  Account[];

    constructor(private commonService: CommonService) {
        // subscribe to home component accounts
        this.subscription = this.commonService.getAccounts()
            .subscribe((state: {accounts:Account[], accountTotal:Account }) => { 
                this.accounts = state.accounts;
                this.accountTotal = state.accountTotal;
            });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
