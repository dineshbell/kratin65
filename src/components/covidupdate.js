import React from 'react';

const iframeStyle = {
    width: '100%',
     minHeight: '700px',
      marginTop: '40px'
}

function covidupdates(){
    return(
        <div>
    <iframe loading="lazy" title="covid data" style={iframeStyle} src="https://www.worldometers.info/coronavirus/"></iframe>
  
        </div>
    );
}

export default  covidupdates;