const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    stylist: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
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