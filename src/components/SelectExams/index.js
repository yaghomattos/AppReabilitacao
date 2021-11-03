import Parse from 'parse/react-native.js';

export async function readSelectExams(patientId, examId) {
  var currentUser = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };
  var currentExam = {
    __type: 'Pointer',
    className: 'Exam',
    objectId: examId,
  };

  const SelectExams = Parse.Object.extend('SelectExams');
  const query = new Parse.Query(SelectExams);
  query.equalTo('patient', currentUser);
  query.equalTo('exam', currentExam);
  try {
    const results = await query.find();
    if (results != undefined) return results[0].id;
    return false;
  } catch (error) {
    console.error('Error while fetching SelectExams', error);
    return false;
  }
}

export async function updateSelectExams(id) {
  const SelectExams = Parse.Object.extend('SelectExams');
  const query = new Parse.Query(SelectExams);
  try {
    const object = await query.get(id);
    if (object.get('check') != true) object.set('check', true);
    try {
      const response = await object.save();
    } catch (error) {
      console.error('Error while updating SelectExams', error);
    }
  } catch (error) {
    console.error('Error while retrieving object SelectExams', error);
  }
}
