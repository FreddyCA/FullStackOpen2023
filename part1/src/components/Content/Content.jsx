import PropTypes from "prop-types";

const Content = (props) => {

    const content = props.parts.map((value,index) => <p key={index}>{value.name} {value.exercises}</p>)
    
    return (
        <>
        {content}
        </>
    )
}

Content.propTypes = {
    parts: PropTypes.array.isRequired,
    
};

export default Content