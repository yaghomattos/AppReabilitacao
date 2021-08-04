import Parse from 'parse/react-native.js';

export async function readPatient(CPF) {
  const CPFValue = CPF;
  var query = new Parse.Query('Patient');
  query.equalTo('CPF', CPFValue);

  try {
    const queryResults = await query.find();
    if (queryResults[0].id !== undefined) {
      return queryResults[0].id;
    }
    return false;
  } catch (error) {
    console.log('Error fetch patient: ' + error.code + ' ' + error.message);
    return false;
  }
}

export async function updatePatient() {
  const query = new Parse.Query('Patient');
  try {
    const object = await query.get('zhHv8svvJ6');
    object.set('name', 'A string');
    try {
      const response = await object.save();

      console.log(response.get('name'));
      console.log('Patient updated', response);
    } catch (error) {
      console.error('Error while updating Patient', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Patient', error);
  }
}

export async function deletePatient(objectId) {
  const query = new Parse.Query('Patient');
  try {
    const patient = await query.get(objectId);
    try {
      const response = await patient.destroy();
      console.log('Deleted ParsePatient', response);
    } catch (error) {
      console.error('Error while deleting ParsePatient', error);
    }
  } catch (error) {
    console.error('Error while retrieving ParsePatient', error);
  }
}
