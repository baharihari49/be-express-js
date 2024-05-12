const express = require('express');
const router = express.Router();
const {CompanyInformation, User, CompanyBranch, CompanyDepartments} = require('../models/index')


router.get('/company-branches', async (req, res) => {
    const data = await CompanyBranch.findAll({
        include: [ 
            {model: CompanyInformation},
            {model: CompanyDepartments}
        ]
    });

    res.status(200).json({ status: 200, data:data });
});

router.get('/company-branches/:id', async (req, res) => {
    const id = req.params.id
    const data = await CompanyBranch.findByPk(id, {
        include: [ 
            {model: CompanyInformation},
            {model: CompanyDepartments}
        ]
    });

    res.status(200).json({ data });
});



router.post('/company-branches', async (req, res) => {
    try {
        const {
            name,
            address,
            phone_number,
            email,
            company_code
        } = req.body;
        
        // Simpan pengguna ke database
        const data = await CompanyBranch.create({
            name,
            address,
            phone_number,
            email,
            company_code
        });

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.put('/company-branches', async (req, res) => {
    try {
        const {
            name,
            address,
            phone_number,
            email,
            company_code,
            id
        } = req.body;
        
        const branches = await CompanyBranch.findByPk(id)

        // Simpan pengguna ke database
        const update = await branches.update({
            name,
            address,
            phone_number,
            email,
            company_code
        });

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ update, message: 'update succes' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.delete('/company-branches', async (req, res) => {
    try {
        const {
            id
        } = req.body;
        
        const branches = await CompanyBranch.findByPk(id)

        // Simpan pengguna ke database
        
        const destroy = await branches.destroy()

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ destroy, message: 'delete succes' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

module.exports = router