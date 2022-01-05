import { database } from '../../../services/firebase';

export async function createParticipantPreForm(props) {
  const participantPreFormRef = database.ref('participantPreForm');

  participantPreFormRef
    .push({
      participant: props.participant,
      form: props.preForm,
    })
    .then(() => {
      console.log('ParticipantForm criado');
      return true;
    })
    .catch(() => {
      console.log('Erro ao criar ParticipantForm');
      return false;
    });
}

export async function createParticipantPostForm(props) {
  const participantPostFormRef = database.ref('participantPostForm');

  participantPostFormRef
    .push({
      participant: props.participant,
      form: props.postForm,
    })
    .then(() => {
      console.log('ParticipantForm criado');
      return true;
    })
    .catch(() => {
      console.log('Erro ao criar ParticipantForm');
      return false;
    });
}
