const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  // Post.create({ ...body, userId: req.session.userId })
  Post.create({ 
    title: req.body.title, 
    content: req.body.body, 
    userId: req.session.userId 
  })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    
    if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
    }
    } catch(err) {
      res.status(500).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id
      },
    });
    
    if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
    }
    } catch(err) {
      res.status(500).json(err);
    }
});

module.exports = router;