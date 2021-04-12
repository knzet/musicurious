/*
    File: Account.js
    Author: Van Pham <vnp7514@rit.edu>
    Description:
        This is the prototype (class) that represents an Account.
        If isUser is true, this is a User Account.
        Otherwise, it is a Group Account.
 */
function Account(name, isUser){
    this.isUser = isUser; // true if this is a user, false if group
    this.name = name; // Name of the account
    this.contact = null; // Contact info
    this.avatar = null; // Avatar picture
    this.pictures = []; // Collection of pictures
    this.skills = "None"; // skills
    this.bio = "Description..."; // biography
    this.songs = []; // songs

    this.followers = []; // followers
    this.goals = "None"; // goals for search tool
    this.location = "Not shown"; // location
    this.posts = []; // posts

    // if this is a group then no friends
    this.friends = isUser ? [] : null; // friends user has
    // if this is a group then no groups
    this.groups = isUser ? [] : null; // list of groups that user is in
    // Only group can have members
    this.members = isUser ? null : [];
    // Only group can have collaborators
    this.collaborators = isUser ? null : [];
}

export default Account;