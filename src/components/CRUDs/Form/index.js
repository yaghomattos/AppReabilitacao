import { database } from '../../../services/firebase';
import {
  createParticipantPostForm,
  createParticipantPreForm,
} from '../ParticipantForm/index';

export async function createPostForm(props) {
  const formRef = database.ref('postForm');

  const date = new Date();
  const brazilianDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

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
      createdAt: brazilianDate,
      updatedAt: brazilianDate,
    })
    .then((response) => {
      console.log('Formulário cadastrado');
      var property = {
        form: response.key,
        name: props.name,
        className: props.className,
        participant: props.participant,
        createdAt: brazilianDate,
        updatedAt: brazilianDate,
      };
      createParticipantPostForm(property);
    })
    .catch(() => {
      console.log('Erro ao criar formulário');
    });
}

export async function createPreForm(props) {
  const formRef = database.ref('preForm');

  const date = new Date();
  const brazilianDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  formRef
    .push({
      name: props.name,
      className: props.className,
      frequency: props.frequency,
      saturation: props.saturation,
      dyspnea: props.dyspnea,
      fatigue: props.fatigue,
      createdAt: brazilianDate,
      updatedAt: brazilianDate,
    })
    .then((response) => {
      console.log('Formulário cadastrado');
      var property = {
        form: response.key,
        name: props.name,
        className: props.className,
        participant: props.participant,
        createdAt: brazilianDate,
        updatedAt: brazilianDate,
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
