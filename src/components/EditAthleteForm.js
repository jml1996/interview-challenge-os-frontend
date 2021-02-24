import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { connect } from "react-redux";

import { editAthlete } from "./../actions";

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Validation from "./NewProfileValidation";

const initialFormValues = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    location: "",
    team: "",
    gender: "",
    sports: [],
    about: "",
    profile_image: "",
    interests: ""
};

const initialFormErrors = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    location: "",
    team: "",
    gender: "",
    about: "",
    profile_image: "",
    interests: ""
};

const initialDisabled = true;

const useStyles = makeStyles({
    profileForm: {
        margin: '0 auto',
        marginTop: '5%',
        width: '80%',
        textAlign: 'center',
        paddingBottom: '3%'
    },
});


function EditAthleteForm(props) {
    const oldInfo = props.athleteInfo
    const id = props.id
    const history = useHistory();
    const classes = useStyles();

    const [formValues, setFormValues] = useState(oldInfo);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    
    useEffect(() => {
        Validation.isValid(formValues).then((valid) => {
            console.log(valid)
            setDisabled(!valid);
        });
    }, [formValues]);

    const formSubmit = evt => {
        evt.preventDefault();
        const athleteInfo = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            date_of_birth: formValues.date_of_birth.trim(),
            location: formValues.location.trim(),
            team: formValues.team.trim(),
            gender: formValues.gender.trim(),
            about: formValues.about.trim(),
            profile_image: formValues.profile_image.trim(),
            interests: formValues.interests.trim(),
            // sports: formValues,
        };
        console.log(id);
        props.editAthlete(id, athleteInfo);
        setFormValues(initialFormValues);
    }
  
    const changeHandler = evt => {
        const { name, value } = evt.target;
        formChange(name, value);
    }

    const formChange = (name, value) => {
        yup
            .reach(Validation, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                });
            });
        setFormValues({ ...formValues, [name]: value });
    };
  
    return (
        <Card className={classes.profileForm}>
            <StyledForm className='form container' onSubmit={formSubmit}>
                <div className='form-group submit'>
                {/* <h2>New Athlete Info</h2> */}
                <div style={{color: "red"}} name="errors" className='errors'>
                    <div name="firstNameError">{formErrors.first_name}</div>
                    <div name="lastNameError">{formErrors.last_name}</div>
                </div>
                <br />
                </div>
                <div className='form-group inputs'>
                    <label>First Name:
                        <br />
                        <input
                        value={formValues.first_name}
                        onChange={changeHandler}
                        name='first_name'
                        type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Last Name:
                        <br />
                        <input
                        value={formValues.last_name}
                        onChange={changeHandler}
                        name='last_name'
                        type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Date of Birth:
                        <br />
                        <input
                        value={formValues.date_of_birth}
                        onChange={changeHandler}
                        name='date_of_birth'
                        type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Location:
                        <br />
                        <input
                            value={formValues.location}
                            onChange={changeHandler}
                            name='location'
                            type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Team:
                        <br />
                        <input
                            value={formValues.team}
                            onChange={changeHandler}
                            name='team'
                            type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Gender:
                        <br />
                        <input
                            value={formValues.gender}
                            onChange={changeHandler}
                            name='gender'
                            type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>About:
                        <br />
                        <input
                            value={formValues.about}
                            onChange={changeHandler}
                            name='about'
                            type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Profile Image:
                        <br />
                        <input
                            value={formValues.profile_image}
                            onChange={changeHandler}
                            name='profile_image'
                            type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <label>Interests:
                        <br />
                        <input
                            value={formValues.interests}
                            onChange={changeHandler}
                            name='interests'
                            type='text'
                        />
                    </label>
                    <br />
                    <br />
                    <button disabled={disabled}>Submit</button>
                </div>
            </StyledForm>
        </Card>
    )
}

export default connect(null, { editAthlete })(EditAthleteForm);

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10%
    img {
        width: 80%;
        display:block;
        margin:auto;
        padding-top: 5%;
    }
`;

const StyledForm = styled.form`
    input {
        width: 200px
    }
`