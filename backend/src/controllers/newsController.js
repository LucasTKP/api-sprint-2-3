import { register } from "../business/newsBusiness.js";

export const create = async (req, res) => {
  try {
    const result = await register();
    if (result.statusCode == 200) {
      return res.status(200).send(result);
    }
    return res.status(500).send("Ocorreu um erro ao armazenar o arquivo.");
  } catch (error) {
    return res.send(error);
  }
};