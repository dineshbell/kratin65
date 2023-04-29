import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';
import PagesHero from '../components/page';

function About(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="About Us" subText="Thank you my name is Dinesh my native is Vizianagaram" bgClass="about-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-10">
                    <p> i completed my graduation in 2018 with specialization of Electrical and electronics engineering at MVGR College of engineering college Vizianagaram, about my family my father is a Police(Head Constable). my is a homemaker and my brother is Sr Electrical Engineer Indira Gandhi International Airport Delhi. I learned technologies like Python ,HTML, CSS, javascripts,react.js,Nodejs with the help of  CCBP programming and  I have developed  foodmuch demo project using technologies html,css and  i have been developing moviesapp project using  technology reactjs. </p>
<p>Remember that small changes can make a big difference in improving health and well-being. Encourage Sunita Sharma to make gradual changes that she can maintain over time, and seek the advice of a medical professional before making any significant lifestyle changes.</p>

                    </div>
                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;