class TestController {
    index(req, res) {
        res.render('test');
    }
}
module.exports = new TestController();