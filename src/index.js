import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Story from './components/Story'
import stories from './data'

const Index = () => {
     const [change, setChange] = useState(false);
     const [story, setStory] = useState(0)

     return (
          <>
               {change == false ?
                    <App sets={setStory} stories={stories} c={change} setC={setChange} /> :
                    <Story set={story} sets={setStory} {...stories[story]} c={change} setC={setChange} />}
          </>
     )
}

ReactDOM.render(
     <Index />, document.getElementById('root')
);