import React  from 'react'
import './stories.css'
import CreateStore from './createStore/CreateStore.jsx'
import Story from './allStories/Story'
function Stories (){
    return(
        <div>
            <div className='stories'>
                <CreateStore/>
                <Story />
            </div>
        </div>
    )
}

export default Stories