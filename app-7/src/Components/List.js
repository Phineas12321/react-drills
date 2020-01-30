import React from 'react'
import Todo from './Todo'

class List extends React.Component{
    render(){
        let list = this.props.tasks.map((e, i)=> <Todo key={i} task={e} /> )

        return(
            <div>
                {list}
            </div>
        )
    }
}

export default List