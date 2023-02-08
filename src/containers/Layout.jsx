import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
		<div className="Layout">
			<Header />
				{children}
			<Footer />
		</div>
    );
};

export default Layout;