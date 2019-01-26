const model = require("./models");
module.exports = {
    allPets: function (req, res) {
        model.find({}, null, { sort: { petType: 1 } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newPet: function (req, res) {
        model.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    editPet: function (req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, context: 'query' })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getPet: function (req, res) {
        model.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    adoptPet: function (req, res) {
        model.deleteOne(({ _id: req.params.id }))
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addLike: function (req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}