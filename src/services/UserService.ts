import type { IUser } from '@/api/interfaces';
import http from '../api/http-common';

type INewUser = Omit<IUser, "id">;
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
}

export default new UserService();