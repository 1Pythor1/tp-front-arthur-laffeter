import { User } from "./User"
import { MALE } from "../constantes";

export class UserEntity{
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


    toUser(): User {
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

