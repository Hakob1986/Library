import {check, validationResult} from 'express-validator';

export const validateGenre =[
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail(),
    
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];