export class Server {
  ID: number = 0;
  ServerName: string = '';
  CompanyName: string = '';
  IP: number = 0;
  CompanyID: number = 0;
  Status: number = 0;
  createdAt: string = '';

  constructor(
    ID?: number,
    ServerName?: string,
    CompanyName?: string,
    IP?: number,
    Status?: number,
    createdAt?: string
  ) {
    this.ID = ID || 0;
    this.ServerName = ServerName || '';
    this.CompanyName = CompanyName || '';
    this.IP = IP || 0;
    this.Status = Status || 0;
    this.createdAt = createdAt || '';
  }
}

export class User {
  name: string = '';
  address: string = '';
  test: string = '';
  constructor(name?: string, address?: string, test?: string) {
    this.name = name || '';
    this.address = address || '';
    this.test = test || '';
  }
}
