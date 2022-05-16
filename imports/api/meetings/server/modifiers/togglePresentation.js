import Logger from '/imports/startup/server/logger';
import Meetings from '/imports/api/meetings';
import { check } from 'meteor/check';
import { LAYOUT_TYPE } from '/imports/ui/components/layout/enums';

export default function switchPresentation(meetingId, layoutValue, requesterUserId) {
  try {
    check(meetingId, String);
    check(requesterUserId, String);
    check(layoutValue, Boolean);

    const selector = {
      meetingId,
    };

    const modifier = {
      $set: {
        layoutValue: layoutValue
      },
    };

    const numberAffected = Meetings.update(selector, modifier);

    if (numberAffected) {
      Logger.info(`Meeting layout changed to ${layoutValue} for meeting=${meetingId} requested by user=${requesterUserId}`);
    }
  } catch (err) {
    Logger.error(`Exception while invoking method changeLayout ${err.stack}`);
  }
}
