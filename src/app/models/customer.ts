import { Region } from "./region"
export interface Customer{
    code?:string,
    userCode?:string,
    compCode?:string,
    traderName?:string,
    contactPerson?:string,
    phone?:string,
    email?:string,
    address?:string,
    creditLimit?:number,
    creditTerm?:string,
    active?:boolean,
    updatedDate?:string,
    createdDate?:string,
    createdBy?:string,
    macId?:string,
    type?:string,
    cashDown?:boolean,
    multi?:boolean,
    intgUpdStatus?:string,
    priceType?:string,
    region?:Region
}