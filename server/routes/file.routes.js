const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");
const fileController = require("../controllers/file.controller");

router.post("", authMiddleware, fileController.createDir);
router.post("/upload", authMiddleware, fileController.uploadFile);
router.get("", authMiddleware, fileController.getFiles);
router.get("/search", authMiddleware, fileController.searchFile);
router.get("/download", authMiddleware, fileController.downloadFile);
router.delete("", authMiddleware, fileController.deleteFile);

module.exports = router;
