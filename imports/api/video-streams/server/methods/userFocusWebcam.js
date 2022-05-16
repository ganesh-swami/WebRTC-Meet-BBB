import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import RedisPubSub from '/imports/startup/server/redis';
import Logger from '/imports/startup/server/logger';
import Users from '/imports/api/users';
import { extractCredentials } from '/imports/api/common/server/helpers';
import handleUserFocusChanged from '../handlers/userFocusChanged';
export default function changeFocus(userId,streamId,focus) {
  try {
    const REDIS_CONFIG = Meteor.settings.private.redis;
    const CHANNEL = REDIS_CONFIG.channels.toAkkaApps;
    const EVENT_NAME = 'ChangeUserFocusStateReqMsg';
    const { meetingId, requesterUserId } = extractCredentials(this.userId);

    check(meetingId, String);
    check(requesterUserId, String);
    check(userId, String);
    check(streamId, String);
    check(focus, Boolean);

    const payload = {
      focus,
      changedBy: requesterUserId,
      userId,
      streamId
    };

    Logger.info('stream focus requested', {
      userId, meetingId, changedBy: requesterUserId, focus ,streamId
    });
    handleUserFocusChanged(payload, meetingId);
    //RedisPubSub.publishUserMessage(CHANNEL, EVENT_NAME, meetingId, requesterUserId, payload);
  } catch (err) {
    Logger.error(`Exception while invoking method changeFocus ${err.stack}`);
  }
}
