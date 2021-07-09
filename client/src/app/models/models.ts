export class Server {
  _id: number = 0;
  ServerName: string = '';
  CompanyName: string = '';
  IP: number = 0;
  // Company_id: number = 0;
  Status: number = 0;
  createdAt: string = '';

  constructor(
    _id?: number,
    ServerName?: string,
    CompanyName?: string,
    IP?: number,
    Status?: number,
    createdAt?: string
  ) {
    this._id = _id || 0;
    this.ServerName = ServerName || '';
    this.CompanyName = CompanyName || '';
    this.IP = IP || 0;
    this.Status = Status || 0;
    this.createdAt = createdAt || '';
  }
}
