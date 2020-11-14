import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';

import {HAH_obj} from '../imageURL';


class HalfAndHalf extends Component {

	render() {
		return(
			
			<Grid className="projects-grid">
            <Cell col={12}>
			 <div className ="content">
			 <div >

				<Grid className="mdl-grid--no-spacing">

					
				<Cell col={6} id="imgdiv">
					
						<div id="project_div">
								<img id="projimg" src={HAH_obj[0]["url"]} style={{width: '90%'}} alt="pic1"></img>
						</div>
				</Cell>

				<Cell col={6} id="Cell">
						<div id="project_div">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Pulvinar 
								mattis nunc sed blandit libero volutpat sed cras ornare. Habitasse platea dictumst vestibulum 
								rhoncus.<br/><br/>

								At lectus urna duis convallis. Turpis egestas integer eget aliquet nibh 
								praesent tristique magna. Arcu non odio euismod lacinia at quis. Mattis
								vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultrices vitae 
								auctor eu augue ut lectus arcu. 
							</p>
						</div>
				</Cell>

				<Cell col={6} id="imgdiv">
						<div id="project_div">
								<img id="projimg" src={HAH_obj[1]["url"]} alt="pic1"></img>
						</div>
				</Cell>

				<Cell col={6} id="Cell">
						<div id="project_div">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Pulvinar 
								mattis nunc sed blandit libero volutpat sed cras ornare. Habitasse platea dictumst vestibulum 
								rhoncus.<br/><br/>

								At lectus urna duis convallis. Turpis egestas integer eget aliquet nibh 
								praesent tristique magna. Arcu non odio euismod lacinia at quis. Mattis
								vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultrices vitae 
								auctor eu augue ut lectus arcu.et netus et malesuada 
								fames ac turpis. Eget gravida cum sociis natoque. 
							</p>
						</div>
				</Cell>

				<Cell col={6} id="imgdiv">
						<div id="project_div">
								<img id="projimg" src={HAH_obj[2]["url"]} alt="pic1"></img>
						</div>
				</Cell>

				<Cell col={6} id="Cell">
						<div id="project_div">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Pulvinar 
								mattis nunc sed blandit libero volutpat sed cras ornare. Habitasse platea dictumst vestibulum 
								rhoncus.<br/><br/>

								At lectus urna duis convallis. Turpis egestas integer eget aliquet nibh 
								praesent tristique magna. Arcu non odio euismod lacinia at quis. Mattis
								vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultrices vitae 
								auctor eu augue ut lectus arcu.et netus et malesuada 
								fames ac turpis. Eget gravida cum sociis natoque. 
							</p>
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

export default HalfAndHalf;