const express = require('express')
const router = express.Router();
const {
    createAppointment,
    getAppointments,
    getMyAppointments,
    getAppointmentbyId,
    test,
} = require("../controllers/appointmentController.js")

router.route("/").post(createAppointment).get(getAppointments);
router.route("/myappointments").get(getMyAppointments);
router.route("/:id").get(getAppointmentbyId);

module.exports = router;