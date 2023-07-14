import React from "react";
import { Link } from "react-router-dom";

function Done() {
  return (
    <div>
      <div>
        <img className="sucess" src="images/jjj.jpeg" />
      </div>

      <div className="btn_refresh">
       <Link to="/"> <button type="button" className="refresh">
          CLICK ME FOR GO BACK
        </button></Link>
      </div>
    </div>
  );
}

export default Done;
