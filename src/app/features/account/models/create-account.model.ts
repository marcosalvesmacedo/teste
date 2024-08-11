export interface CreateAccountRequest {
    name: string;
    email: string;
    password: string;
}

export interface CreateAccountResponse {
    success: string; 
    code: string;
    name: string;
    email: string;
}

export interface CreateAccount {
    code: string;
    name: string;
    email: string;
}