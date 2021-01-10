import React from "react";
import {Consumer} from "./context"
function tracks() {
  return (
   <Consumer>
     {value =>{
         console.log(value)
     }}
   </Consumer>
  );
}
export default tracks;
