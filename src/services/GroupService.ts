import type { IGroup, IUser } from '@/api/interfaces';
import http from   '../api/http-common' ;

class GroupService{
    getGroup(groupId: string){
        return http.get(`/groups/${groupId}`);
    }

    addMember(group: IGroup, newMember: {user: IUser, amount: number}){
        const member = {
            groupId: group.id,
            name: newMember.user.name,
            balance: newMember.amount,
            username: newMember.user.username,
        }

        return http.post("/member", member);   
    }
    
    deleteMember(memberId: number){
        return http.delete(`/member/${memberId}`);
    }
    
    deleteGroup(groupId: number){
        return http.delete(`/groups/${groupId}`);
    }
}

export default new GroupService();