import React, { Component } from 'react'

const Context = React.createContext();
export  class Provider extends Component {
    state ={
       track_list :[{track :{track_name:'124'}} ,{track: {track_name:'466'}}]
    }
    render() {
        return (
            <div>
                <Context.Provider  value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;