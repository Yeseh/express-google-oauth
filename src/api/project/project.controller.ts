import { Request, Response, NextFunction } from 'express'
import ProjectService from './project.service'
import HttpException from '../../utils/httpException'

const projectService = new ProjectService()

export default class ProjectController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await projectService.getAllProject()
      res.send(result)
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message))
    }
  }
}
