import { Meteor } from 'meteor/meteor';
import muteToggle from './methods/muteToggle';
import muteAllToggle from './methods/muteAllToggle';
import unMute from './methods/unmute';
import muteAllExceptPresenterToggle from './methods/muteAllExceptPresenterToggle';
import ejectUserFromVoice from './methods/ejectUserFromVoice';

Meteor.methods({
  toggleVoice: muteToggle,
  muteAllUsers: muteAllToggle,
  muteAllExceptPresenter: muteAllExceptPresenterToggle,
  ejectUserFromVoice,
  unMute,
});
