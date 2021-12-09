/* eslint-disable max-len */
'use strict';

const express = require('express');
const {getUserHandler} = require('./controller');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', getUserHandler);

// con este router podemos implementar subrutas en archivos diferentes --> codigo mas modular y legible
// si tuvieramos todas las rutas aca el index tendria muchas responsabilidades, bootear, rootear, buscar users en db, etc. rompe con el single responsability
module.exports = router;
