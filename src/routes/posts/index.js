const PostsController = require("../../controllers/posts");
const router = require('express').Router();

/**
 * @swagger
 *   tags:
 *     name: Posts
*/

/**
 * @swagger
 * /v1/api/posts:
 *   get:
 *     tags: [Posts]
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/', PostsController.showAll);

/**
 * @swagger
 * /v1/api/{id}:
 *   get:
 *     tags: [Posts]
 *     summary: Get a particular post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/:id', PostsController.view);

/**
 * @swagger
 * /v1/api/posts:
 *   post:
 *     tags: [Posts]
 *     summary: Create post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "My amazing post"
 *               description:
 *                 type: string
 *                 example: "Some amazing description for my post"
 *     responses:
 *       200:
 *         description: Created post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/', PostsController.create);

module.exports = router;

