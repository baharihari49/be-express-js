const express = require('express');
const router = express.Router();
const {User, CompanyInformation} = require('../models/index')
const bcrypt = require('bcrypt')


const saltRounds = 64; // Tentukan jumlah salt rounds, semakin tinggi semakin aman tetapi juga semakin lambat
// const plainPassword = 'Password123'; // Password yang akan di-hash

const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const {username, email, password, no_handphone, company_code} = req.body;

        // Meng-generate salt
        const salt = await bcrypt.genSalt(10);
        
        // Hash password dengan menggunakan salt
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Simpan pengguna ke database
        const newUser = await User.create({username, email, password: hashedPassword, no_handphone ,company_code});

        // Buat token JWT
        const payload = { userId: newUser.id, email: newUser.email };
        const secretKey = '$^%&&^%$GHK*&^^?><Hhyg^%&*$ggffku^uUG__NGYJ-*&&*&%$^&Vggvfg%%@@!%%&Ghdg&%$^^$#hxxybbnvgvchfsuacvhjvghjbvjcsuadgvcsjhgcvdsjcsjycvgs' // Ganti dengan kunci rahasia yang aman
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        // Kirim respons dengan token
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({message: 'Something went wrong', error});
    }
});



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Temukan pengguna berdasarkan email
        const user = await User.findOne({ where: { email } });

        // Jika pengguna tidak ditemukan
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // Jika password tidak valid
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Jika pengguna dan password valid, buat token JWT
        const payload = { userId: user.id, email: user.email, company_code: user.company_code };
        const secretKey = '$^%&&^%$GHK*&^^?><Hhyg^%&*$ggffku^uUG__NGYJ-*&&*&%$^&Vggvfg%%@@!%%&Ghdg&%$^^$#hxxybbnvgvchfsuacvhjvghjbvjcsuadgvcsjhgcvdsjcsjycvgs' // Ganti dengan kunci rahasia yang aman
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        // Kirim token JWT sebagai respons
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Something went wrong', error });
    }
});


router.get('/user', async(req, res) => {
    const allUser = await User.findAll({
        include: { 
            model: CompanyInformation,
        }
    });
    res.status(200).json({ data: allUser });
});




module.exports = router