/*
    File: Account.js
    Author: Van Pham <vnp7514@rit.edu>
            Kenn Taylor <kat6106@rit.edu>
    Description:
        This is the prototype (class) that represents an Account.
        If isUser is true, this is a User Account.
        Otherwise, it is a Group Account.
 */

export default class Account {
    //JavaScript doesn't have function overloading, sadly so there can only be one constructor.
    // to fake an overload, I want a constructor that just takes an object, so we can set all the member vars at once.
    // hopefully this is self explanatory

    // constructor(name, isUser) {
    constructor(user) {
        let {
            isUser,
            contact,
            avatar,
            userName,
            goals,
            pictures,
            skills,
            bio,
            songs,
            followers,
            posts,
            friends,
            groups,
            members,
            collaborators,
        } = user;

        this.userName = userName;
        this.contact = contact;
        this.avatar = avatar;
        this.pictures = pictures;
        this.skills = skills === undefined ? 'None' : skills;
        this.goals = goals === undefined ? 'None' : goals;
        this.bio = bio === undefined ? 'Description...' : bio;
        this.songs = songs;
        this.followers = followers === undefined ? [] : followers;
        this.posts = posts === undefined ? [] : posts;
        this.isUser = isUser;

        // if this is a group then no friends
        this.friends = isUser ? (friends === undefined ? [] : friends) : null; // friends user has
        // if this is a group then no groups
        this.groups = isUser ? (groups === undefined ? [] : groups) : null; // list of groups that user is in
        // Only group can have members
        this.members = isUser ? null : (members === undefined ? [] : members);
        // Only group can have collaborators
        this.collaborators = isUser ? null : (collaborators === undefined ? [] : collaborators);
    }
}
