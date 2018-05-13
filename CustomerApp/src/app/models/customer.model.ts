import { SubscriptionType } from '../interfaces/subscriptiontype.interface'
export class Customer {
    firstName: string;
    lastName: string;
    eMailId: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: Date;
    age: number;
    subscriptionTypes: Array< SubscriptionType>;
    subscription: any;
}