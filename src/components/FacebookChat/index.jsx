import React, { useEffect } from 'react';

const FacebookChat = () => {
  useEffect(() => {
    if (typeof FB !== 'undefined') {
      FB.XFBML.parse();
    }
  }, []);


  return (


<div
  className="fb-customerchat"
  attribution="setup_tool"
  page_id="103208382784818"
></div>


  );
};

export default FacebookChat;
