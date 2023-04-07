export interface IUser {
    id: number;
    name: string;
    username: string;
    password: string;
}

export interface IGroup {
    id: number;
    name: string;
    description: string;
    total: number;
    groupMember: IGroupMember[];
    payments: IPayment[];
}

export interface IGroupMember {
    amount: number;
    id: number;
    user: IUser;
}
export interface IPayment {
    userId: string;
    amount: number;
    user: IUser;
}