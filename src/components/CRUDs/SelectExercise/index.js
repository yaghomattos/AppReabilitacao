import { database } from '../../../services/firebase';

export async function readSelectExercise(props) {
  var selectExercise = '';
  const selectExerciseRef = database
    .ref('selectExercise')
    .orderByChild('name')
    .equalTo(props)
    .on('child_added', function (snapshot) {
      selectExercise = snapshot;
    });

  if (!selectExercise) {
    return;
  } else {
    return selectExerciseRef;
  }
}

export async function updateSelectExercise(props) {
  const selectExerciseRef = database.ref('selectExercise/' + props);

  selectExerciseRef.update({
    check: true,
  });
}
