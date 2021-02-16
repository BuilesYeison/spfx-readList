import{ISPListProcesosItem} from "./IProcesos";

export class ClassProcesos{
    public ID:string;
    public Title:string;
    public Estado:string;
    public Codigo:string;
    constructor(item:ISPListProcesosItem){
        if(true){
            JSON.stringify(item.ID);
            this.ID = item.ID;
            this.Title = item.Title;
            this.Estado = item.Estado;
            this.Codigo = item.Codigo
        }  
    }
}