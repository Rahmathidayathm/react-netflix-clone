import React from 'react';
import {
	Box,
	Button,
	Typography,
	TextField
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import background from '../../../assets/bg-jumbotron.jpg';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		width: '100%',
		height: '100vh',
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		'&::after': {
			content: `''`,
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.2)',
		    zIndex: 1,
		    boxShadow: 'inset 120px 100px 250px #000, inset -120px -100px 250px #000'
		}
	},
	header: {
		height: 50,
		position: 'relative',
		zIndex: 2,
	},
	content: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
		zIndex: 2,
	},
	textContent: {
		textAlign: 'center',
	},
	textContentHeading: {
		fontWeight: 'bold',
		color: '#fff'
		// fontSize: 
	},
	textContentSubHeading: {
		color: '#fff',
		fontSize: 23
	},
	inputContent: {
		width: 400,
		padding: 20,
		backgroundColor: '#fff',
		fontSize: 15,
		border: 'none',
		'&:focus': {
			borderColor: '#3f51b5',
		}
	},
	btnContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 17,
		color: '#fff',
		fontSize: 25,
		letterSpacing: 1.3,
		width: 200,
		backgroundColor: 'red',
		textDecoration: 'none',
	},
	textMembership: {
		marginTop: 10,
		color: '#fff'
	},
	["@media (max-width:768px)"]: {
		textContentHeading: {
			fontSize: 40
		},
		textContentSubHeading: {
			fontSize: 20
		},
		formJumbotron: {
			flexDirection: 'column',
			alignItems: 'center'
		},
		btnContent: {
			marginTop: 10,
			padding: 10,
			width: 150
		}
	},
	["@media(max-width:578px)"]: {
		textContentHeading: {
			fontSize: '130%'
		},
		textContentSubHeading: {
			fontSize: '100%'
		},
		inputContent: {
			height: 10,
			width: '80%'
		},
		btnContent: {
			width: '70%',
		},
		textBtn: {
			fontSize: '50%'
		},
		textMembership: {
			fontSize: 17,
		},
		container: {
			height: 450,
			'&::after': {
				content: `''`,
				backgroundColor: 'rgba(0,0,0,0.5)',
				boxShadow: 'none'
			}
		},
		content: {
			top: '50%',
			left: 0,
			transform: 'translateY(-50%)'
		}
	}	

}))

const Showcase = () => {
	const classes = useStyles();
	const tablet = useMediaQuery('(max-width:768px)');
    return (
       <Box className={classes.container}>
    		<Box display="flex" alignItems="center" className={classes.header} justifyContent="space-between" py={2} px={3}>
    			<img style={{width: '12%'}} src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
    			<Button color="secondary" variant="contained" size={tablet ? 'small' : 'medium'}>Sign in</Button>
    		</Box>   
    		<Box className={classes.content} >
    			<Typography variant="h3" component="h1" className={clsx(classes.textContent, classes.textContentHeading)}>
    				Unlimited movies,TV shows, and more.
    			</Typography>
    			<Typography variant="subtitle1" component="p" className={clsx(classes.textContent, classes.textContentSubHeading)}>
    				Watch anywhere. Cancel anytime.
    			</Typography>
    			<Box display="flex" justifyContent="center" className={clsx(classes.textContent, classes.formJumbotron)} mt={2}>
    				<input placeholder="Email address" type="text" className={classes.inputContent}/>
    				<a href="#" className={classes.btnContent}>
    					<Typography className={classes.textBtn}>
    						GET STARTED
    					</Typography>
    					<ArrowForwardIosIcon />
    				</a>
    			</Box>
    			<Typography variant="subtitle3" component="p" className={clsx(classes.textContent, classes.textMembership)}>
    				Ready to watch? Enter your email to create or restart your membership
    			</Typography>
    		</Box>	
       </Box> 
    );
};


export default Showcase;
