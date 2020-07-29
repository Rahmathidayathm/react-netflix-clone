import React from 'react';
import {
	Box,
	Grid,
	Typography,
	Container
} from '@material-ui/core';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import DeviceImage from '../../../assets/device.png';


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
		width: '120%'
	},
	["@media(max-width: 768px)"]: {
		textContent: {
			textAlign: 'center'
		},
		textContentHeading: {
			fontSize: 30
		},
		textContentSubHeading: {
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

const Watch = () => {
	const classes = useStyles();

    return (
       <Box className={classes.container}>
       		<Container>	
	    		<Grid container display="flex" className={classes.gridContainer} alignItems="center" justify="center" spacing={5}>
	    			<Grid item md={5} xs={12}>
						<Typography className={clsx(classes.textContentHeading,classes.textContent)} variant="h4" component="h1">
							Watch everywhere.
						</Typography>
						<Typography display="flex" justifyContent="center" className={clsx(classes.textContentSubHeading,classes.textContent)} variant="subtitle1">
							Stream unlimited movies and TV shows on <br/> your phone, tablet, laptop, and TV.
						</Typography>
	    			</Grid>
	    			<Grid item md={4} xs={12} style={{ display: 'flex', justifyContent:'center'}}>
						<img className={classes.contentImage} height="100%" src={DeviceImage} alt=""/>
	    			</Grid>
	    		</Grid>	
       		</Container>
       </Box> 
    );
};


export default Watch;
