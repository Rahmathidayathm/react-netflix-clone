import React from 'react';
import {
	Box
} from '@material-ui/core';

import Showcase from '../components/landing/Showcase';
import TV from '../components/landing/TV';
import Download from '../components/landing/Download';
import Watch from '../components/landing/Watch';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

const Landing = () => {
	
    return (
        <div>
			<Showcase />
			<Box style={{width: '100%', height: '6px', backgroundColor: '#222222'}}></Box>
			<TV />
			<Box style={{width: '100%', height: '6px', backgroundColor: '#222222'}}></Box>
			<Download />
			<Box style={{width: '100%', height: '6px', backgroundColor: '#222222'}}></Box>
			<Watch />
			<Box style={{width: '100%', height: '6px', backgroundColor: '#222222'}}></Box>
			<FAQ />
			<Box style={{width: '100%', height: '6px', backgroundColor: '#222222'}}></Box>
			<Footer />
        </div>
    );
};

export default Landing;
