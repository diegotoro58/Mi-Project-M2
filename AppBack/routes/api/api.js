import  express  from "express";
import userRoutes from "./users.js"
import beachRoutes from "./beaches.js"

const router = express.Router();

router.use('', userRoutes);
router.use('', beachRoutes);


export default router;