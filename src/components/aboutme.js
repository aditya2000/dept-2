import React, { Component } from "react";
import './aboutme.css';
import Navbar from '../components/navbar';
import Grid from '@material-ui/core/Grid';

export default class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme">
        <Navbar/>
        <div className="titleAbout">
          <h3>Events</h3>
          <div className="titleEvents">
            <div className="whizQuiz">
              <h4>WhizQuiz</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/whizQuiz.jpg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <p><i>“You can mass-produce software; you can mass-produce software; you can mass-produce the human mind”</i></p>
                <p>Are you a computer wizard? It’s time to Boost up the programmer inside you and stand a chance to win exciting cash prizes.</p>
                <a href="https://goo.gl/KmhB3G" style={{color: "white"}} target="_blank">Register</a>
                </Grid>
              </Grid>
            </div>
            <div className="confondo">
              <h4>Confundo</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/confondo.jpg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p><i>“The solution often turns out more beautiful than the puzzle"<br/> ~ Richard Dawkins</i></p>
                  <p>Are you a computer wizard? It’s time to Boost up the programmer inside you and stand a chance to win exciting cash prizes.</p>
                  <a href="http://confundo.curieux.in" style={{color: "white"}} target="_blank">Register</a>
                </Grid>
              </Grid>
            </div>
            <div className="kryptos">
              <h4>Kryptos</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/kryptos.jpeg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p><i>“Problem solving is hunting. It is savage pleasure and we are born to it."<br/> ~ Thomas Harris</i></p>
                  <p>Are you a computer wizard? It’s time to Boost up the programmer inside you and stand a chance to win exciting cash prizes.</p>
                  <a href="https://goo.gl/forms/jFe4ha9pDDF8Iquu1" style={{color: "white"}} target="_blank">Register</a>
                </Grid>
              </Grid>
            </div>
            <div className="lanisters">
              <h4>LANisters</h4>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <img src={require("../assets/lanisters.jpeg")} alt="Pheonix"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p><i>“Video games are bad for you? That's what they said about rock-n-roll."<br/> ~ Shigeru Miyamoto</i></p>
                  <p>Are you a gaming wizard? It’s time to Boost up the gamer inside you and stand a chance to win exciting cash prizes.</p>
                  <a href="https://goo.gl/forms/cDripb9k2YYCc7iI2" style={{color: "white"}} target="_blank">Register</a>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}