import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

page.propTypes={
  title:propTypes.string,
  subText:propTypes.string,
  bgClass:propTypes.string,
}

function page ({title, subText, bgClass}){
return (

  <div>
<section>
<div className={`jumbotron hero-pages d-flex align-items-end ${bgClass}`}>
<div className="container">
<h1>{title}</h1>
<p>{subText}</p>
</div>
</div>
</section>

<div className="container bread-crumbs">
<Link to="/"><i className="fas fa-home"></i></Link> - {title}
</div>

</div>
)}

export default page;