/*
File: DummyUsers.js
Description:
     a fake database of users and groups

How to use:
    const db = new DummyUsers();
    db.getu(0) // for geting user0

Author: Van Pham <vnp7514@rit.edu>
 */
import Account from "./backend/Account";

export default function DummyUsers(){
    this.accounts = []; // List of users and groups
    this.getu = (index) => {
        return this.accounts[index];
    };
    // Basic user
    const u0 = new Account({
        isUser: true,
        userName: 'test Name',
        contact: 'email@web.com',
        skills:'Drummer, Singer, Guitarist, Pianoist,' +
            ' Formal music education, Songwriting',
        goals: 'pro, looking for producer'
    });
    // Dummy user
    const u1 = new Account({
        isUser: true,
        userName: 'Dummy User',
        bio: "Dummy User"
    });

    // User with an avatar
    const u2 = new Account({
        isUser: true,
        userName: 'Avatar',
        avatar: './logo.svg',
    })
    // Dummy Group account
    const u3 = new Account({
        isUser: false,
        userName: 'Dummy Group',
        bio: 'Dummy Group'
    });
    const u4 = new Account({
        isUser: false,
        userName: 'Group 1',
        contact: 'group1rules@mail.fr',
        avatar: './backend/logo512.png',
        bio: 'Best group 1 in the world',
        goals: 'Seeking music talents out there',
        location: 'Top of the world',
        collaborators: [u3],
    });
    // Users that has friends and groups
    const u5 = new Account({
        isUser: true,
        userName: 'User4',
        friends: [u0,u1],
        groups: [u3,u4],
        skills: 'piano',
        goals: 'Being a part of the best group'
    });
    this.accounts.push(u0,u1,u2,u3,u4,u5);
}