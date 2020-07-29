import React  from 'react';
import {
	Box,
	Container,
	Typography,
	Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: '#000',
		padding: 40
	},
	
}))


const Footer = () => {
	const classes = useStyles();
    return (
       <Box className={classes.container}>
    		<Container maxWidth="md">
    			<Typography variant="subtitle4" style={{color: '#222222'}}>
    				Questions? Call 007-803-321-2130
    			</Typography>
    			<Box mt={3}>
	    			<Grid container spacing={3}>
						<Grid item xs={6} sm={4} md={3}>
							<ul style={{listStyle: 'none'}}>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>FAQ</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Investor Relations</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Privacy</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Speed Test</a></li>
							</ul>
						</Grid>
						<Grid item xs={6} sm={4} md={3}>
							<ul style={{listStyle: 'none'}}>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Help Center</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Jobs</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Cookie Preferences</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Legal Notices</a></li>
							</ul>
						</Grid>
						<Grid item xs={6} sm={4} md={3}>
							<ul style={{listStyle: 'none'}}>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Account</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Ways to Watch</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Corporate Information</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Netflix Originals</a></li>
							</ul>
						</Grid>
						<Grid item xs={6} sm={4} md={3}>
							<ul style={{listStyle: 'none'}}>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Media Center</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Terms of Use</a></li>
								<li style={{marginBottom: 5}}><a href="" style={{color: '#232323', textDecoration: 'none', fontSize: 14}}>Contact Us</a></li>
							</ul>
						</Grid>    				
	    			</Grid>
    			</Box>
    		</Container>
       </Box> 
    );
};


export default Footer;
