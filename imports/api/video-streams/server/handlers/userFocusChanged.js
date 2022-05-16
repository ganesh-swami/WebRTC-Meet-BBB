import { check } from 'meteor/check';
import changeFocus from '../modifiers/changeFocus';

export default function userFocusChanged(body, meetingId) {
  const { userId, focus, changedBy,streamId } = body;

  check(meetingId, String);
  check(userId, String);
  check(focus, Boolean);
  check(changedBy, String);
  check(streamId, String);

  return changeFocus(meetingId, userId, focus,streamId);
}
