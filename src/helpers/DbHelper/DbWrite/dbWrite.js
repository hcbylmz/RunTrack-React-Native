import database from '@react-native-firebase/database';
export default function dbWrite(writeParamRef, writeParams) {
  const newReference = database().ref(writeParamRef).push();
  newReference.set(writeParams);
}
