import employeeModel from "../model/employee.js";

async function addEmployeeController(req, res) {
    try {
        const { country, accountType, username, lastName, firstName, email, contactNumber } = req.body;
        const photo = req.body.photo
        console.log("this is photo:", req.body)
        const validationErrors = [];

        if (!country) validationErrors.push('Invalid country');
        if (!accountType) validationErrors.push('Invalid accountType');
        if (!username) validationErrors.push('Invalid username');
        if (!lastName) validationErrors.push('Invalid lastName');
        if (!firstName) validationErrors.push('Invalid firstName');
        if (!email) validationErrors.push('Invalid email');
        if (!contactNumber) validationErrors.push('Invalid contactNumber');

        if (validationErrors.length > 0) {
            return res.status(400).json({
                data: [],
                message: validationErrors.join(', '),
                error: true,
                success: false
            });
        }

        const existingEmployee = await employeeModel.findOne({ email });
        if (existingEmployee) {
            return res.status(409).json({
                data: [],
                message: 'Employee already exists',
                error: true,
                success: false
            });
        }

        const employeeData = new employeeModel(req.body);
        const savedEmployee = await employeeData.save();

        return res.status(201).json({
            data: savedEmployee,
            message: 'Employee created successfully!',
            error: false,
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: [],
            message: error.message || 'An error occurred while creating the employee',
            error: true,
            success: false
        });
    }
}

export default addEmployeeController;
