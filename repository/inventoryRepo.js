import dbPool from "../utils/db.js";

export const getData = () => {
  const sql = "SELECT * FROM inventory";
  const result = dbPool.query(sql);

  return result;
};

export const createData = (
  namaBarang,
  jenisBarang,
  hargaBarang,
  jumlahBarang
) => {
  const sql = `INSERT INTO inventory (nama_barang, jenis_barang, harga_barang, jumlah_barang) VALUES ('${namaBarang}', '${jenisBarang}', '${hargaBarang}', '${jumlahBarang}')`;
  const result = dbPool.query(sql);

  return result;
};

export const updateData = (
  id,
  namaBarang,
  jenisBarang,
  hargaBarang,
  jumlahBarang
) => {
  const sql = `UPDATE inventory SET nama_barang = '${namaBarang}', jenis_barang = '${jenisBarang}', harga_barang = '${hargaBarang}', jumlah_barang = '${jumlahBarang}' WHERE id = '${id}'`;
  const result = dbPool.query(sql);

  return result;
};

export const deleteData = (id) => {
  const sql = `DELETE FROM inventory WHERE id = '${id}'`;
  const result = dbPool.query(sql);

  return result;
};

export const getDataById = (id) => {
  const sql = `SELECT * FROM inventory WHERE id = '${id}'`;
  const result = dbPool.query(sql);

  return result;
};
