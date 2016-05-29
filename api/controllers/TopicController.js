/**
 * TopicController
 *
 * @description :: Server-side logic for managing Topics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    unsubscribe: function (req, res) {

        res.set('Content-Type', 'application/json');
        var jsonResponse = {};

        if (req && req.params && req.params.name) {

            Topic.find({name: req.params.name}).exec(function(err, topic) {
                if (err) return res.serverError(err);
                if (req.isSocket) {
                    Topic.unsubscribe( req, _.pluck(topic, 'id') );
                }
                return res.ok();
            });

        } else {
            jsonResponse.msg = 'name param not found';
        }
        return res.send(jsonResponse);
    }
};

