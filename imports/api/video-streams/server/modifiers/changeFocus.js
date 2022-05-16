import Logger from '/imports/startup/server/logger';
import VideoStreams from '/imports/api/video-streams';
import { getDeviceId } from '/imports/api/video-streams/server/helpers';

export default function changeFocus(meetingId, userId, focus,streamId=null) {
  
  const deviceId = getDeviceId(streamId);

  const selector = {
    meetingId,
    userId,
    deviceId
  };

  const modifier = {
    $set: {
      focus,
    },
  };

  const selector2 = {
    meetingId,
    focus:true
  };

  const modifier2 = {
    $set: {
      focus:false,
    },
  };

  
  try { 
    // unfocus the previously focused stream
    VideoStreams.update(selector2, modifier2);

    try {
      const numberAffected = VideoStreams.update(selector, modifier);
      //Logger.info('------------------------------------------------------',numberAffected);
      if (numberAffected) {
        Logger.info(`Updated user streams focused userId=${userId} focused=${focus}`);
      }
    } catch (error) {
      return Logger.error(`Error updating stream focused status: ${error}`);
    }

  } catch (error) {
    return Logger.error(`Error updating stream focused status: ${error}`);
  }
  
  return null;
}
