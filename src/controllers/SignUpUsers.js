class SignUpUsers {
  cadastrar(req, res) {
    return res.send(req.body);
  }

  perfil(req, res) {
    return res.send("Perfil");
  }
}

module.exports = new SignUpUsers();
