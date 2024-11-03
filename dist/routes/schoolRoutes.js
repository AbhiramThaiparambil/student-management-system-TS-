"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SchoolManager_1 = require("../models/SchoolManager");
const schoolManager = new SchoolManager_1.SchoolManager();
const route = (0, express_1.Router)();
route.get('/');
exports.default = route;
