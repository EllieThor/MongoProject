const express = require("express");
const router = express.Router();

const serversController = require("../controllers/serversController");

router.get("/insertServer", serversController.insertServer);
router.get("/getAllServers", serversController.getAllServers);
// router.post("/updateStatus", serversController.updateStatus);
router.post("/deleteServer", serversController.deleteServer);

module.exports = router;
