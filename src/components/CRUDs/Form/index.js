import { database } from '../../../services/firebase';
import {
  createParticipantPostForm,
  createParticipantPreForm,
} from '../ParticipantForm/index';

export async function createPostForm(props) {
  const formRef = database.ref('postForm');

  formRef
    .push({
      name: props.name,
      className: props.className,
      reps: props.reps,
      timer: props.timer,
      frequency: props.frequency,
      saturation: props.saturation,
      dyspnea: props.dyspnea,
      fatigue: props.fatigue,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then((response) => {
      console.log('Formulário cadastrado');
      var property = {
        form: response.key,
        name: props.name,
        participant: props.participant,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      createParticipantPostForm(property);
    })
    .catch(() => {
      console.log('Erro ao criar formulário');
    });
}

export async function createPreForm(props) {
  const formRef = database.ref('preForm');

  formRef
    .push({
      name: props.name,
      className: props.className,
      frequency: props.frequency,
      saturation: props.saturation,
      dyspnea: props.dyspnea,
      fatigue: props.fatigue,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    .then((response) => {
      console.log('Formulário cadastrado');
      var property = {
        form: response.key,
        name: props.name,
        participant: props.participant,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      createParticipantPreForm(property);
    })
    .catch(() => {
      console.log('Erro ao criar formulário');
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
