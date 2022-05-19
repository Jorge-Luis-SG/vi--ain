import { Injectable } from '@angular/core';
// import { AngularFirestore, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PoolService {

  public collection = 'pool';

  constructor(
    // public afs: AngularFirestore,
  ) { }

  async store(data: any){
    // const fmt = Object.assign({ createdAt: moment().valueOf() }, data);
    // const snapshot = await this.afs.collection(this.collection).add(fmt);
    // return snapshot.id;
  }


  async update(docId: any, data: any){
    // return await this.afs.collection(this.collection).doc(docId).update(data);
  }

  /**
   * Obtener listado dinamico
   * @param where 
   * @param where.field 
   * @param where.condition
   * @param where.value
   * @param opts
   * @param opts.idField
   * @param opts.orderBy
   * @param opts.orderBy.field
   * @param opts.orderBy.order
   * 
   * @returns 
   */
  getDynamic(where: any[] = [], opts: any = {}) {
  // getDynamic(where: any[] = [], opts: any = {}): Observable<any>{
  //   const {idField = "_id", orderBy = []} = opts;

  //   return this.afs.collection(
  //     this.collection,
  //     (ref) => {
  //       let query: Query = ref;
  //       for (const row of where) { query = query.where(row.field, row.condition, row.value); }

  //       for (const order of orderBy) { query = query.orderBy(order.field, order.order); }
  //       return query;
  //     }
  //   ).valueChanges({ idField });
  }
}
