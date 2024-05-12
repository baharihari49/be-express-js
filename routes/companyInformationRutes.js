const express = require('express');
const router = express.Router();
const {CompanyInformation, User, CompanyBranch} = require('../models/index')


router.post('/company-information', async (req, res) => {
    try {
        const {name, email, company_code, user_id} = req.body;
        
        // Simpan pengguna ke database
        const newCompanyInformation = await CompanyInformation.create({name, email, company_code, user_id});

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ data: newCompanyInformation });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.put('/company-information', async (req, res) => {
    try {
        const {name, email, company_code, old_company_code} = req.body;
        
        const data = await CompanyInformation.findByPk(old_company_code)

        // Simpan pengguna ke database
        const newCompanyInformation = await data.update({name, email, company_code});

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ data: newCompanyInformation, message: 'update berhasil' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.delete('/company-information', async (req, res) => {
    try {
        const {old_company_code} = req.body;
        
        const data = await CompanyInformation.findByPk(old_company_code)

        // Simpan pengguna ke database
        const destroy = await data.destroy();

        // Buat token JWT

        // Kirim respons dengan token
        res.status(201).json({ message: 'delete berhasil' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});

router.get('/company-information/:company_code', async (req, res) => {
    const companyCode = req.params.company_code
    // console.log(companyCode);
    const data = await CompanyInformation.findByPk(companyCode, {
        include: [
            {
             model: User,
             as: 'users',
            },
            {
             model: CompanyBranch,
            }
         ],
    });

    res.status(200).json({ data });
});


// GET ALL COMPANY

router.get('/company-information', async (req, res) => {
    const data = await CompanyInformation.findAll({
        where: {
            company_code: req.decoded.company_code
        },
        include: [
           {
            model: User,
            as: 'users',
           },
           {
            model: CompanyBranch,
           }
        ],
    });

    res.status(200).json({ data });
});

// GET ALL COMPANY END


module.exports = router