import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogUploadDoneComponent } from '../dialog-upload-done/dialog-upload-done.component';
declare var Dropzone: any;
@Component({
  selector: 'app-upload-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.css'
})
export class UploadDialogComponent implements AfterViewInit {
  uploaderName !: string;
  statut !: string;
  statutColor = "color : green";
  listAllowUser: any[] = [];
  stringAllowUsers = "";

  constructor(
    public dialog: MatDialog,
    public dialogRef: DialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    this.uploaderName = data.uploaderName,
      this.statut = data.statut,
      this.listAllowUser = data.listAllowUsers
  }



  ngAfterViewInit() {
    //statut color
    //console.log(this.listAllowUser);
    this.listAllowUser.forEach(element => {
      this.stringAllowUsers = this.stringAllowUsers + " " + element
    });
    console.log(this.stringAllowUsers);

    if (this.statut != "Public") {
      this.statutColor = "color: red";
    }
    Dropzone.autoDiscover = false;

    const previewNode = document.querySelector("#template") as HTMLElement;
    if (!previewNode) {
      console.error("L'élément #template est introuvable !");
      return;
    }

    previewNode.id = '';
    let previewTemplate = (previewNode.parentNode as HTMLElement)?.innerHTML || "";

    previewNode.parentNode?.removeChild(previewNode);

    const myDropzone = new Dropzone(document.body, {
      url: "https://127.0.0.1:5000/api/upload", // URL du script PHP
      method: "post",
      paramName: "file", // Nom du paramètre utilisé en PHP
      params: {
        uploaderName: this.uploaderName,
        statut: this.statut,
        listDownload: this.stringAllowUsers
      },
      maxFilesize: 1000, // Taille max en Mo
      acceptedFiles: null, // Tous types de fichiers
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      parallelUploads: 20,
      previewTemplate: previewTemplate,
      autoQueue: false,
      previewsContainer: "#previews",
      clickable: ".fileinput-button"
    });

    myDropzone.on("addedfile", function (file) {
      file.previewElement?.querySelector(".start")?.addEventListener("click", function () {
        myDropzone.enqueueFile(file);
      });
    });

    myDropzone.on("totaluploadprogress", (progress) => {
      const progressBar = document.querySelector("#total-progress .progress-bar") as HTMLElement;
      if (progressBar) progressBar.style.width = progress + "%";
      console.log(progress + "%");
      if (progress == 100) {
        this.dialog.open(DialogUploadDoneComponent);
      }
    });

    myDropzone.on("sending", (file) => {
      //formData.append("uploaderName",this.uploaderName);
      const progressElement = document.querySelector("#total-progress") as HTMLElement;
      if (progressElement) progressElement.style.opacity = "1";

      const startButton = file.previewElement?.querySelector(".start") as HTMLElement;
      if (startButton) startButton.setAttribute("disabled", "disabled");
    });

    myDropzone.on("queuecomplete", function () {
      const progressElement = document.querySelector("#total-progress") as HTMLElement;
      if (progressElement) progressElement.style.opacity = "0";
    });

    document.querySelector("#actions .start")?.addEventListener("click", function () {
      myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
    });

    document.querySelector("#actions .cancel")?.addEventListener("click", function () {
      myDropzone.removeAllFiles(true);
    });
  }

  fermer() {
    this.dialogRef.close();
    window.location.href = 'commun2';
  }


}
