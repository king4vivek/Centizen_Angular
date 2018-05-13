import {
  Component,
  OnInit
} from '@angular/core';
import { Customer } from '../models/customer.model'
import { SubscriptionType } from '../interfaces/subscriptiontype.interface'
import {
  FormGroup, FormControl, FormBuilder, Validators
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public customer: Customer;
  customerForm: FormGroup;

  constructor() {
    this.customer = new Customer();
    this.customer.subscriptionTypes = [new SubscriptionType("B", "Basic"), new SubscriptionType("A", "Advanced"), new SubscriptionType("P", "Pro")]
    this.customer.subscription = "A";
  }

  ngOnInit() {
    this.customerForm = new FormGroup({

      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      eMailId: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      phoneNumber: new FormControl(),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      dateOfBirth: new FormControl()
    });
  }

  RegisterCustomer(customer) {
    console.log(customer)
  }
}