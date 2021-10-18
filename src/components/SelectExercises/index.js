import Parse from 'parse/react-native.js';

export async function readSelectExercises(patientId, exerciseId) {
  var currentUser = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };
  var currentExercise = {
    __type: 'Pointer',
    className: 'Exercise',
    objectId: exerciseId,
  };

  const SelectExercises = Parse.Object.extend('SelectExercises');
  const query = new Parse.Query(SelectExercises);
  query.equalTo('patient', currentUser);
  query.equalTo('exercise', currentExercise);
  try {
    const results = await query.find();
    if (results != undefined) return results[0].id;
    return false;
  } catch (error) {
    console.error('Error while fetching SelectExercises', error);
    return false;
  }
}

export async function updateSelectExercises(id, formId) {
  var formPointer = {
    __type: 'Pointer',
    className: 'Form',
    objectId: formId,
  };

  const SelectExercises = Parse.Object.extend('SelectExercises');
  const query = new Parse.Query(SelectExercises);
  try {
    const object = await query.get(id);
    if (object.get('check') != true) object.set('check', true);
    if (object.get('form') == undefined || object.get('form') == '')
      object.set('form', formPointer);
    try {
      const response = await object.save();
    } catch (error) {
      console.error('Error while updating SelectExercises', error);
    }
  } catch (error) {
    console.error('Error while retrieving object SelectExercises', error);
  }
}
