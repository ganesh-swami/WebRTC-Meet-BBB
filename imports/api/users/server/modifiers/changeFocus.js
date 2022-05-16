import Logger from '/imports/startup/server/logger';
import Users from '/imports/api/users';

export default function changeFocus(meetingId, userId, focus, changedBy) {
  const selector = {
    meetingId,
    userId,
  };

  const modifier = {
    $set: {
      focus,
    },
  };

  try {
    const numberAffected = Users.update(selector, modifier);

    if (numberAffected) {
      Logger.info(`Change focus=${focus} id=${userId} meeting=${meetingId} changedBy=${changedBy}`);
    }
  } catch (err) {
    Logger.error(`Change focus error: ${err}`);
  }
}
