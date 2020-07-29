import React from 'react';
import {
	Box,
	Grid,
	Typography,
	Container
} from '@material-ui/core';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import DownloadImage from '../../../assets/mobile.jpg';


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
		width: '80%'
	},
	["@media(max-width:768px)"]: {
		contentImage: {
			width: '60%'
		},
		textContent: {
			textAlign: 'center',
		},
		textContentHeading: {
			fontSize: 30,
		},
		textContentSubHeading: {
			fontSize: 17
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

const Download = () => {
	const classes = useStyles();

    return (
       <Box className={classes.container}>
       		<Container>	
	    		<Grid container display="flex" className={classes.gridContainer} alignItems="center" justify="center" spacing={5}>
	    			<Grid item md={6} xs={12} style={{ display: 'flex', justifyContent:'center'}}>
						<img className={classes.contentImage} height="100%" src={DownloadImage} alt=""/>
	    			</Grid>
	    			<Grid item md={6} xs={12}>
						<Typography className={clsx(classes.textContentHeading,classes.textContent)} variant="h4" component="h1">
							Download your shows to watch offline.
						</Typography>
						<Typography display="flex" justifyContent="center" className={clsx(classes.textContentSubHeading,classes.textContent)} variant="subtitle1">
							Save your favorites easily and always have <br/>	 something to watch.
						</Typography>
	    			</Grid>
	    		</Grid>	
       		</Container>
       </Box> 
    );
};


export default Download;
