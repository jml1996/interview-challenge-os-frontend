import * as yup from "yup";

export default yup.object().shape({
    first_name: yup
        .string()
        .required("First name required"),
    last_name: yup
        .string()
        .required("Last name required"),
    date_of_birth: yup
        .string()
        .nullable(true),
    location: yup
        .string()
        .nullable(true),
    team: yup
        .string()
        .nullable(true),
    gender: yup
        .string()
        .nullable(true),
    about: yup
        .string()
        .nullable(true),
    profile_image: yup
        .string()
        .nullable(true),
    interests: yup
        .string()
        .nullable(true),
    // sports: yup
    //     .string(),
});
