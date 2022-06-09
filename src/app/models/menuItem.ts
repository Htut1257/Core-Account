export interface MenuItem{
    menuCode?: string;
    roleCode?: string;
    allow?: boolean;
    menuName?: string;
    menuUrl?: string;
    menuType?:string;
    menuClass?: string;
    account?:string;
    parentMenuCode?: string;
    orderBy?:number;
    child?: MenuItem[];
}