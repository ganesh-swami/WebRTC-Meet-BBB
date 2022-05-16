import { check } from 'meteor/check';
import changeFocus from '../modifiers/changeFocus';

export default function handleFocusAssigned(body, meetingId) {
  const { userId, focus, changedBy } = body;

  check(meetingId, String);
  check(userId, String);
  check(focus, Boolean);
  check(changedBy, String);

  return changeFocus(meetingId, userId, focus, changedBy);
}
