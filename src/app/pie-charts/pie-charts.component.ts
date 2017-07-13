import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PieChartsService } from './pie-charts.service';

@Component({
    selector: 'app-pie-charts',
    templateUrl: './pie-charts.component.html',
    styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnDestroy {
    pieChartOptions;
    subscription: Subscription;

    constructor(private PieChartsService: PieChartsService) {
        // subscribe to home component accounts
        this.subscription = this.PieChartsService.getPieChartOptions()
                                .subscribe(pieChartOptions => {
                                    this.pieChartOptions = pieChartOptions;
                                });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
