import http from '../api/http-common';

class UserService{
    getUser(userId: string){
        return http.get(`/users/${userId}`);
    }

    getUserGroups(userId: string){
        return http.get(`/users/${userId}/groups`);
    }

    getGroup(groupId: string){
        return http.get(`/groups/${groupId}`);
    }
}

export default new UserService();