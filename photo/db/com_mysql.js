module.exports = {
    delet: {
        sql: "DELETE FROM znonz_users WHERE id=?",
        params: new Array()
    },
    myinfo: {
        sql: "SELECT * FROM znonz_users ORDER BY date DESC",
        params: new Array()
    },
    uploads: {
        sql: "INSERT INTO znonz_users (date,name,address,tel,himg) VALUES (?, ?, ?, ?, ?)",
        params: new Array()
    }
}