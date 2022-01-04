import { database } from '../../../services/firebase';

export async function readSelectTest(props) {
  var selectTest = '';
  const selectTestRef = database
    .ref('selectTest')
    .orderByChild('name')
    .equalTo(props)
    .on('child_added', function (snapshot) {
      selectTest = snapshot;
    });

  if (!selectTest) {
    console.log('selectTest does not exists.');
    return;
  } else {
    return selectTestRef;
  }
}

export async function updateSelectTest(props) {
  const selectTestRef = database.ref('selectTest/' + props);

  selectTestRef.update({
    check: true,
  });
}
