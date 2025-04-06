export interface User {
    id: string;
    email?: string | null;
    displayName?: string | null;
    createdAt?: number;
    hobby?: string;
    address?: string;
    phoneNumber?: string;
}

export type UserUpdateData = Partial<Omit<User, 'id' | 'email' | 'createdAt'>>;