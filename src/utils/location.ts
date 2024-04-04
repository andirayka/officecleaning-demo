import {PermissionsAndroid} from 'react-native';
import Toast from 'react-native-toast-message';

export const getFineLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Izin mengakses lokasi',
        message: 'Aplikasi meminta izin untuk mengakses lokasi Anda',
        buttonNeutral: 'Tanya lagi nanti',
        buttonNegative: 'Tolak',
        buttonPositive: 'Izinkan',
      },
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Toast.show({
        type: 'error',
        text1: 'Akses lokasi tidak diizinkan',
      });
    }
  } catch (err) {
    console.warn(err);
    Toast.show({
      type: 'error',
      text1: 'Terdapat kesalahan',
    });
  }
};

const GMapApi = 'https://maps.googleapis.com/maps/api/';
const GMapKey = 'AIzaSyDj1YUSk7Rja9NjD_uEFEPOIUQwE8r_Hsc';
