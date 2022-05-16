import Logger from '/imports/startup/server/logger';
import { extractCredentials } from '/imports/api/common/server/helpers';
import { check } from 'meteor/check';
import switchPresentation from '../modifiers/togglePresentation'

export default function togglePresentation(layoutValue) {
  

  try {
    const { meetingId, requesterUserId } = extractCredentials(this.userId);

    check(meetingId, String);
    check(requesterUserId, String);
    check(layoutValue, Boolean);

    switchPresentation(meetingId,layoutValue, requesterUserId);
  } catch (err) {
    Logger.error(`Exception while invoking method togglePresentation ${err.stack}`);
  }
}
