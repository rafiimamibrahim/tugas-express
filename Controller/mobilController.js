import db from "../connection.js";

export const getMobil = (req, res) => {
    const sql = "SELECT * FROM mobil";
    db.query(sql, (error, result) => {
      res.send(result);
    });
  };
  
  export const getMobilById = (req, res) => {
    const sql = `SELECT * FROM mobil WHERE id=${req.query.id}`;
    db.query(sql, (error, result) => {
      res.json(result);
    });
  };
  
  export const createMobil = (req, res) => {
    const { brand_mobil,jenis_mobil, harga_mobil } = req.body;
    const sql =
      "INSERT INTO mobil (brand_mobil,jenis_mobil, harga_mobil) VALUES (?,?,?)";
    db.query(sql, [brand_mobil,jenis_mobil, harga_mobil], (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(201);
      res.json(result);
    });
  };
  
  export const updateMobil = (req, res) => {
    const id = req.query.id;
  
    const { brand_mobil,jenis_mobil, harga_mobil } = req.body;
    if (brand_mobil || jenis_mobil || harga_mobil) {
      const query = `UPDATE mobil SET brand_mobil = "${brand_mobil}", jenis_mobil = "${jenis_mobil}", harga_mobil = "${harga_mobil},"  WHERE  id=${id}`;
  
      db.query(query, (error, result) => {
        if (error) res.status(400).send(error.message);
        res.json(result);
      });
    } else {
      res.send("Isi body nya");
    }
  };
  
  export const deleteMobil = (req, res) => {
    const id = req.query.id;
    const sql = "DELETE FROM mobil WHERE id = ?";
    db.query(sql, [id], (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(200);
      res.json("data berhasil dihapus");
    });
  };