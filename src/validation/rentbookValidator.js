import {check, validationResult} from 'express-validator';

export const validateRentBook =[
  check('borrow_data')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!'),
    check('return_data')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!'),
  check('userId')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User number can not be empty!')
    .bail() 
    .isInt()
    .withMessage('User number can not be String!'), 
    check('bookId')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User number can not be empty!')
    .bail() 
    .isInt()
    .withMessage('User number can not be String!'), 
  

    
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];