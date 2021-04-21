/*
File: DummyUsers.js
Description:
     a fake database of users and groups

How to use:
    const db = new DummyUsers();
    db.getu(0) // for geting user0

Author: Van Pham <vnp7514@rit.edu>
        Kenn Taylor
 */
import Account from './backend/Account';

var accounts = []; // List of users and groups

// Basic user
const u0 = new Account({
    isUser: true,
    userName: 'test Name',
    contact: 'email@web.com',
    skills:
        'Drummer, Singer, Guitarist, Pianoist,' +
        ' Formal music education, Songwriting',
    goals: 'pro, looking for producer',
});
// Dummy user
const u1 = new Account({
    isUser: true,
    userName: 'David R',
    contact: 'email2@web.ca',
    skills: 'Drummer, songwriting',
    goals: 'form a band, write songs',
});

// User with an avatar
const u2 = new Account({
    isUser: true,
    userName: 'Adam N',
    contact: 'email2@web.ca',
    skills: 'Bass, music theory',
    goals: 'jam and have fun',
});
// Dummy Group account

const u3 = new Account({
    isUser: false,
    userName: 'Group 1',
    contact: 'group1rules@mail.fr',
    avatar: './backend/logo512.png',
    bio: 'Best group 1 in the world',
    goals: 'Seeking music talents out there',
    location: 'Top of the world',
});
const u4 = new Account({
    isUser: false,
    userName: 'Dummy Group',
    bio: 'Dummy Group',
    collaborators: [u3],
});
// Users that has friends and groups
const u5 = new Account({
    isUser: true,
    userName: 'User4',
    friends: [u0, u1],
    groups: [u3, u4],
    skills: 'piano',
    goals: 'Being a part of the best group',
});
accounts.push(u0, u1, u2, u3, u4, u5);
export default accounts;
