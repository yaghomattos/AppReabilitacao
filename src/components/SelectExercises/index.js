import Parse from 'parse/react-native.js';

export async function readSelectExercises(patientId) {
  var currentUser = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };

  const SelectExercises = Parse.Object.extend('SelectExercises');
  const query = new Parse.Query(SelectExercises);
  query.equalTo('patient', currentUser);
  try {
    const results = await query.find();
    if (results != undefined) return results[0].id;
    return false;
  } catch (error) {
    console.error('Error while fetching SelectExercises', error);
    return false;
  }
}

export async function updateSelectExercises(id) {
  const SelectExercises = Parse.Object.extend('SelectExercises');
  const query = new Parse.Query(SelectExercises);
  try {
    const object = await query.get(id);
    object.set('check', true);
    try {
      const response = await object.save();
    } catch (error) {
      console.error('Error while updating SelectExercises', error);
    }
  } catch (error) {
    console.error('Error while retrieving object SelectExercises', error);
  }
}
