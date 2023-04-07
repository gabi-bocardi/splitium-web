export function avatarText(name: string): string {
    return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2);
}
