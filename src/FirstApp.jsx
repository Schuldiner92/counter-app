
import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    // console.log(props);    

    return (
        <>
            <div data-testid="test-title">{title}</div>
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>        
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Jhon Sánchez',
    subTitle: 'No hay subtítulo',
    // title:'No hay título',
}