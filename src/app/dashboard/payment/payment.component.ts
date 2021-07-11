import { Component, OnInit } from '@angular/core';
import { StripeToken, StripeSource } from 'stripe-angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  invalidError

  constructor() { }

  ngOnInit() {
  }

  onStripeInvalid(error: Error) {
    console.log('Validation Error', error)
  }

  setStripeToken(token: StripeToken) {
    console.log('Stripe token', token)
  }

  setStripeSource(source: StripeSource) {
    console.log('Stripe source', source)
  }

  onStripeError(error: Error) {
    console.error('Stripe error', error)
  }
}
