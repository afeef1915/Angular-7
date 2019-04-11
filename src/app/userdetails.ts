
export class Userdetails {
    id: number;
    email: string;
    emailCanonical: string;
    username:   string;
    usernameCanonical:  string;
    password: string;
    enabled:    boolean;
    roles:  string;
    lastLogin: Date;
    salt:   string;  
    confirmationToken: string;
    passwordRequestedAt: Date;
    accessToken: string;
    refreshToken: string;
}