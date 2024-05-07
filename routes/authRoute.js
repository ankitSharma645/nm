import express from 'express'
import {registerController,loginController,testController,forgotPasswordController} from'../controllers/authController.js'
import { requireSignIn ,isAdmin} from '../middlewares/authMiddleware.js';
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN ||POST
router.post('/login',loginController)


//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


//test routers
router.get('/test',requireSignIn,isAdmin,testController)

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
export default router
