const express = require('express');
const router = express.Router();
const {CompanyInformation, User, CompanyBranch, CompanyDepartments} = require('../models/index')


router.post('/company-departments', async (req, res) => {
    try {
        const {
            name,
            responsibilities,
            branch_id
        } = req.body;
        
        // Simpan pengguna ke database
        const data = await CompanyDepartments.create({
            name,
            responsibilities,
            branch_id
        });

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.put('/company-departments', async (req, res) => {
    try {
        const {
            name,
            responsibilities,
            branch_id,
            id
        } = req.body;
        
        const departments = await CompanyDepartments.findByPk(id)

        const data = await departments.update({
            name,
            responsibilities,
            branch_id
        });

        res.status(201).json({ data , message: 'update berhasil'});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.get('/company-departments', async (req, res) => {
    const data = await CompanyDepartments.findAll({
        include: [
            {model: CompanyBranch}
        ]
    });

    res.status(200).json({ data });
});

router.get('/company-departments/:id', async (req, res) => {
    const id = req.params.id
    const data = await CompanyDepartments.findByPk(id, {
        include: [
            {model: CompanyBranch}
        ]
    });

    res.status(200).json({ data });
});

router.delete('/company-departments/', async (req, res) => {
    const {id} = req.body
    const data = await CompanyDepartments.findByPk(id);

    const destroy =  await data.destroy()

    res.status(200).json({ destroy, message: 'berhasil di hapus' });
});



module.exports = router