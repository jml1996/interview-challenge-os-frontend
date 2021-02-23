import * as yup from "yup";

export default yup.object().shape({
    first_name: yup
        .string()
        .required("First name required"),
    last_name: yup
        .string()
        .required("Last name required"),
});
