export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export class UserInfo implements User {
    id: number; 
    firstName: string; 
    lastName: string;

    constructor(userId: number, userfirstName: string, userlastName: string) { 
        this.id = userId;
        this.firstName = userfirstName;
        this.lastName = userlastName;
    }
}
