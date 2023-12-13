const express = require('express');
import {NextFunction, Request, Response} from 'express';
import UserModel from '../models/UserModel';
import passport from '../middlewares/passport';
import {getDays} from '../helpers/authHelpers';
import SellerModel from '../models/SellerModel';
import UserInterface from '../models/UserInterface';
import SellerInterface from '../models/SellerInterface';

const authRouter = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

authRouter.use(
  session({
    secret: 'cats',
    resave: false,
    saveUninitialized: true,
    cookie: {originalMaxAge: getDays(4)},
  })
);

authRouter.use(passport.initialize());
authRouter.use(passport.session());
authRouter.use(express.urlencoded({extended: false}));

authRouter.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    const {username, email, password, profile_image} = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new UserModel();
    try {
      const checkExists = await user.findByQuery({
        $or: [{username: username}, {email: email}],
      });

      if (checkExists) {
        res.status(409).send({error: 'exists'});
        return;
      }
      const register = await user.create({
        username: username,
        email: email,
        password: hashedPassword,
        role: 'Client',
        profile_image: profile_image,
      });
      res.status(200).send(register);
    } catch (err) {
      res.status(500).send({error: err});
    }
  }
);

authRouter.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.isAuthenticated()) {
        const User = req.user as UserInterface & {seller: SellerInterface};

        if (User.seller_id) {
          const getSeller = await new SellerModel().findById(
            User.seller_id.toString()
          );
          const response = {...User.toObject(), seller: getSeller};
          res.send({user: response});
        } else {
          res.send({user: User});
        }
      } else {
        next();
      }
    } catch (err) {
      res.status(500).send({error: err});
    }
  },
  passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure',
  })
);

authRouter.post(
  '/refreshlogin',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.isAuthenticated()) {
        const User = req.user as UserInterface & {seller: SellerInterface};

        if (User.seller_id) {
          const getSeller = await new SellerModel().findById(
            User.seller_id.toString()
          );
          const response = {...User.toObject(), seller: getSeller};
          res.send({user: response});
        } else {
          res.send({user: User});
        }
      } else {
        res.send({user: {role: 'disconnected'}});
      }
    } catch (err) {
      res.status(500).send({error: err});
    }
  }
);

authRouter.post(
  '/logout',
  (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      req.logout(() => {
        res.send({user: req.user});
      });
    } else {
      res.send({user: null});
    }
  }
);

authRouter.get('/success', async (req: Request, res: Response) => {
  const User = req.user as UserInterface & {seller: SellerInterface};

  if (User.seller_id) {
    const getSeller = await new SellerModel().findById(
      User.seller_id.toString()
    );
    const response = {...User.toObject(), seller: getSeller};
    res.send({user: response});
  } else {
    res.send({user: User});
  }
});

authRouter.get('/:id/forgot', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});

authRouter.get('/:id/profile', (req: Request, res: Response) => {
  const profile = new UserModel().findById(req.params.id);
});
authRouter.post('/:id/profile', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});
authRouter.post('/:id/deleteprofile', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});

authRouter.get('/failure', (req: Request, res: Response) => {
  console.log('failure!');
  res.send({user: null});
});

authRouter.get('/check', (req, res) => {
  if (req.user) {
    res.json({isAuthenticated: true, user: req.user});
  } else {
    res.json({isAuthenticated: false});
  }
});

export default authRouter;
