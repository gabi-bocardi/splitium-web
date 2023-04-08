import type { IGroup, IUser } from '@/api/interfaces';
import http from   '../api/http-common' ;

class GroupService{
    getGroup(groupId: string){
        return http.get(`/groups/${groupId}`);
    }

    addMember(group: IGroup, newMember: {user: IUser, amount: number}){
        const member = {
            user: newMember.user,
            group,
            amount: newMember.amount,
        }

        return http.post("/member", member);   
    }
    
    deleteMember(groupId: number, memberId: number){
        return http.delete(`/group/${groupId}/member/${memberId}`);
    }
       
}

export default new GroupService();