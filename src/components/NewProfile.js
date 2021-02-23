import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import Button from '@material-ui/core/Button';

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

function NewProfile(props) {
    const history = useHistory()

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    
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
        axios
            .post("https://agile-dawn-86756.herokuapp.com/api/athlete", athleteInfo)
            .then((res) => {
                console.log(res.data)
                const withoutVKey = Object.fromEntries(
                    Object.entries(res.data).filter(([key, value]) => key !== '__v')
                )
                setFormValues(initialFormValues)
            })
            .catch(err => {
                console.log(err);
            })
    }
  
    const changeHandler = evt => {
      const { name, value, type, checked } = evt.target
      const valueToUse = type === "checkbox" ? checked : value;
      formChange(name, valueToUse);
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
      <form className='form container' onSubmit={formSubmit}>
        <div className='form-group submit'>
          <h2>New Athlete Info</h2>
          <div name="errors" className='errors'>
            <div name="firstNameError">{formErrors.first_name}</div>
            <div name="lastNameError">{formErrors.last_name}</div>
          </div>
        </div>
        <div className='form-group inputs'>
          <label>First Name:&nbsp;
            <input
              value={formValues.first_name}
              onChange={changeHandler}
              name='first_name'
              type='text'
            />
          </label>
          <br></br>
          <label>Last Name:&nbsp;
            <input
              value={formValues.last_name}
              onChange={changeHandler}
              name='last_name'
              type='text'
            />
          </label>
          <br></br>
          <label>Date of Birth:&nbsp;
            <input
              value={formValues.date_of_birth}
              onChange={changeHandler}
              name='date_of_birth'
              type='text'
            />
          </label>
          <br></br>
{/* changeHandler
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
}; */}
          <label>Location:&nbsp;
            <input
                value={formValues.location}
                onChange={changeHandler}
                name='location'
                type='text'
            />
          </label>
          <br></br>
          <label>Team:&nbsp;
            <input
                value={formValues.team}
                onChange={changeHandler}
                name='team'
                type='text'
            />
          </label>
          <br></br>
          <label>Gender:&nbsp;
            <input
                value={formValues.gender}
                onChange={changeHandler}
                name='gender'
                type='text'
            />
          </label>
          <br></br>
          <label>About:&nbsp;
            <input
                value={formValues.About}
                onChange={changeHandler}
                name='About'
                type='text'
            />
          </label>
          <br></br>
          <label>Profile Image:&nbsp;
            <input
                value={formValues.profile_image}
                onChange={changeHandler}
                name='profile_image'
                type='text'
            />
          </label>
          <br></br>
          <label>Interests:&nbsp;
            <input
                value={formValues.interests}
                onChange={changeHandler}
                name='interests'
                type='text'
            />
          </label>
          <br></br><br></br>
          <Button disabled={disabled}>Submit</Button>
        </div>
      </form>
    )
}
  