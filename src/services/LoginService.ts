import http from '../api/http-common';
import type {IUser} from '../api/interfaces';


type IUserLogin = Omit<IUser, "name">;

class LoginService{

        login(data: IUserLogin){
                return http.post('/login', data);
        }
}

export default new LoginService();
