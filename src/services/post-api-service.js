import config from '../config';
import TokenService from './token-service';

const PostsApiService = {

  getAllPosts(){
    return fetch(`${config.API_ENDPOINT}/`, {
      header: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
    .then(res => 
      (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
         )
  },
  getPosts(postId) {
    return fetch(`${config.API_ENDPOINT}/post/${postId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postArticle(post){
    console.log(TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/post`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(post),
    })
    .then()
},
  getPostComments(postId) {
    return fetch(`${config.API_ENDPOINT}/post/${postId}/comments`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(postId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        post_id: postId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default PostsApiService