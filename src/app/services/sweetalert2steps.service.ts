import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { fromWei } from '../helpers/utils';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root',
})
export class Sweetalert2stepsService {

  public title = 'VI-AIN';

  constructor(private contractSrv: ContractService) { }

  async call(method: string, params: any[] | null) {
    // console.log({ method, params, contractSrv: this.contractSrv });
    return !params
      ? await this.contractSrv[method]()
      : await this.contractSrv[method](...params);
  }


  /**
   * Mostrar alerta basica
   * @param message
   * @param type
   * @returns
   */
  async showBasicAlert(message: string, type: any = 'success') {
    return await Swal.fire(this.title, message, type);
  }

  /**
   * Mostrar alerta con hash de la transacción
   * @param opts
   * @returns
   */
  async showAlertWithTxHash(opts: any) {
    const { transactionHash, icon = 'success' } = opts;

    return await Swal.fire({
      title: this.title,
      icon,
      html:
        "<a style='color: #e5e61d !important;' href='" +
        environment.chain.blockExplorerUrls +
        'tx/' +
        transactionHash +
        "' target='_blank'>See transaction</a>",
      confirmButtonText: 'OK',
    });
  }

  async showStepsGeneral(params: any) {
    const { askMessage, contractParams } = params;
    const steps = ['1', '2'];

    console.log({ contractParams });

    const Queue = Swal.mixin({
      progressSteps: steps,
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No',
      // optional classes to avoid backdrop blinking between steps
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' },
    });

    /**
     * Confirmar peticion de ejecutar transacción
     */
    const { isConfirmed: ask } = await Queue.fire({
      title: this.title,
      text: askMessage,
      currentProgressStep: 0,
    });

    // console.log({ask});

    if (!ask) {
      // console.log('transaction cancelled');
      return {
        step: 0,
        data: { message: 'Transaction Cancelled' },
        status: false,
      };
    }

    /**
     * Solicitar firma en la transacción
     */
    let transactionRecord: any;
    const { value: transactionStatus } = await Queue.fire({
      title: this.title,
      text: 'Please approve the transaction',
      currentProgressStep: 1,
      // backdrop: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: false,
      showConfirmButton: false,
      didOpen: async () => {
        try {
          Queue.showLoading();
          Queue.enableInput();
          // Queue.clickConfirm();

          const transaction = await this.call(
            contractParams.method,
            contractParams.params
          );
          transactionRecord = transaction;

          console.log({ transaction });
          return Queue.clickConfirm();
        } catch (err) {
          console.log(
            'Error on Sweetalert2stepsService@showStepsGeneral#transaction',
            { err }
          );
          return Queue.clickCancel();
        }
      },
    });
    // console.log({transactionRecord, transactionStatus});

    if (!transactionStatus) {
      // console.log('transaction canceled');
      return {
        step: 1,
        data: { message: 'Transaction Cancelled' },
        status: false,
      };
    }

    /**
     * Retornar resultado de la transacción
     */
    return { step: 1, data: transactionRecord, status: true };
  }

}
