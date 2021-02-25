import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import { postNewAthlete } from "./../actions";

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


function NewProfile(props) {
    const classes = useStyles();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    useEffect(() => {
        Validation.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    const formSubmit = evt => {
        evt.preventDefault();
        const athleteInfo = {
            first_name: formValues.first_name,
            last_name: formValues.last_name,
            date_of_birth: formValues.date_of_birth,
            location: formValues.location,
            team: formValues.team,
            gender: formValues.gender,
            about: formValues.about,
            profile_image: formValues.profile_image,
            interests: formValues.interests,
            sports: formValues.sports,
        };
        props.postNewAthlete(athleteInfo);
        props.history.push("/athletes");
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

    const multiChange = evt => {
        const value = evt.target.value
        setFormValues({ ...formValues, sports: [...formValues.sports, value] });
    }
  
    return (
        <Card className={classes.profileForm}>
            <StyledForm className='form container' onSubmit={formSubmit}>
                <div className='form-group submit'>
                <h2>New Athlete Info</h2>
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
                    <div>
                    <label>
                        Sports:
                        <br />
                        <select style={{width: "200px"}} multiple={true} value={formValues.sports} onChange={multiChange}>
                            <option value="Golf">Golf</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Cricket">Cricket</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Baseball">Baseball</option>
                            <option value="American Football">American Football</option>
                            <option value="Aquatics">Aquatics</option>
                            <option value="Archery">Archery</option>
                            <option value="Automobile Racing">Automobile Racing</option>
                            <option value="Badminton">Badminton</option>
                            <option value="Beach Volleyball">Beach Volleyball</option>
                            <option value="Bobsleigh">Bobsleigh</option>
                            <option value="Body Building">Body Building</option>
                            <option value="Boxing">Boxing</option>
                            <option value="Cross Country Running">Cross Country Running</option>
                            <option value="Cross Country Skiing">Cross Country Skiing</option>
                            <option value="Curling">Curling</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Darts">Darts</option>
                            <option value="Decathlon">Decathlon</option>
                            <option value="Down Hill Skiing">Down Hill Skiing</option>
                            <option value="Equestrianism">Equestrianism</option>
                            <option value="eSports">eSports</option>
                            <option value="Fencing">Fencing</option>
                            <option value="Field Hockey">Field Hockey</option>
                            <option value="Figure Skating">Figure Skating</option>
                            <option value="Gymnastics">Gymnastics</option>
                            <option value="Ice Hockey">Ice Hockey</option>
                            <option value="Martial Arts">Martial Arts</option>
                            <option value="Mixed Martial Arts">Mixed Martial Arts</option>
                            <option value="Modern Pentathlon">Modern Pentathlon</option>
                            <option value="Motorcycle Racing">Motorcycle Racing</option>
                            <option value="Netball">Netball</option>
                            <option value="Polo">Polo</option>
                            <option value="Racquetball">Racquetball</option>
                            <option value="Rowing">Rowing</option>
                            <option value="Rugby">Rugby</option>
                            <option value="Sailing">Sailing</option>
                            <option value="Softball">Softball</option>
                            <option value="Shooting">Shooting</option>
                            <option value="Skateboarding">Skateboarding</option>
                            <option value="Skeet Shooting">Skeet Shooting</option>
                            <option value="Skeleton">Skeleton</option>
                            <option value="Snow Boarding">Snow Boarding</option>
                            <option value="Soccer (Football)">Soccer (Football)</option>
                            <option value="Squash">Squash</option>
                            <option value="Surfing">Surfing</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Track and Field">Track and Field</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <button disabled={disabled}>Submit</button>
                    </div>
                </div>
            </StyledForm>
        </Card>
    )
}

export default connect(null, { postNewAthlete })(NewProfile);

const StyledForm = styled.form`
    input {
        width: 200px
    }
`
