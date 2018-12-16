export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
}

export class UserInfo implements IUser {
    id: number; 
    firstName: string; 
    lastName: string;

    constructor(userId: number, userfirstName: string, userlastName: string) { 
        this.id = userId;
        this.firstName = userfirstName;
        this.lastName = userlastName;
    }
}
