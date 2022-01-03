import Parse from 'parse/react-native.js';

export async function createForm(props) {
  const myNewObject = new Parse.Object('Form');
  myNewObject.set('Frequency', props.frequency);
  myNewObject.set('Saturation', props.saturation);
  myNewObject.set('Dyspnea', props.dyspnea);
  myNewObject.set('Fatique', props.fatigue);
  if (props.reps) myNewObject.set('Reps', props.reps);
  try {
    const result = await myNewObject.save();
    if (result !== undefined) return result.id;
    return false;
  } catch (error) {
    console.error('Error while creating Form: ', error);
    return false;
  }
}

export async function readForm() {
  const Form = Parse.Object.extend('Form');
  const query = new Parse.Query(Form);
  query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    if (results[0].id !== undefined) {
      return results[0];
    }
    return false;
  } catch (error) {
    console.error('Error while fetching Form', error);
    return false;
  }
}
