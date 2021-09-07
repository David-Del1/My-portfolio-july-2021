import React, {useState} from 'react';
import {MainLayout, InnerLayout} from '../styles/Layout';
import Title from '../Components/Title';
import portfolios from '../data/portfolio.js';
import Menu from '../Components/Menu';


function PortfoliosPage() {
    const [menuItem] = useState(portfolios);

    return (
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
