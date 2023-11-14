import AppDataSource from "./dados";
import { Request, Response } from "express";
 
class UfController {
  public async list(_: Request, res: Response): Promise<Response> {
    const ufs = AppDataSource;
    return res.json(ufs);
  }
 
  public async listByUf(req: Request, res: Response): Promise<Response> {
    const sigla = req.params.uf;
 
    const uf = AppDataSource.getBySigla(uf, {
        where: { uf: sigla }
    });
    return res.json(uf);
  }
}