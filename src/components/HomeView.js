/*
    File: HomeView.js
    Author: Van Pham <vnp7514@rit.edu>
    Description:
        This is responsible for rendering the home page
 */
import React from 'react';

export default class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            // a list of posts from friends, groups, members, collaborators
            feed: [],
        };
    }

    /*
    This function gets all the users in the list. Then for each user,
    it pushes all the posts that user has onto the current user's feed.
    Parameters:
        list - a list of users/accounts
     */
    addPost(list) {
        for (let user of list) {
            for (let post of user.posts) {
                this.state.feed.push(post);
            }
        }
    }

    /*
    This function gets all the posts in the account's network and
    push it onto the feed. This will add the current account's posts
    as well.
     */
    getFeed(){
        for (let post of this.state.user.posts) {
            this.state.feed.push(post);
        }
        if (this.state.user.isUser){
            this.addPost(this.state.user.friends);
            this.addPost(this.state.user.groups);
        } else {
            this.addPost(this.state.user.members);
            this.addPost(this.state.user.collaborators);
        }
    }

    render(){
        if (this.state.feed.length === 0) {
            this.getFeed();
        }
        return (
            <div className={'PostContainer'}>
                {this.state.feed.map((post,index) => (
                    <div className={'Post'} key={'Post'+index}>
                        <div className={'DisplayName'}>
                            {post.user.userName}
                        </div>
                        <div className={'PostContent'}>
                            {post.msg}
                        </div>
                        <div className={'Timestamp'}>
                            {post.time}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

}
