const pool = require("../../config/dbConfig.js")

exports.register = async (req, res, next) => {
    try {
        const { email, username, name, surname, password } = req.query

        console.log(name)
        if (email && username && name && surname && password) {

            if (password.length < 6) {
                return res.status(400).json({ message: "Şifre 6 karakterden kısa olamaz!" })
            }
            await pool.query("INSERT INTO user_table (email, username, name, surname, password) VALUES ($1, $2, $3, $4,$5)", [email, username, name, surname, password])
            return res.status(200).json({ message: "Kullanıcı başarılı bir şekilde oluşturuldu.", result: true });
        }
        else {
            return res.status(400).json({ message: "Eksik parametre", result: false });

        }
    } catch (error) {
        return res.status(400).json({ message: "Kullanıcı oluşturulurken hata.", result: false, error: error.message });
    }
}
