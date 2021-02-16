import * as React from 'react';
import styles from './ReadProcesos.module.scss';
import { IReadProcesosProps } from './IReadProcesosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp, { Item } from 'sp-pnp-js'
import { ClassProcesos } from './ClassProcesos';
import {ISPListProcesosItem} from './IProcesos';

export default class ReadProcesos extends React.Component<IReadProcesosProps, any> {

  public constructor(props:IReadProcesosProps,any){
    super(props);
    this.state={
      items:[]
    }
  }

  public render(): React.ReactElement<IReadProcesosProps> {
    return (
      <div className={styles.readProcesos}>
        <table className={styles.tableStyle}>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Codigo</th>
            <th>Estado</th>
          </tr>
              {
                this.state.items.map(function(item:ISPListProcesosItem){
                  return(  
                    <tr>
                      <td>{item.ID}</td>
                      <td>{item.Title}</td>
                      <td>{item.Codigo}</td>
                      <td>{item.Estado}</td>
                    </tr>                                      
                  )
                })
              }
              </table>
            </div>
    );
  }
  public componentDidMount(){
    //debugger;
    this._getListProcesosData();
  }
  private _getListProcesosData():void{
    pnp.sp.web.lists.getByTitle("Procesos").items.get().then
    ((response)=>{
      let procesosCollection=response.map(item=> new ClassProcesos(item));
      this.setState({items:procesosCollection});
    }
    )
  }
}
