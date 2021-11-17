const express = require("express");
const router = express.Router();
const classController = require("./classController");
const { authenticateByJwt } = require("../auth/auth.services");

/* GET users listing. */
router.get("/test/:id", authenticateByJwt, classController.test);
router.get("/", authenticateByJwt, classController.getAllClasses);
router.post("/", authenticateByJwt, classController.createAClass);
router.get("/create-data-sample", classController.createDataSample);
router.get("/:id", authenticateByJwt, classController.getAClass);
router.put("/:id", authenticateByJwt, classController.updateAClass);
router.delete("/:id", authenticateByJwt, classController.deleteAClass);
router.get(
  "/:id/people",
  authenticateByJwt,
  classController.getAllPeopleInClass
);
router.get("/:id/get-join-link", authenticateByJwt, classController.getJoinLink);
router.get("/:id/join", authenticateByJwt, classController.joinStudentToAClass);
router.post(
  "/:id/invite-teachers",
  authenticateByJwt,
  classController.inviteTeachersToAClass
);
router.post(
  "/:id/invite-students",
  authenticateByJwt,
  classController.inviteStudentsToAClass
)
router.get(
  "/:id/accept-invitation",
  authenticateByJwt,
  classController.joinTeacherToAClass
);

module.exports = router;
