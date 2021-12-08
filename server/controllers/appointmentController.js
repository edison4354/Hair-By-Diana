const Appointment = require("../models/appointmentModel.js")
const asyncHandler = require("express-async-handler")
const user = require("../models/userModel.js")

const createAppointment = asyncHandler(async(req, res) => {
    const { user, date, timeSlot, barber } = req.body;
    const AppointmentExists = await Appointment.findOne({
        date,
        timeSlot,
        barber,
    });

    if (AppointmentExists) {
        res.status(400);
        throw new Error("Timeslot is already taken with this barber");
    }
    const appointment = await Appointment.create({
        user,
        date,
        timeSlot,
        stylist,
    });
    if (appointment) {
        res.status(201).json({
            user: appointment.user,
            date: appointment.date,
            timeSlot: appointment.timeSlot,
            barber: appointment.barber,
            id: appointment._id,
        });
    } else {
        res.status(400);
        throw new Error("Invalid Appointment data");
    }
});

const getAppointments = asyncHandler(async(req, res) => {
    const appointments = await Appointment.find({}).populate("user", "name");

    res.json(appointments);
});

const getAppointmentbyId = asyncHandler(async(req, res) => {
    const appointment = await Appointment.findById(req.params.id).populate(
        "stylist",
        "name"
    );
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404);
        throw new Error("appointment not found");
    }
});

const getMyAppointments = asyncHandler(async(req, res) => {
    const appointments = await Appointment.find({ user: req.user.id });
    res.json(appointments);
});

const test = asyncHandler(async(req, res) => {
    res.send("test");
});

module.exports = {
    createAppointment,
    getAppointments,
    getMyAppointments,
    getAppointmentbyId,
    test,
};