import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Story from './components/Story'
import stories from './data'

const Index = () => {
     const [change, setChange] = useState(false);
     const [posts, setPosts] = useState([]);
     const [stories, setStories] = useState([]);
     const listenForPosts = () => {
          firestore.collection(`postsImNotGoingToRead`).onSnapshot((snapshot) => {
               const allPosts = [];
               snapshot.forEach((doc) => allPosts.push(doc.data()));

               setPosts(allPosts);
          })
     }

     const listenForStories = () => {
          firestore.collection(`storiesImNotGoingToRead`).onSnapshot((snapshot) => {
               const allStories = [];
               snapshot.forEach((doc) => allStories.push(doc.data()));

               setStories(allStories);
          });
     }

     useEffect(() => {
          listenForPosts();
          listenForStories();
     }, [])

     return (
          <>
               {change == false ?
                    <App posts={posts} stories={stories} c={change} setC={setChange} /> :
                    <Story set={story} stories={stories} c={change} setC={setChange} />}
          </>
     )
}

ReactDOM.render(
     <Index />, document.getElementById('root')
);