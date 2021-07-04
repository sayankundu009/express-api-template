const AuthController = require("../../controllers/auth");
const router = require('express').Router();

/**
 * @swagger
 *   tags:
 *     name: Auth
*/

/**
 * @swagger
 * /v1/api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Get user & access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 * /v1/api/auth/varify:
 *   get:
 *     tags: [Auth]
 *     summary: Varify access token
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/varify', AuthController.varify);

module.exports = router;

