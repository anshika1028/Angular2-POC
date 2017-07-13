import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonService } from '../services/common.service';
import { Account } from '../common-classes/account';
import { Subscription } from 'rxjs/Subscription';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnDestroy {

    accountTotal: Account;
    subscription: Subscription;
    accounts:  Account[];

    constructor(
        private commonService: CommonService,
        private accountsService: AccountsService
    ) {
        // subscribe to home component accounts
        this.subscription = this.commonService.getAccounts().subscribe(
            (state: {accounts:Account[], total:Account }) => {
                this.accounts = state.accounts;
                this.accountTotal = state.total;
            });
    }
    
    ngOnInit() {
        this.accountsService.setInitialAccounts();
    }

    addAccount() {
        this.accountsService.addAccount();
    }
    
    refrehAccounts(){
        this.accountsService.setInitialAccounts();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
