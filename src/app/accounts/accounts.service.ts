import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Account } from '../common-classes/account';

import { CommonService } from '../services/common.service';
@Injectable()
export class AccountsService {
	  localState;
    accountTotal: Account;
    subscription: Subscription;
    accounts:  Account[];

    constructor(private commonService: CommonService) {}

    addAccount() {
        let accountTotal: Account;    
		let marketValue:any = this.getMarketValue();
		let cash:number = this.getCash(marketValue);
		let legend:string = this.getRandomColor();

		this.localState.accounts.push({name: 'Random Account', marketValue: marketValue, cash: cash, legend: legend});

    	this.localState.accountTotal = this.calcTotals(this.localState.accounts);
        this.commonService.subject.next(this.localState);
  	}

  	setInitialAccounts(){
        let accountTotal: Account
        let accounts: Account[] = [
            {name: 'Brokerage Account3', marketValue: 1999990.00, cash: 1995826.00, legend:this.getRandomColor()},
            {name: 'Account3', marketValue: 1948954.00, cash: 1936954.00, legend:this.getRandomColor()}
          ];
        accountTotal = this.calcTotals(accounts);
        this.localState = {accounts: accounts, accountTotal:accountTotal }
        this.commonService.subject.next(this.localState);
    }

  	private calcTotals(accounts: Account[]){
    		let accountTotal: Account = {
            name: "Total",
            cash:0,
            marketValue:0,
            legend:""
        };

        if(accounts && accounts.length) {
     		accountTotal.cash = 0;
     		accountTotal.marketValue = 0;
          	accounts.forEach((account: Account, index) => {
	            accountTotal.cash = accountTotal.cash + account.cash;
	            accountTotal.marketValue = accountTotal.marketValue + account.marketValue;
            });
        }
        return accountTotal;
    }

  	
  	
    getRandomColor() {
		let colors:Array<string> = [];
		let color:string = this.generateRandomColor();
		while(colors.includes(color)) {
		  	color = this.generateRandomColor();
		}
		return color;
  	}

  	private generateRandomColor() {
		let letters:string = '0123456789ABCDEF';
		let color:string = '#';
		for (var i = 0; i < 6; i++ ) {
		  	color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
  	}

  	private getMarketValue(){
  		return parseInt((Math.random() * 10000000).toFixed(2));
  	}

  	private getCash(marketValue){
  		return (marketValue - 200);
  	}



}
