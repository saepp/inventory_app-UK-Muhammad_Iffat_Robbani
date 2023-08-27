import {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} from "../repository/inventoryRepo.js";
import { errorResp, successResp } from "../utils/response.js";

export const getDataService = async (req, res) => {
  try {
    const [result] = await getData();
    if (result.length < 1) {
      errorResp(res, "Data not found", 404);
    } else {
      successResp(res, "Success get data", result);
    }
  } catch (err) {
    errorResp(res, err.message);
  }
};

export const createDataService = async (req, res) => {
  try {
    const namaBarang = req.body.nama_barang;
    const jenisBarang = req.body.jenis_barang;
    const hargaBarang = req.body.harga_barang;
    const jumlahBarang = req.body.jumlah_barang;
    const [result] = await createData(
      namaBarang,
      jenisBarang,
      hargaBarang,
      jumlahBarang
    );
    successResp(res, "Success create data", result);
  } catch (err) {
    errorResp(res, err.message);
  }
};

export const updateDataService = async (req, res) => {
  try {
    const id = req.params.id;
    const namaBarang = req.body.nama_barang;
    const jenisBarang = req.body.jenis_barang;
    const hargaBarang = req.body.harga_barang;
    const jumlahBarang = req.body.jumlah_barang;
    const [result] = await updateData(
      id,
      namaBarang,
      jenisBarang,
      hargaBarang,
      jumlahBarang
    );
    successResp(res, "Success update data", result);
  } catch (err) {
    errorResp(res, err.message);
  }
};

export const deleteDataService = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await deleteData(id);
    successResp(res, "Success delete data", result);
  } catch (err) {
    errorResp(res, err.message);
  }
};

export const getDataByIdService = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await getDataById(id);
    if (result.length < 1) {
      errorResp(res, "Data not found", 404);
    } else {
      successResp(res, "Success get data", result);
    }
  } catch (err) {
    errorResp(res, err.message);
  }
};
