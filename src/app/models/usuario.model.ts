export interface ResponseUser {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export class User {
  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string
  ) {}
}

interface Support {
  url: string;
  text: string;
}
