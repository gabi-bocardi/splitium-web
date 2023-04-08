import type { IGroup, IUser } from '@/api/interfaces';
import http from '../api/http-common';

type INewUser = Omit<IUser, "id">;
type INewGroup = Omit<IGroup, "id"| "groupMember"| "payments">;
class UserService{
    getUser(userId: string){
        return http.get(`/users/${userId}`);
    }

    getUserGroups(userId: string){
        return http.get(`/users/${userId}/groups`);
    }

    addUser(newUser: INewUser){
        return http.post('/users', newUser);
    }
    createGroup(group: INewGroup){
        return http.post('/groups', group);
    }
}

export default new UserService();