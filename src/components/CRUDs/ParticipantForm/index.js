import { database } from '../../../services/firebase';

export async function createParticipantPreForm(props) {
  const participantPreFormRef = database.ref('participantPreForm');

  participantPreFormRef
    .push({
      type: 'preForm',
      name: props.name,
      className: props.className,
      participant: props.participant,
      form: props.form,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

export async function createParticipantPostForm(props) {
  const participantPostFormRef = database.ref('participantPostForm');

  participantPostFormRef
    .push({
      type: 'postForm',
      name: props.name,
      className: props.className,
      participant: props.participant,
      form: props.form,
      reference: props.reference,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
