import { database } from '../../../services/firebase';
import { createParticipantPreForm } from '../ParticipantForm/index';

export async function createPostForm(props) {
  const formRef = database.ref('postForm');

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
      return true;
    })
    .catch(() => {
      console.log('Erro ao criar formulário');
      return false;
    });
}

export async function createPreForm(props) {
  const formRef = database.ref('preForm');

  formRef
    .push({
      frequency: props.frequency,
      saturation: props.saturation,
      dyspnea: props.dyspnea,
      fatigue: props.fatigue,
      reps: props.reps,
      timer: props.timer,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then((response) => {
      console.log('Formulário cadastrado');
      var property = {
        participant: props.participant,
        preForm: response.key,
      };
      createParticipantPreForm(property);
      return response.key;
    })
    .catch(() => {
      console.log('Erro ao criar formulário');
      return false;
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
