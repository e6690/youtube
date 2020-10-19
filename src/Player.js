import React from "react";

const Player = (props) => {
  return (
    <div className="item">
      <div>
        <img
          className="ui medium circular image"
          src={props.imageUrl}
          alt={props.name}
        />
      </div>

      <div className="middle aligned content">
        <div className="description">
         
            <i
              onClick={props.votePlayer.bind(this, props.id)}
              className="large caret up icon"
              style={{cursor:'pointer'}}
            />
            {props.votes}
          
          <p>{props.name}</p>
        </div>
        <div className="extra">
          <span className="partie">partie:</span>
          <img
            src={props.partieUrl}
            className="ui avatar image" 
            alt={props.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
