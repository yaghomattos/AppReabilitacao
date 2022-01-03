import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createParticipantPreForm(props) {
  const participantPreFormRef = database.ref('participantPreForm');

  participantPreFormRef
    .push({
      participant: props.participant,
      preForm: props.preForm,
    })
    .then(() => {
      Alert.alert('Exercício selecionado');
    })
    .catch(() => {
      Alert.alert('Erro ao selecionar exercício');
    });
}

export async function createParticipantPostForm(props) {
  const participantPostFormRef = database.ref('participantPostForm');

  participantPostFormRef
    .push({
      participant: props.participant,
      postForm: props.postForm,
    })
    .then(() => {
      Alert.alert('Exercício selecionado');
    })
    .catch(() => {
      Alert.alert('Erro ao selecionar exercício');
    });
}
