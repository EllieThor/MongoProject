const express = require("express");
const router = express.Router();

const serversController = require("../controllers/serversController");

router.get("/insertServer", serversController.insertServer);
// router.get("/deleteServer", serversController.deleteUser);
router.post("/updateStatus", serversController.updateStatus);
router.get("/getAllServers", serversController.getAllServers);

module.exports = router;
