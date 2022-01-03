import { database } from '../../../services/firebase';

export async function createPostForm(props) {
  const formRef = database.ref('form');

  formRef
    .push({
      reps: '',
      time: '',
      frequency: '',
      saturation: '',
      dyspnea: '',
      fatique: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then(() => {
      console.log('Formulário cadastrado');
    });
}

export async function createPreForm(props) {
  const formRef = database.ref('form');

  formRef
    .push({
      frequency: '',
      saturation: '',
      dyspnea: '',
      fatique: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then(() => {
      console.log('Formulário cadastrado');
    });
}

export async function readForm(props) {
  const formRef = await database.ref(`form/${props}`).get();

  if (!formRef.exists()) {
    console.log('Form does not exists.');
    return false;
  } else {
    return formRef;
  }
}
