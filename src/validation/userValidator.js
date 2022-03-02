import {check, validationResult} from 'express-validator';

export const validateUser =[
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!'),
  check('lastname')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User lastname can not be empty!'),
  check('number')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User number can not be empty!')
    .bail() 
    .isInt()
    .withMessage('User number can not be String!'), 
  check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User email can not be empty!')
    .bail()
    .isEmail()
    .normalizeEmail()
    .withMessage('User email can not be corect!'),
  check('city')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User city can not be empty!')
    .bail()
    .isString()
    .withMessage('User city can not be numer!')
    .bail(),

    
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];