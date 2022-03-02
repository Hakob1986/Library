import {check, validationResult} from 'express-validator';

export const validateBook =[
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!'),

    check('author_id')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User number can not be empty!')
    .bail() 
    .isInt()
    .withMessage('User number can not be String!'),

    check('genre_id')
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