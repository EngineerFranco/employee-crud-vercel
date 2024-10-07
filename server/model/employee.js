    import mongoose from "mongoose";

    const employeeSchema = new mongoose.Schema({
        country: String,
        accountType: String,
        username: String,
        lastName: String,
        firstName: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        contactNumber: String,
        photo: {
            type: String,
            required: false
        }
    },{
        timestamps: true
    })

    const employeeModel = mongoose.model("employee", employeeSchema)

    export default employeeModel