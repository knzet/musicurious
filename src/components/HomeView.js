/*
    File: HomeView.js
    Author: Van Pham <vnp7514@rit.edu>
    Description:
        This is responsible for rendering the home page
 */
import React from 'react';
import Post from "./Post";

export default class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            // a list of posts from friends, groups, members, collaborators
            feed: [],
            // the text for the section where a new post is made
            newText: '',
        };
        this.handleSubmitInMakePost = this.handleSubmitInMakePost.bind(this);
        this.handleChangeInMakePost = this.handleChangeInMakePost.bind(this);
    }

    /*
    This updates the text for the new post section
     */
    handleChangeInMakePost(event){
        this.setState({newText: event.target.value});
    }

    /*
    This handles the creation of a new post and attached it to the current user
     */
    handleSubmitInMakePost(event){
        this.state.feed.splice(0,0,
            new Post({user: this.state.user, msg: this.state.newText}));
        this.setState({newText: ""});
        event.preventDefault();
    }

    /*
    This makes a form that looks like a post text box
     */
    renderMakePost(){
        return (
            <div className={'NewPost'}>
              <form onSubmit={this.handleSubmitInMakePost}>
                  <label>
                      New Post:
                      <br />
                      <textarea value={this.state.newText}
                                placeholder={'What you are thinking ...'}
                                onChange={this.handleChangeInMakePost}
                                required/>
                      <br />
                  </label>
                  <input type="submit" value="Post"/>
              </form>
            </div>
        );
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
                this.state.feed.splice(0,0, post);
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
            this.state.feed.splice(0,0, post);
        }
        if (this.state.user.isUser){
            this.addPost(this.state.user.friends);
            this.addPost(this.state.user.groups);
        } else {
            this.addPost(this.state.user.members);
            this.addPost(this.state.user.collaborators);
        }
    }

    /*
    This renders a post
    Params:
        post    the post to render
        index   the id of the post according to the state.feed
     */
    renderPost(post, index){
        return(
            <div className={'Post'} key={'Post'+index}>
            <div className={'DisplayName'}
                 onClick={() => {
                     this.props.handleProfileClick(this.state.user)
                 }}
            >
                {post.user.userName}
            </div>
            <div className={'PostContent'}>
                {post.msg}
            </div>
            <div className={'Timestamp'}>
                {post.time}
            </div>
        </div>
        );
    }

    render(){
        if (this.state.feed.length === 0) {
            this.getFeed();
        }
        return (
            <div className={'PostContainer'}>
                {this.renderMakePost()}
                {this.state.feed.map((post,index) => (
                    this.renderPost(post, index)
                ))}
            </div>
        );
    }

}
