import React from 'react';
import {
	Box,
	Grid,
	Typography,
	Container
} from '@material-ui/core';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import TVImage from '../../../assets/tv.png';


const useStyles = makeStyles(theme => ({
	container: {
		paddingTop: 40,
		height: 'auto',
		width: '100%',
		backgroundColor: '#000'
	},
	gridContainer: {
	},
	textContent: {
		color: '#fff'
	},
	textContentHeading: {
		fontWeight: 'bold',
		marginBottom: 10
	},
	textContentSubHeading: {
		textAlign: 'left',
		fontSize: 23
	},
	contentImage: {
		width: '100%'
	},
	["@media(max-width: 768px)"]: {
		textContent: {
			textAlign: 'center'
		},
		textContentHeading: {
			fontSize: 30
		},
		textContentSubHeading: {
			textAlign: 'center',
			fontSize: 17
		},
		contentImage: {
			width: '60%'
		}
	},
	["@media(max-width: 578px)"]: {
		textContentHeading: {
			fontSize: 23,
		},
		textContentSubHeading: {
			fontSize: 15,
		},
		contentImage: {
			width: '80%'
		}
	}
}))

const TV = () => {
	const classes = useStyles();

    return (
       <Box className={classes.container}>
       		<Container>	
	    		<Grid container display="flex" className={classes.gridContainer} alignItems="center" justify="center">
	    			<Grid item md={5} xs={12}>
						<Typography className={clsx(classes.textContentHeading,classes.textContent)} variant="h4" component="h1">
							Enjoy on your TV.
						</Typography>
						<Typography display="flex" justifyContent="center" className={clsx(classes.textContentSubHeading,classes.textContent)} variant="subtitle1">
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and <br/>	 more.	
						</Typography>
	    			</Grid>
	    			<Grid item md={4} xs={12} style={{ display: 'flex', justifyContent:'center'}}>
						<img className={classes.contentImage} height="100%" src={TVImage} alt=""/>
	    			</Grid>
	    		</Grid>	
       		</Container>
       </Box> 
    );
};


export default TV;
