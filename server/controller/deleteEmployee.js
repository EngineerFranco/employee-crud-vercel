import employeeModel from "../model/employee.js";

async function deleteEmployeeController(req,res){
    try {
        const employeeId = req.params.id;

        const employee = await employeeModel.findById(employeeId);
        if (!employee) {
            return res.status(404).json({
                data: [],
                message: 'Employee not found',
                error: true,
                success: false
            });
        }

         await employeeModel.deleteOne({ _id: employeeId });

         res.status(200).json({
            data: [],
            message: 'Employee deleted successfully',
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

export default deleteEmployeeController