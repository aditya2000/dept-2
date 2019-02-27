import React, { Component } from "react";
import './register.css';
import Navbar from './navbar';
import Grid from '@material-ui/core/Grid';

export default class Register extends Component {
  render() {
    const team = [{image: "img1", name:"Bhagesh Dhankher", work:"President"}, {image: "img2", name:"Sankalp Loomba", work:"Vice President"}, {image: "img3", name:"Preeti", work:"Secretary"}, {image: "img5", name:"Simranh Bhasin", work:"EC Member"}, {image: "img7", name:"Shreya Bucha", work:"EC Member"}, {image: "img9", name:"Aishwarya Arora", work:"EC Member"}, {image: "img13", name:"Tarun Luthra", work:"EC Member"}, {image: "img11", name:"Agampreet Singh", work:"EC Member"}, {image: "img10", name:"Nitish Arya", work:"Group Leader"}, {image: "img12", name:"Priyanshu Agarwal", work:"Group Leader"}, {image: "img4", name:"Aditya Dehal", work:"Developer"}, {image: "img14", name:"Sanchay Singh", work:"Creative Designer"}, {image: "img6", name:"Gagandeep Singh Sahni", work:"Media Head"}, {image: "img8", name:"Mansukh Kaur", work:"PR Head"}]
    return (
      <div className="projects">
        <Navbar/>
        <div className="titleProjects">
          <h3>About us</h3>
          <div className="titleDesc">
            <p>Curieux (French for curious), is the Computer Society of S.G.T.B Khalsa College, University of Delhi.
It was launched on 11th February 2014 under the guidance of Mr. Param Dev Sharma by the 2013 computer science batch of the college. The Society functions under the guidance of an Executive Committee. The members of this Committee are elected by voting members of the Society. Functional heads of the Society are the President, the Vice President and the Secretary.
The wide spectrum of members is committed to the advancement of individual skill set in the fields of computer sciences and engineering, networking, information processing, robotics and related arts and sciences. The society also encourages students from non technical background having keen interest in computers to learn alongside computer personnels. Curieux regularly organizes workshops, seminars and technical talks for the benefit of students and users of IT apart from conducting continuing education and professional development programmes for a focussed audience of budding students. 
It also organizes an Annual Fest that goes by the name PHOENIX which under-sees participation of students from various Universities across Delhi-NCR. 
The membership of the society is open to all students of the college who are selected based an interview.</p>
          </div>
	  
	  <h3>Team</h3>
	  <Grid container spacing={24} className="team">
            {
              team.map((mem) => {
                return(
                  <Grid item xs={12} sm={4} key={Math.random()}>
                    <img src={require("../assets/" + mem.image + ".JPG")} className="image"/>
		    <div className="team-details">
			<p>{mem.name}</p>
		    	<p>{mem.work}</p>
		    </div>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </div>
    );
  }
}
