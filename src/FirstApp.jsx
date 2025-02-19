/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {

    // console.log(props);
    

    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>{subTitle}</p>
        </>
        
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}