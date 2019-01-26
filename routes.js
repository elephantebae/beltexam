const controller = require("./controller");
const path = require("path");
module.exports = app => {
    app.get("/api/allPets", controller.allPets);
    app.post("/api/newPet", controller.newPet);
    app.put("/api/:id", controller.editPet);
    app.get("/api/:id", controller.getPet);
    app.delete("/api/:id", controller.adoptPet);
    app.put("/api/like/:id", controller.addLike);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}