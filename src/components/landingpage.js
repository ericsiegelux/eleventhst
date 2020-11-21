import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle} from 'react-mdl';
import { Link } from 'react-router-dom';

import {projects} from '../imageURL';


class LandingPage extends Component {
	
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
					<Link to="/limelight">
						<div className="content">
							<Card id ="Card" shadow={0} style={{width: '97%'}}>
						    	<CardTitle style={{display: 'block',color: '#fff', height: '352px', background: projects[1]["cover_url"] }}>{projects[1]["name"]}</CardTitle>
							</Card>
						</div>
						</Link>
				</Cell>


				</Grid>

				</div>
			</div>
		</Cell>
		</Grid>
		)
	}
}

export default LandingPage;