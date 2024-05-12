const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Mendapatkan token dari header atau query string atau body
    let authorization = req.headers['authorization'] || req.query.token || req.body.token;

    // Jika token tidak ada
    if (!authorization) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    const token = authorization.split(' ')[1]

    // Memverifikasi token
    jwt.verify(token, '$^%&&^%$GHK*&^^?><Hhyg^%&*$ggffku^uUG__NGYJ-*&&*&%$^&Vggvfg%%@@!%%&Ghdg&%$^^$#hxxybbnvgvchfsuacvhjvghjbvjcsuadgvcsjhgcvdsjcsjycvgs', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        } else {
            // Token valid, menyimpan data pengguna yang terdekripsi ke dalam objek req
            req.decoded = decoded;
            next(); // Melanjutkan ke middleware atau penanganan rute berikutnya
        }
    });
};

module.exports = verifyToken;
