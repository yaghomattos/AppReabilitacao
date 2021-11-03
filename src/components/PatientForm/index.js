import Parse from 'parse/react-native.js';

export async function createPatientForm(patient, form, receive) {
  const myNewObject = new Parse.Object('PatientForm');
  myNewObject.set('patient', patient);
  myNewObject.set('form', form);
  if (receive.className == 'Exercise') myNewObject.set('exercise', receive);
  else myNewObject.set('exam', receive);
  try {
    const result = await myNewObject.save();
    if (result !== undefined) return result.id;
    return false;
  } catch (error) {
    console.error('Error while creating PatientForm: ', error);
    return false;
  }
}

export async function readPatientForm() {
  const PatientForm = Parse.Object.extend('PatientForm');
  const query = new Parse.Query(PatientForm);
  query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    if (results[0].id !== undefined) {
      return results[0];
    }
    return false;
  } catch (error) {
    console.error('Error while fetching PatientForm', error);
    return false;
  }
}
