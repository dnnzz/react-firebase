import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';
import {signOut} from "../firebase";

const CurrentUser = ({ displayName, photoUrl, email, createdAt, children }) => {
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoUrl && <img src={photoUrl} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="profile"><h2>{displayName}</h2></Link>
          <p className="email">{email}</p>
          <p className="created-at">{moment(createdAt).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};



export default CurrentUser;