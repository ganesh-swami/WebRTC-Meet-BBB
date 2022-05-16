import { Meteor } from 'meteor/meteor';
import userShareWebcam from './methods/userShareWebcam';
import userUnshareWebcam from './methods/userUnshareWebcam';
import ejectUserCameras from './methods/ejectUserCameras';
import userFocusWebcam from './methods/userFocusWebcam';

Meteor.methods({
  userShareWebcam,
  userUnshareWebcam,
  ejectUserCameras,
  userFocusWebcam
});
