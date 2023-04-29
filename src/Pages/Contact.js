import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer';
import Page from '../components/page';

function Contact(){
    return(
        <div>
            
            <Navigation />
            <main>
            <Page title="Contact Us" subText="My name is Dinesh" bgClass="contact-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-8">
                    <p>MedCare Hostpital&apos;s is open 24/7 all year round, weekends and holidays inclusive. You can reach us through the following means: </p>
                    <p><strong>Phone</strong><br /><a href="tel:+91955033....">+91 9550334...</a></p>
<p><a href="tel:+817933...">+91817933..</a> <strong>(Ambulance Hotline)</strong></p>
<p><strong>Email</strong><br /></p>
<p><a href="mailto:g817933..@gmail.com">g817933..@gamil.com</a></p>
<p><strong>Physical Address</strong><br />VIZIANAGARAM, <br />KLPURAM metro,<br />elite enclave</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;