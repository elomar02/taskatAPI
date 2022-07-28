let router = require('express').Router()
const Employee = require('../modules/employee')


/*
-- get all employees
*/
router.get('/', async (req,res,next) => {
    try {
        const getEmp = await Employee.find({})
        res.json(getEmp) 
    } catch (error) {
        next(next)
    }
})
/*
-- add employees
*/
router.post('/', async (req,res,next) => {
    console.log(req.body);
    try {
        const postEmp = await new Employee(req.body)
        await postEmp.save()
        await res.send(postEmp)
    } catch (error) {
        next(next)
    }
})
/*
-- edit employees
*/
router.put('/:id', async (req,res,next) => {
    try {
        const editEmp = await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await res.send(editEmp)
    } catch (error) {
        next(next)
    }
})
/*
-- delete employees
*/
router.delete('/:id', async (req,res,next) => {
    try {
        const deleteEmp = await Employee.findByIdAndDelete(req.params.id)
        await res.send(deleteEmp)
    } catch (error) {
        next(next)
    }
})
module.exports = router