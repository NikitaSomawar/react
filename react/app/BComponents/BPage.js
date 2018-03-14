import React from 'react';
import styled from 'styled-components';

const PageCon = styled.div`
    padding: ${ props => props.noPad ? 0 : 20 }px;
`

const BPage = props => {
    return (
        <PageCon {...props}>
            { React.Children.toArray(props.children) }
        </PageCon>
    )
}

export default BPage;