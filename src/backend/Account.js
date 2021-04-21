/*
    File: Account.js
    Author: Van Pham <vnp7514@rit.edu>
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
        let bio = user.bio ? user.bio : null; // if we specify a bio in the construction, assume we are making a dummy user
        let { userName, isUser } = user; // fun with js
        if (bio) {
            this.isUser = isUser; // true if this is a user, false if group
            this.userName = userName; // Name of the account
            this.contact = null; // Contact info
            this.avatar = null; // Avatar picture
            this.pictures = []; // Collection of pictures
            this.skills = 'None'; // skills
            this.bio = 'Description...'; // biography
            this.songs = []; // songs

            this.followers = []; // followers
            this.goals = 'None'; // goals for search tool
            this.location = 'Not shown'; // location
            this.posts = []; // posts

            // if this is a group then no friends
            this.friends = isUser ? [] : null; // friends user has
            // if this is a group then no groups
            this.groups = isUser ? [] : null; // list of groups that user is in
            // Only group can have members
            this.members = isUser ? null : [];
            // Only group can have collaborators
            this.collaborators = isUser ? null : [];

            this.addFriend = (user) => {
                this.friends.push(user);
            };
        } else {
            // dummy class so you can populate all fields by passing in a javascript object
            let {
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
            this.skills = skills;
            this.goals = goals;
            this.bio = bio;
            this.songs = songs;
            this.followers = followers;
            this.posts = posts;

            // if this is a group then no friends
            this.friends = isUser ? [] : friends; // friends user has
            // if this is a group then no groups
            this.groups = isUser ? [] : groups; // list of groups that user is in
            // Only group can have members
            this.members = isUser ? null : members;
            // Only group can have collaborators
            this.collaborators = isUser ? null : collaborators;
        }
    }
}
