import { Injectable } from '@angular/core';

import { Account } from '../common-classes/account';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { CommonService } from '../services/common.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class PieChartsService {

    accountTotal: Account;
    subscription: Subscription;
    accounts:  Account[];
    private subject = new Subject<Account>();

	constructor(private commonService: CommonService) {
	    this.subscription = this.commonService.getAccounts().subscribe(
	    	(state: {accounts:Account[], total:Account }) => { 
	        	this.accounts = state.accounts;
	        	this.populatePieChart(this.accounts);
	    	}
	    );
	}

	getPieChartOptions(): Observable<Account> {
	    return this.subject.asObservable();
	}
	
  	private populatePieChart(accounts: Account[]){
  		let pieChartData: (number | string | object)[][];
      	let pieChartOptions;

    	pieChartData = [[
         	{label: 'Name', role: 'domain'}, 
          	{label: 'Cash %', role: 'data'}
      	]];

      	if(accounts && accounts.length) {
            accounts.forEach((account:Account, index) => {
        			pieChartData.push([
          				account.name,
          				account.cash
        			]);
            });

            pieChartOptions = {
                chartType: 'PieChart',
                dataTable : pieChartData,
                options: {
                  chartArea: {width: 400, height: 400},
                  height:300,
                  slices: accounts
                              .reduce((acc, curr, i) => { 
      	                        	acc[i] = {color: curr.legend}; 
      	                        	return acc
                            	}, {
                            		  0: {color: accounts[0].legend}
                            	})
                }
            };
        }
        this.subject.next(pieChartOptions);
    }
}
