import database from '@react-native-firebase/database';
import {useState, useEffect} from 'react';
export default function useDbRead(readParam) {
  const [dbValue, setDbValue] = useState(null);

  useEffect(() => {
    async function fetchDb() {
      const snapshot = await database().ref(readParam).once('value');
      setDbValue(snapshot.val());
    }

    fetchDb();
  }, []);

  return dbValue;
}
