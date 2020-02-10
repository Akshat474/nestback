import {IsNotEmpty, IsAlphanumeric } from 'class-validator';
export class CreateUsersDto{
    readonly name : string;
    @IsNotEmpty()
    @IsAlphanumeric()
    readonly username : string;
    readonly password : string;
    readonly mobile : Number; 
    
}