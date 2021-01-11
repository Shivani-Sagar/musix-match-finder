import React from "react";
//import Tracks from './tracks';
import {Link }from "react-router-dom";
const Track = (props) => {
  const { track } = props;
  console.log("props",props)
  return (
    <div className="col-md-6">
      <div className="card-mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play">Track</i>:{track.track_name}
              <br />
              <i className="fas fa-compact-disc">Track</i>:{track.album_name}
            </strong>
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Track;
