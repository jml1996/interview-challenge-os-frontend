import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import EditAthleteForm from './EditAthleteForm';

import styled from 'styled-components';

const useStyles = makeStyles({
    main: {
        margin: '0 auto',
        width: '80%',
    },
});

function Athlete(props){
    const classes = useStyles();
    const {athleteInfo, id} = props;
    console.log(athleteInfo._id)
    const [isEditing, setIsEditing] = useState(false)

    return(
        <StyledCardContainer className={classes.main}>
            <Card>
                {
                    isEditing ?
                    <EditAthleteForm setIsEditing={setIsEditing} id={athleteInfo._id} athleteInfo={athleteInfo} />
                    :
                    <CardActionArea>
                        {
                            athleteInfo.profile_image ?
                            <CardMedia 
                                component="img"
                                src={`${athleteInfo.profile_image}`}
                                alt="athlete profile image"
                                style={{ maxWidth: 400 }}
                            /> :
                            null
                        }
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {athleteInfo.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "left"}}>
                                <div> Name: {athleteInfo.first_name} {athleteInfo.last_name}</div>
                                {
                                    athleteInfo.date_of_birth && 
                                    <div>Date of Birth: {athleteInfo.date_of_birth}</div>
                                }
                                {
                                    athleteInfo.gender && 
                                    <div>Gender: {athleteInfo.gender}</div>
                                }
                                {
                                    athleteInfo.location && 
                                    <div>Location: {athleteInfo.location}</div>
                                }
                                {
                                    athleteInfo.team && 
                                    <div>Team: {athleteInfo.team}</div>
                                }
                                {
                                    athleteInfo.sports.length > 0 ?
                                    <div>
                                        Sports: {
                                            athleteInfo.sports.map((sport, index) => {
                                                return <li>{`${sport}`}</li>
                                            })
                                        }
                                    </div> : null
                                }
                                {
                                    athleteInfo.about && 
                                    <div>About: {athleteInfo.about}</div>
                                }
                                {
                                    athleteInfo.interests && 
                                    <div>Interests: {athleteInfo.interests}</div>
                                }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => setIsEditing(true)}>
                                Edit
                            </Button>
                        </CardActions>
                    </CardActionArea>
                }
            </Card>
        </StyledCardContainer>
    )
}

export default Athlete;

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        width: 80%;
        display:block;
        margin:auto;
        padding-top: 5%;
    }
`;