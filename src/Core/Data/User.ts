export class User{
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _maidenName: string;
    private _age: number;
    private _gender: boolean; 
    private _email: string;
    private _phone: string;
    private _username: string;
    private _birthDate: Date;
    private _image: string;


    constructor(
        id: number,
        firstName: string,
        lastName: string,
        maidenName: string,
        age: number,
        gender: boolean,
        email: string,
        phone: string,
        username: string,
        birthDate: Date,
        image: string  
    ){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._maidenName = maidenName;
        this._age = age;
        this._gender = gender;
        this._email = email;
        this._phone = phone;
        this._username = username;
        this._birthDate = birthDate;
        this._image = image;
    }

    get id(): number {
        return this._id;
    }
    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string {
        return this._lastName;
    }
    get maidenName(): string {
        return this._maidenName;
    }
    get age(): number {
        return this._age;
    }
    get gender(): boolean {
        return this._gender;
    }
    get email(): string {
        return this._email;
    }
    get phone(): string {
        return this._phone;
    }
    get username(): string {
        return this._username;
    }
    get birthDate(): Date {
        return this._birthDate;
    }
    get image(): string {
        return this._image;
    }    
}

