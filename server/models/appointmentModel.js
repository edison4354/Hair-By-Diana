const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },

    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;