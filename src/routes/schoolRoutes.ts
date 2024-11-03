import {Router} from 'express';
import { SchoolManager} from '../models/SchoolManager';
import { Students } from '../models/students';
import { teacher } from '../models/teacher';
import schoolControllers from '../controllers/schoolControllers'
const schoolManager=new SchoolManager()

const route=Router();

route.get('/')



export default route;