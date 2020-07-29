import React, { useState }  from 'react';
import {
	Box,
	Button,
	Typography,
	TextField,
	Container,
	IconButton
} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';

import background from '../../../assets/bg-jumbotron.jpg';

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: '#000',
		textAlign: 'center',
		padding: 40
	},
	text: {
		color: '#fff'
	},
	textHeading: {
		fontWeight: 'bold',
	},
	boxContainer: {
		maxWidth: '50%'
	},
	box: {
		backgroundColor: '#222222',
		padding: '8px 8px'
	},
	boxText: {
		fontSize: 20,
		textAlign: 'left'
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
	["@media(max-width: 768px)"]: {
		boxText: {
			fontSize: 17
		},
		boxContainer: {
			maxWidth: '80%'
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
	["@media(max-width: 578px)"]: {
		container: {
			textAlign: 'left',
			padding: '40px 0',
		},
		textHeading: {
			fontSize: 23,
			textAlign: 'center'
		},
		box: {
			maxWidth: '100%'
		},
		inputContent: {
			width: '80%'
		},
		boxContainer: {
			maxWidth: '100%',
			marginTop: 40,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'stretch'
		},
		textMembership: {
			fontSize: 15
		}
	}
}))

const data = [
	{
		id: 1,
		title: 'What is Netflix',
		description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
	},
	{
		id: 2,
		title: 'How much does Netflix cost?',
		description: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR49,000 to IDR169,000 a month. No extra costs, no contracts."
	},
];

const Showcase = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

    return (
       <Box className={classes.container}>
    		<Typography variant="h4" component="h1" className={clsx(classes.text,classes.textHeading)}>
    			Frequently Asked Questions
    		</Typography>
    		<center>
    			
	    		<Box className={classes.boxContainer}>
	    			{
	    				data.map(d => (
				    		<Box mt={1}>
				    			<Box display="flex" justifyContent="space-between" alignItems="center" className={classes.box} px={2} py={2}>
					    			<Typography className={clsx(classes.text, classes.boxText)}>
					    				{d.title}
					    			</Typography>
				    				{
										open !== d.id ? (
							    			<Button onClick={() => {
												setOpen(d.id)
												setIsOpen(true)
							    			}}>
												<AddIcon style={{color: '#fff'}} />
							    			</Button>
										) : (
											<Button onClick={() => {
												setOpen(0)
												setIsOpen(false)
											}}>
												<CloseIcon style={{color: '#fff'}} />
											</Button>
										)
				    				}	
				    			</Box>
				    			
				    			<Collapse in={isOpen && open === d.id}>
					    			<Box className={classes.box} mt={0.3} px={2} py={2}>
					    				<Typography className={clsx(classes.text, classes.boxText)}>
					    					{d.description}
					    				</Typography>
					    			</Box>
		    					</Collapse>

				    		</Box>

	    				))
	    			}
					<Box mt={5}>
						<Box>
			    			<Box display="flex" justifyContent="center" className={clsx(classes.textContent, classes.formJumbotron)} mt={2}>
			    				<input placeholder="Email address" type="text" className={classes.inputContent}/>
			    				<a href="#" className={classes.btnContent}>
			    					<Typography>
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
	    		</Box>
    		</center>
       </Box> 
    );
};


export default Showcase;
