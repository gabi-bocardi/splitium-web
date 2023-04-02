import http from '../api/http-common';
import type IUser from '../api/interfaces';


type IUserLogin = Omit<IUser, "name">;

export default function Login(data:IUserLogin){
        return http.post('/login', data);
}
