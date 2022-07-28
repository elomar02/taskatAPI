let router = require('express').Router()
const Project = require('../modules/porject')


/*
-- get all Projects
*/
router.get('/', async (req,res,next) => {
    try {
        const getProj = await Project.find(req.query).populate({path: 'assingTo'})
        res.json(getProj) 
    } catch (error) {
        next(next)
    }
})
/*
-- add Projects
*/

router.post('/', async (req,res,next) => {
    // console.log(req.body);
    try {
        const postProj = await new Project(req.body).populate({path: 'assingTo'})
        await postProj.save()
        await res.send(postProj)
    } catch (error) {
        next(next)
    }
})
/*
-- edit Projects
*/
router.put('/:id', async (req,res,next) => {
    
    try {
        const editProj = await Project.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate({path: 'assingTo'})
        await res.send(editProj)
    } catch (error) {
        next(next)
    }
})
/*
-- delete Projects
*/
router.delete('/:id', async (req,res,next) => {
    try {
        const deleteProj = await Project.findByIdAndDelete(req.params.id)
        await res.send(deleteProj)
    } catch (error) {
        next(next)
    }
})
module.exports = router