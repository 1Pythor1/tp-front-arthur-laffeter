import { User } from "./User"
import { MALE } from "../constantes";
import type { IEntity } from "../Interfaces/IEntity";

export class UserEntity implements IEntity<User>{
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _maidenName: string;
    private _age: number;
    private _gender: string; //enum
    private _email: string;
    private _phone: string;
    private _username: string;
    private _birthDate: string;
    private _image: string;


    constructor(
        id: number,
        firstName: string,
        lastName: string,
        maidenName: string,
        age: number,
        gender: string,
        email: string,
        phone: string,
        username: string,
        birthDate: string,
        image: string  
    ){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._maidenName = maidenName;
        this._age = age;
        this._gender = gender; //les enum c trop bugger dans ce language trop null, rip
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
    get gender(): string {
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
    get birthDate(): string {
        return this._birthDate;
    }
    get image(): string {
        return this._image;
    }    


    toData(): User {
        return new User(
            this._id,
            this._firstName,
            this._lastName,
            this._maidenName,
            this._age,            
            this._gender == MALE? true : false,
            this._email,
            this._phone,
            this._username,
            new Date(this._birthDate),
            this._image);
    }
}

