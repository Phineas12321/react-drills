import React from 'react'
import '../App.css'

class Image extends React.Component{

    render(){
        return(
            <div>
                <img className='image' src={this.props.url}/>
                <h1 className='text'>0 of 9</h1>
                <p className='text'>no cats found</p>
            </div>
        )
    }
}

export default Image