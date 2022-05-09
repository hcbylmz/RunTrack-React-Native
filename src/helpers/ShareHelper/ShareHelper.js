import {Share} from 'react-native';

export default function ShareHelper(distance, timer) {
  const shareSocial = async () => {
    try {
      const result = await Share.share({
        title: 'My Run is Here',
        message: `I just ran ${distance} meters in ${timer} seconds.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  shareSocial();
}
