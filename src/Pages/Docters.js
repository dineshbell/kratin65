import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';
import {Link} from 'react-router-dom';
import Pages from '../components/page';

import doc1 from '../properties/properties/images/doc1.jpg';
import doc2 from '../properties/properties/images/doc2.jpg';
import doc3 from '../properties/properties/images/doc3.jpg';

function Doctors(){
    return(
        <div>
            
            <Navigation />
            <main>
            <Pages title="Our TEAM AS" subText="Self-care has been practiced by people worldwide for thousands of years. The ability of individuals, families and communities to promote health, prevent disease, maintain health, and to cope with illness and disability with or without the support of a health worker, is nothing new. But new products, information and technologies are changing â€“ and have the potential to change â€“ how people access healthcare, as well as how they care for themselves and others."
            bgClass="doctors-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                <div className="card-body">
                    <img src={doc1} alt="" className="img-fluid" title="" loading="lazy" />
                   <p className="doctor-name">Prince  K. Ruhella, MD</p>
                   <p className="doctor-specialty">Heart Care</p>
                   <Link to="/" className="btn btn-primary btn-block">Read More</Link>
                </div>
                </div>
                    </div>

                    <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                <div className="card-body">
                    <img src={doc2} alt="" title="" className="img-fluid" loading="lazy" />
                   <p className="doctor-name">Emmanuel Eyram  Kokuvi, MD</p>
                   <p className="doctor-specialty">Orthopedic Care</p>
                   <Link to="/" className="btn btn-primary btn-block">Read More</Link>
                </div>
                </div>
                    </div>

                    <div className="col-md-4">
                    <div className="card shadow-sm">
                <div className="card-body">
                    <img src={doc3} alt="" title="" className="img-fluid" loading="lazy" />
                   <p className="doctor-name">Antugone Chillar, MD</p>
                   <p className="doctor-specialty">General Practioner</p>
                   <Link to="/" className="btn btn-primary btn-block">Read More</Link>
                </div>
                </div>
                    </div>
                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Doctors;