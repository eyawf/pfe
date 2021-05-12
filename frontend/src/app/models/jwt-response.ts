export interface JwtResponseI {
  dataUser: {
    id: number,
    name: string,
    email: string,
    etat:bigint,
    accessToken: string,
    expiresIn: string
  }
}
