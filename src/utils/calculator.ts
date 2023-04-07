import type { IGroup, IGroupMember, IPayment } from "@/api/interfaces";

export function computeGroupBalance(group: IGroup): number {
    let balance = -(group.total);
    group.payments.forEach((payment: IPayment) => {
        balance += payment.amount;
    });
    return balance;
}
export function computeMemberBalance(member: IGroupMember, payments: IPayment[] ): number {
    let balance = member.amount;
    payments.forEach((payment) => {
        if (member.user.id === payment.user.id) {
            balance -= payment.amount;
        }
    });
    return balance;
}
