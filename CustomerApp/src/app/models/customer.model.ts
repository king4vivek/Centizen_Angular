import { SubscriptionType } from '../models/subscriptiontype.model'
export class Customer {
    firstName: string;
    lastName: string;
    eMailId: string;
    phoneNumber: string;
    password: string;
    dateOfBirth: Date;
    age: number;
    subscriptionTypes: Array< SubscriptionType>;
    subscription: any;
}