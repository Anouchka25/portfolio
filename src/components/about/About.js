import React, {Component} from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
  this.state = {
    first: 'Anouchka',
    last: 'MINKOUE OBAME',
    address: 'Rue Rétimare, Imm.Adolphe Adam N°42 - 76190 Yvetot',
    email: 'contact@toutpaie.fr',
    bio: 'Fondatrice de ToutPaie.fr 📲App mobile 🛒Marketplace /📍Géolocalisation - { }Web dev - 📣Marketing digital',
    socials: {
      twitter: "https://twitter.com/obamea",
      facebook: "https://www.facebook.com/minkoueobame",
      github: "https://github.com/Anouchka25",
      linkedin: "https://www.linkedin.com/in/minkoueobame/"
    }
  }
  }
render() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div className="w-100">
      <h1 className="mb-0">{this.state.first}
        <span className="text-primary">  {this.state.last}</span>
      </h1>
      <div className="subheading mb-5">{this.state.address} 
        <a href="mailto:{this.state.email}">  {this.state.email}</a>
      </div>
      <p className="lead mb-5">{this.state.bio}</p>
      <div className="social-icons">
        <a href={this.state.socials.linkedin}>
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href={this.state.socials.github}>
          <i className="fab fa-github"></i>
        </a>
        <a href={this.state.socials.twitter}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href={this.state.socials.facebook}>
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  </section>

  )

}

}