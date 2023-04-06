import type { IGroup, IPayment } from "@/api/interfaces";

export function computeGroupBalance(group: IGroup): number {
    let balance = -(group.total);
    group.payments.forEach((payment: IPayment) => {
        balance += payment.amount;
    });
    return balance;
}

