// it is component which is used to display the information of a single student


// PropTypes:
//       - PropTypes is a library in React that allows you to specify the types of props that a component should receive. 
//       - it is a mechanism that ensures that the passed value is of the correct datatype.
//    age: PropTypes.number


// defaultProps:
//      - defaultProps is a property in React that allows you to specify default values for props in a component.
//      - it is default values for props in case they are not passed from the parent component.
//        name: "Guest"

import PropTypes from "prop-types";

function Student(props){
    // props is javascript object.
    return(
        <div className="student">
            <p>
                Name: {props.name} <br />
            </p>
            <p>
                Age: {props.age} <br />
            </p>
            <p>
                Is Student: {props.isStudent ? "Yes":"No"} <br />
            </p>
            {/* // make the seperate p tag for each property of the student object to display the information in a structured way. */}
        </div>
    );

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student