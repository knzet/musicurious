/*
    File: Post.js
    Author: Van Pham <vnp7514@rit.edu>
    Description:
        This class represents a post made by a user
 */
export default class Post {
    constructor(post){
        let {msg, user} = post;
        this.msg = msg;
        this.user = user;
        let date = new Date();
        this.time = "Posted on " + date.getMonth() +
            '/' + date.getDate() + '/' + date.getFullYear() +
            ' ' + date.getHours() + ':' + date.getMinutes();
    }
}