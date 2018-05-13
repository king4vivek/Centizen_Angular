import {
  Component,
  OnInit
} from '@angular/core';
import { Customer } from '../models/customer.model'
import { SubscriptionType } from '../models/subscriptiontype.model'
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
  maxDobDate: Date;

  constructor() {
    this.customer = new Customer();
    this.customer.subscriptionTypes = [new SubscriptionType("B", "Basic"), new SubscriptionType("A", "Advanced"), new SubscriptionType("P", "Pro")]
    this.customer.subscription = "A";
    this.maxDobDate = new Date();
    this.maxDobDate.setFullYear(new Date().getFullYear() - 18);
  }

  ngOnInit() {
    this.customerForm = new FormGroup({

      firstName: new FormControl('', [Validators.minLength(2), Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.minLength(2), Validators.maxLength(20)]),
      eMailId: new FormControl('', [Validators.minLength(5), Validators.maxLength(100), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phoneNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.minLength(8), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/), Validators.pattern(/[a-z]/), Validators.pattern(/[_@.#$=!%^)(\]:\*;\?\/\,}{'\|<>\[&\+-]/)]),
      dateOfBirth: new FormControl('', [Validators.required])
    });
  }

  OnDobChange(value: string) {
    this.customer.age = new Date().getFullYear() - new Date(value).getFullYear();
  }

  RegisterCustomer(customerRequest: Customer) {
    console.log(customerRequest.firstName)
  }
}