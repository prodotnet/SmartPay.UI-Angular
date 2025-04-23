// Data Transfer Object for user information returned from the backend

export interface UserDTO {
    firstName: string; // The user's first name
    lastName: string;  // The user's last name
    email: string;     // The user's email address
    jwt: string;       // JSON Web Token used for authentication
}
