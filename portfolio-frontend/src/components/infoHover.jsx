import React from "react";

export default function InfoHover({text}){

    return(
        <>
        <div className="info-container">
      {/* 🛈 Info icon */}
      <span className="info-icon" aria-label="Information">🛈</span>
      
      {/* Info content box */}
      <div className="info-text-box">
        {text}
      </div>
    </div>
        </>
    )//return


}//infoHover
    
