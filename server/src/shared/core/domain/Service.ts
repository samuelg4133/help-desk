export interface IService<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}
