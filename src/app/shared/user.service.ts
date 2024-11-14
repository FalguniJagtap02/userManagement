import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private usersKey = 'users'; // Key for localStorage

  constructor() { 
    try {
      if (!this.getUsers().length) {  // Initialize with data only if empty
        const initialUsers = [
          { "id": 1, "name": "John Doe", "email": "john.doe@example.com", "role": "Admin" },
          { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com", "role": "User" },
          { "id": 3, "name": "Alice Johnson", "email": "alice.johnson@example.com", "role": "Admin" },
          { "id": 4, "name": "Bob Brown", "email": "bob.brown@example.com", "role": "User" },
          { "id": 5, "name": "Charlie Davis", "email": "charlie.davis@example.com", "role": "User" },
          { "id": 6, "name": "David Miller", "email": "david.miller@example.com", "role": "Admin" },
          { "id": 7, "name": "Eva White", "email": "eva.white@example.com", "role": "User" },
          { "id": 8, "name": "Frank Green", "email": "frank.green@example.com", "role": "Admin" },
          { "id": 9, "name": "Grace Harris", "email": "grace.harris@example.com", "role": "User" },
          { "id": 10, "name": "Henry Clark", "email": "henry.clark@example.com", "role": "User" },
          { "id": 11, "name": "Isabella Lewis", "email": "isabella.lewis@example.com", "role": "Admin" },
          { "id": 12, "name": "Jack Walker", "email": "jack.walker@example.com", "role": "User" }
        ];
        this.setUsers(initialUsers);
      }
    } catch (error) {
      console.error('Error initializing user data:', error);
    }
  }

  // Get all users from local storage
  getUsers() {
    try {
      const users = localStorage.getItem(this.usersKey);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error retrieving users from local storage:', error);
      return []; // Return empty array on error
    }
  }

  // Save users to local storage
  setUsers(users: any[]) {
    try {
      localStorage.setItem(this.usersKey, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users to local storage:', error);
      alert('Failed to save data. Please check your storage capacity.');
    }
  }

  // Add a new user
  addUser(user: any) {
    try {
      const users = this.getUsers();
      user.id = users.length ? Math.max(...users.map((u: { id: any; }) => u.id)) + 1 : 1; // Assign a new unique ID
      users.push(user);
      this.setUsers(users);
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user.');
    }
  }

  // Update an existing user
  updateUser(id: number, updatedUser: any) {
    try {
      const users = this.getUsers();
      const index = users.findIndex((user: { id: number; }) => user.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        this.setUsers(users);
      } else {
        console.warn(`User with id ${id} not found.`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  }

  // Delete a user
  deleteUser(id: number) {
    try {
      let users = this.getUsers();
      const newUsers = users.filter((user: { id: number; }) => user.id !== id);
      if (newUsers.length === users.length) {
        console.warn(`User with id ${id} not found.`);
      }
      this.setUsers(newUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user.');
    }
  }
}
