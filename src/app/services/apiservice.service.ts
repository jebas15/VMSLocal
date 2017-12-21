import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ApiserviceService {

  constructor(private http: Http) { }
  ApiURL = 'https://www.agile1.us/api'
  Token = "DPFI2SaSZAUg505eJqC5T0tTz3Zi5/TIGdedj8hf9GP8tFtRhZ8epTbkiBkTCmMy";
  public GetData(Url: any) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-vms-token': this.Token,
      'x-vms-version': localStorage.getItem("VMSVersion"),
      'x-vms-culture': localStorage.getItem("culture")
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.ApiURL + Url, options).map((res: Response) => res.json());
  }

  public PutData(Url: any, ParamList: any) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-vms-token': this.Token,
      'x-vms-version': localStorage.getItem("VMSVersion"),
      'x-vms-culture': localStorage.getItem("culture")
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.ApiURL + Url, options).map((res: Response) => res.json());
  }

  public PostData(Url: any, ParamList: any) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-vms-token': this.Token,
      'x-vms-version': localStorage.getItem("VMSVersion"),
      'x-vms-culture': localStorage.getItem("culture")
    });
    let options = new RequestOptions({ headers: headers });

    let body = ParamList ? JSON.stringify(ParamList) : null;
    return this.http.post(this.ApiURL + Url, body, options).map((res: Response) => res.json())
  }

  public DeleteData(Url: any) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-vms-token': this.Token,
      'x-vms-version': localStorage.getItem("VMSVersion"),
      'x-vms-culture': localStorage.getItem("culture")
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.ApiURL + Url, options).map((res: Response) => res.json())
  }

  // public PostData(Url: any, ParamList: any) {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + this.Token
  //   });
  //   let options = new RequestOptions({ headers: headers });

  //   let body = ParamList ? JSON.stringify(ParamList) : null;
  //   return this.http.post(this.ApiURL + Url, body, options).map((res: Response) => res.json())
  // }

}
