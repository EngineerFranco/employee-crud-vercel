import employeeModel from "../model/employee.js";

async function getEmployeeByIDController(req, res) {
    try {
        const id = req.params.id;
        console.log(id);

        const employee = await employeeModel.findById(id);

    
        if (!employee) {
            return res.status(404).json({
                data: [],
                message: 'No employee found',
                error: false,
                success: true
            });
        }

       
        res.status(200).json({
            data: employee, 
            message: 'Employee retrieved successfully!',
            error: false,
            success: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: [],
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export default getEmployeeByIDController;
