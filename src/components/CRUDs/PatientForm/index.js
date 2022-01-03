import Parse from 'parse/react-native.js';

export async function createParticipantForm(participant, form, receive) {
  const myNewObject = new Parse.Object('ParticipantForm');
  myNewObject.set('participant', participant);
  myNewObject.set('form', form);
  if (receive.className == 'Exercise') myNewObject.set('exercise', receive);
  else myNewObject.set('exam', receive);
  try {
    const result = await myNewObject.save();
    if (result !== undefined) return result.id;
    return false;
  } catch (error) {
    console.error('Error while creating ParticipantForm: ', error);
    return false;
  }
}

export async function readParticipantForm() {
  const ParticipantForm = Parse.Object.extend('ParticipantForm');
  const query = new Parse.Query(ParticipantForm);
  query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    if (results[0].id !== undefined) {
      return results[0];
    }
    return false;
  } catch (error) {
    console.error('Error while fetching ParticipantForm', error);
    return false;
  }
}
