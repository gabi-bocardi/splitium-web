import http from   '../api/http-common' ;

class GroupService{
    getGroup(groupId: string){
        return http.get(`/groups/${groupId}`);
    }
    addMember(){
        
    }
}

export default new GroupService();