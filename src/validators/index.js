import { body } from "express-validator"

const userRegistrationValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),

        body("username")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({ min: 3 }).withMessage("Username should contain atleast 3 characters")
            .isLength({ max: 13 }).withMessage("Username can contain atmost 13 characters")
    ]
}

const userLoginValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),

        body("password")
            .trim()
            .notEmpty().withMessage("Password cannot be empty")
    ]
}

export { userRegistrationValidator, userLoginValidator }