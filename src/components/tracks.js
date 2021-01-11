import React, { Component } from 'react'
import {Consumer} from './context'
import Spinner from './loader'
import Track from './track'
 class Tracks extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {value => {console.log("omg",value.track_list);

                      
                        if(value.track_list.length === 0){
                            return <Spinner/>
                        }
                        else {
                           return(
                            <> <h3 className="text-center mb-4">{value.heading}</h3>
                            <div className="row">
                              {value.track_list.map(item => (
                                
                                <Track key={item.track.track_id} track={item.track} />
                                
                              ))}
                            </div></>
                           )
                        }
                    }}
                </Consumer>
                
            </div>
        )
    }
}
export default Tracks;