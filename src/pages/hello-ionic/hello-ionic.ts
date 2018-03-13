import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
public base64Image: string;

private image: string;


  constructor(public navCtrl: NavController,private camera: Camera,public alertCtrl: AlertController,private domSanitizer: DomSanitizer) {



  }

   openCamera() {
    const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  sourceType:this.camera.PictureSourceType.CAMERA,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  saveToPhotoAlbum:true
}

this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        //this.displayErrorAlert(err);
      });

  }

  



}
