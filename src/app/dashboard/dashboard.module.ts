import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { StripeModule } from "stripe-angular";
import { MixChartComponent } from './mix-chart/mix-chart.component'

const components = [
  DashboardPageComponent,
  PaymentComponent,
  MixChartComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StripeModule.forRoot("...YOUR-STRIPE-KEY-HERE...")
  ]
})
export class DashboardModule { }
