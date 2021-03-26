
    toJSON(): UserDTO {
        return {
            "salutation": this.salutation,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "email": this.email,
            "company": this.company,
            "street": this.street,
            "postalCode": this.postalCode,
            "city": this.city,
            "country": this.country
        }
    };

export default interface UserDTO {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
}
