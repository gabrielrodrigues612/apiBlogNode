class PostsController {
  async posts(req, res) {
    let posts = await db.find();
    return res.send(posts);
  }

  async create(req, res) {
    return res.send(req.body);
  }

  post(req, res) {
    return res.send(req.params.id);
  }
}

module.exports = new PostsController();
