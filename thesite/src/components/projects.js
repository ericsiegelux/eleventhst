import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component {
constructor(props) {
	  super(props);
	
	  
	}
	render() {
		return(
			<Grid>
            <Cell col={12}>
			 <div className ="content">
			 <div >

				<Grid>

					<Cell col={6}>
						<div className="content">
							<Card shadow={0} style={{width: '100%', margin: 'auto'}}>
							    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
							    <CardText>
							        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							        Mauris sagittis pellentesque lacus eleifend lacinia...
							    </CardText>
							</Card>
						</div>
					</Cell>

					<Cell col={6}>
						<div className="content">
							<Card shadow={0} style={{width: '100%', margin: 'auto'}}>
							    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
							    <CardText>
							        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							        Mauris sagittis pellentesque lacus eleifend lacinia...
							    </CardText>
							</Card>
						</div>
					</Cell>


				<Cell col={6}>
						<div className="content">
							<Card shadow={0} style={{width: '100%', margin: 'auto'}}>
							    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
							    <CardText>
							        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							        Mauris sagittis pellentesque lacus eleifend lacinia...
							    </CardText>
							</Card>
						</div>
					</Cell>

				<Cell col={6}>
						<div className="content">
							<Card shadow={0} style={{width: '100%', margin: 'auto'}}>
							    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
							    <CardText>
							        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							        Mauris sagittis pellentesque lacus eleifend lacinia...
							    </CardText>
							</Card>
						</div>
					</Cell>
				</Grid>

				</div>
			</div>
		</Cell>
		</Grid>
		)
	}
}

export default Projects;



