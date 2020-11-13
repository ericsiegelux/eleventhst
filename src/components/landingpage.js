import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import { Link } from 'react-router-dom';
import { About } from './about';
import { HalfAndHalf } from './halfandhalf';

import {projects} from '../imageURL';


class LandingPage extends Component {
	constructor(props) {
	  super(props);
	
	  
	}
	render() {
		console.log(projects[0]["cover_url"])
		return(
			
			<Grid className="projects-grid">
            <Cell col={12}>
			 <div className ="content">
			 <div >

				<Grid className="mdl-grid--no-spacing">

					
				<Cell col={6} id="Cell">
					<Link to="/halfandhalf">
						<div className="content">
							<Card id ="Card" shadow={0} style={{width: '97%'}}>
						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: projects[0]["cover_url"] }}>{projects[0]["name"]}</CardTitle>
							</Card>
						</div>
						</Link>
				</Cell>

				<Cell col={6} id="Cell">
					<Link to="/halfandhalf">
						<div className="content">
							<Card id ="Card" shadow={0} style={{width: '97%'}}>
						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: projects[1]["cover_url"] }}>{projects[1]["name"]}</CardTitle>
							</Card>
						</div>
						</Link>
				</Cell>


			<Cell col={6} id="Cell">
					<Link to="/halfandhalf">
						<div className="content">
							<Card id ="Card" shadow={0} style={{width: '97%'}}>
						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: projects[2]["cover_url"] }}>{projects[2]["name"]}</CardTitle>
							</Card>
						</div>
						</Link>
				</Cell>

			<Cell col={6} id="Cell">
					<Link to="/halfandhalf">
						<div className="content">
							<Card id ="Card" shadow={0} style={{width: '97%'}}>
						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: projects[3]["cover_url"] }}>{projects[3]["name"]}</CardTitle>
							</Card>
						</div>
						</Link>
				</Cell>

{/* 				<Cell col={6} id="Cell"> */}
{/* 					<Link to="/halfandhalf"> */}
{/* 						<div className="content"> */}
{/* 							<Card id ="Card" shadow={0} style={{width: '97%'}}> */}
{/* 						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: 'url(https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/74345222_468611597089403_6525600216625425797_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=XmERDUvGx9sAX8xw5NI&_nc_tp=15&oh=a5b8e05fcff59555b69cd8bcdb082c01&oe=5FB1D4E4 ) center / cover'}}>Liam and HW</CardTitle> */}
{/* 							</Card> */}
{/* 						</div> */}
{/* 						</Link> */}
{/* 				</Cell> */}
{/*  */}
{/* 			<Cell col={6} id="Cell"> */}
{/* 					<Link to="/halfandhalf"> */}
{/* 						<div className="content"> */}
{/* 							<Card id ="Card" shadow={0} style={{width: '97%'}}> */}
{/* 						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: 'url(https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/s320x320/100955186_194707334964205_8239760694266822656_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_ohc=0i4Ofy6hStUAX9xehQa&oh=da16980749a899980121e9f022e2a07f&oe=5FADF2DA) center / cover'}}>Welcome</CardTitle> */}
{/* 							</Card> */}
{/* 						</div> */}
{/* 						</Link> */}
{/* 				</Cell> */}


				</Grid>

				</div>
			</div>
		</Cell>
		</Grid>
		)
	}
}

export default LandingPage;