import React, { useEffect, useState } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import Athlete from "./Athlete";

import { fetchAllAthletes } from "./../actions";

function Athletes(props) {

    useEffect(() => {
        props.fetchAllAthletes();
    }, []);

    return (
        <div style={{ textAlign: "center", marginBottom:0 }}>
            <h2>Registered Athletes</h2>
            {
                props.isLoading ? (
                    <div>Loading...</div>
                ) : (
                    props.allAthletes.map((athleteInfo, id) =>
                        <Athlete key={id} athleteInfo={athleteInfo} />
                    )
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        allAthletes: state.allAthletes,
    };
};

export default connect(mapStateToProps, { fetchAllAthletes })(Athletes);