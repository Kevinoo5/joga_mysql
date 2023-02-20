const con = require('../utils/db')

const getAllAuthorArticles = (req, res) => {
    let query = `SELECT article.*, author.name AS author_name FROM article JOIN author ON article.author_id = author.id WHERE article.author_id = ${req.params.author_id}`;
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err
        articles = result
        let author_name = result[0].author_name
        console.log(author_name)
        res.render("author", {
            articles: articles,
            author_name: author_name
        })
    })
}

module.exports = {getAllAuthorArticles}