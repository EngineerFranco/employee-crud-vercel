import employeeModel from "../model/employee.js";

async function getEmployeeController(req, res) {

    try {
     
        const employees = await employeeModel.find({});
        
        if (!employees.length) {
            return res.status(404).json({
                data: [],
                message: 'No employees found',
                error: false,
                success: true
            });
        }
        
        res.status(200).json({
            data: employees,
            message: 'Employees retrieved successfully!',
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

export default getEmployeeController;
