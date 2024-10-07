import employeeModel from "../model/employee.js";

async function updateEmployeeController(req, res) {
    try {
      
        const employeeId = req.params.id; 
        console.log("employeeId", employeeId)
        const { country, accountType, username, lastName, firstName, email, contactNumber } = req.body;
        console.log("Req body:", contactNumber)
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

        const existingEmployee = await employeeModel.findById(employeeId);
        if (!existingEmployee) {
            return res.status(404).json({
                data: [],
                message: 'Employee not found',
                error: true,
                success: false
            });
        }

        const updatedEmployee = await employeeModel.findByIdAndUpdate(employeeId, req.body, {
            new: true, 
            runValidators: true
        });

        return res.status(200).json({
            data: updatedEmployee,
            message: 'Employee updated successfully!',
            error: false,
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: [],
            message: error.message || 'An error occurred while updating the employee',
            error: true,
            success: false
        });
    }
}

export default updateEmployeeController;
