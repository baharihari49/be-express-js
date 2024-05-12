const express = require('express')
const router = express.Router();
const {CompanyBrancheCompanyDepartments} = require('../models/index')

router.get('/company-branche-company-departments', async (req, res) => {
    const data = await CompanyBrancheCompanyDepartments.findAll()
    res.status(200).json({data})
})

router.get('/company-branche-company-departments/:id', async (req, res) => {
    const id = req.params.id
    const data = await CompanyBrancheCompanyDepartments.findByPk(id)
    res.status(200).json({data})
})

router.post('/company-branche-company-departments/', async (req,res) => {
    try {
        const {
            branch_id,
            departments_id
        } = req.body

        const store = await CompanyBrancheCompanyDepartments.create({
            branch_id,
            departments_id
        })

        res.status(201).json({store, message: 'create succsessfuly'})

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
})

router.put('/company-branche-company-departments/', async (req,res) => {
    try {
        const {
            branch_id,
            departments_id,
            id
        } = req.body
    
    const update = await CompanyBrancheCompanyDepartments.update({
        branch_id,
        departments_id,
    })

    res.status(201).json({update, message: 'update succsessfuly'})
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
})


router.delete('/company-branche-company-departments/', async (req,res) => {
    try {
        const {
            id
        } = req.body

        const data = await CompanyBrancheCompanyDepartments.findByPk(id)

        const destroy = await data.destroy()

        res.status(201).json({destroy, message: 'delete succsess'})

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
})

module.exports = router