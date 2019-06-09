"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const post_controller_1 = require("../controllers/post.controller");
router.route('/')
    .get(post_controller_1.getPosts)
    // .get((req, res) => res.json('POSTSSSSSSSS!!!!!!!'));
    .post(post_controller_1.createPosts);
router.route('/:postId')
    .get(post_controller_1.getPost)
    .delete(post_controller_1.deletePost)
    .put(post_controller_1.updatePost);
exports.default = router;
