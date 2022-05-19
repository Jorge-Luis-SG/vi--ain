import { Injectable } from '@angular/core';
// import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";

const MEDIA_FOLDER_NAME = "my_media";
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPE = "video/mp4";

// import * as FileSaver from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class MediaFileService {

  public uploadProgress = 0;

  constructor(
    // private storage: AngularFireStorage,
  ) { }

  setPercentBar(i) {
    let apc = i / 100;
    console.warn("setPercentBar", apc);
    return apc;
  }


  // sube file base64
  uploadFile(imageURI) {
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const ramdom = Math.floor(Math.random() * 1000000 * 5);
    //     // const filePath = `multimedia/${new Date().getTime()}/${ramdom}`;
    //     const filePath = `multimedia/${new Date().getTime()}-${ramdom}`;
    //     const fileRef = this.storage.ref(filePath);

    //     const task = fileRef.putString(imageURI, "data_url");

    //     task.percentageChanges().subscribe((res) => {
    //       this.uploadProgress = this.setPercentBar(res);
    //     });

    //     task
    //       .snapshotChanges()
    //       .pipe(
    //         finalize(() => {
    //           fileRef.getDownloadURL().subscribe((url) => {
    //             this.uploadProgress = 0;
    //             resolve(url);
    //           });
    //         })
    //       )
    //       .subscribe();
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  }

  
  /**
   * Cargar archivo en directorio especifico
   * @param imageURI
   * @param folder 
   * @param ext 
   * @returns 
   */
  uploadFileWithCustomFoler(imageURI, folder, ext) {
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const ramdom = Math.floor(Math.random() * 1000000 * 5);
    //     const filePath = `${folder}/${new Date().getTime()}/${ramdom}.${ext}`;
    //     const fileRef = this.storage.ref(filePath);

    //     const task = fileRef.putString(imageURI, "data_url");

    //     task.percentageChanges().subscribe((res) => {
    //       this.uploadProgress = this.setPercentBar(res);
    //     });

    //     task
    //       .snapshotChanges()
    //       .pipe(
    //         finalize(() => {
    //           fileRef.getDownloadURL().subscribe((url) => {
    //             this.uploadProgress = 0;
    //             resolve(url);
    //           });
    //         })
    //       )
    //       .subscribe();
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  }

  uploadFileBLod({ blod, folder, ext }) {
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const ramdom = Math.floor(Math.random() * 1000000 * 5);
    //     const filePath = `${folder}/${new Date().getTime()}/${ramdom}.${ext}`;
    //     const fileRef = this.storage.ref(filePath);

    //     const task = fileRef.put(blod);
    //     task.percentageChanges().subscribe((res) => {
    //       this.uploadProgress = this.setPercentBar(res);
    //     });

    //     task
    //       .snapshotChanges()
    //       .pipe(
    //         finalize(() => {
    //           fileRef.getDownloadURL().subscribe((url) => {
    //             this.uploadProgress = 0;
    //             resolve(url);
    //           });
    //         })
    //       )
    //       .subscribe();
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  }

  // // Raw string is the default if no format is provided
  uploadFilePutString({ string, folder, contentType, ext }) {
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const ramdom = Math.floor(Math.random() * 1000000 * 5);
    //     const filePath = `${folder}/${new Date().getTime()}/${ramdom}.${ext}`;
    //     const fileRef = this.storage.ref(filePath);


    //     const task = fileRef.putString(string, undefined, {
    //       contentType: contentType,
    //     });
    //     task.percentageChanges().subscribe((res) => {
    //       this.uploadProgress = this.setPercentBar(res);
    //     });

    //     task
    //       .snapshotChanges()
    //       .pipe(
    //         finalize(() => {
    //           fileRef.getDownloadURL().subscribe((url) => {
    //             this.uploadProgress = 0;
    //             console.log("url", url);
    //             resolve(url);
    //           });
    //         })
    //       )
    //       .subscribe();
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  }

  validBase64(base64) {
    return base64.replace(/^data:(image|video)\/(png|jpeg|jpg|avi|mov|mp4|wmv);base64,/, '');
  }

  getBase64(event) {
    if (!event) { return }
    return new Promise(async (resolve, reject) => {
      const file = event;
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onprogress = (pross) => {
        console.log(pross);
      };

      reader.readAsDataURL(file);
    });
  }


  /**
   * Obtener extension de archivo en base64
   * @param url 
   * @returns 
   */
  getBase64Ext(url: string){
    const type = url.split(';')[0].split('/')[1];
    return type;
  }


  /**
   * Convertir blob a base64
   * @param blob 
   * @returns 
   */
   blobTob64(blob: any) {
    return new Promise(async (resolve, reject) => {
      let reader = new FileReader();

      reader.onloadend = function () {
        const base64data = reader.result;
        // console.log("base64data", base64data);
        resolve(base64data);
      }

      reader.onerror = function (event) {
        alert("Failed to read file!\n\n" + reader.error);
        reject(reader.error);
        reader.abort();
      }

      reader.readAsDataURL(blob);
    });
  }


  /**
   * Convertir buffer a base64
   * @param buffer 
   * @param contentType 
   * @returns 
   */
   bufferToBlob(buffer: any, contentType = 'image/jpeg') {
    const blob: any = new Blob([buffer], { type: contentType });
    return blob;
  }


  // de base64 a blod
  base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(this.validBase64(base64Data));
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);

      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }


  /**
   * Descargar archivo
   * @param params 
   * @param params.response           Buffer del sarchivo
   * @param params.MIME_types         MIME_TYPE del archivo
   * @param params.ext                Extension del archivo
   * @param params.name               Nombre del archivo
   * @returns 
   */
   async downloadBlodWeb(params: any = {}) {
    // const { response, MIME_types, ext, name } = params;

    // return new Promise(async (resolve, reject) => {

    //   const blob: any = new Blob([response], { type: MIME_types, });

    //   FileSaver.saveAs(blob, `${name}.${ext}`);
    //   resolve({});
    // })
  }


  /**
   * Eliminar archivo a través de su URL
   * @param url           URL del archivo a eliminar
   * @returns
   */
  async removeFirebaseFileByUrl(url: string){
    // return this.storage.ref(url).delete();
    // return this.storage.refFromURL(url).delete();
  }
}
