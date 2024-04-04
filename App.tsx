import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Routes from '@/routes';
import store from '@/store';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {setDefaultOptions} from 'date-fns';
import {id} from 'date-fns/locale';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

setDefaultOptions({locale: id});

const App = () => {
  // useEffect(() => {
  //   DropDownPicker.setListMode('SCROLLVIEW');
  // }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

          <Provider store={store}>
            <BottomSheetModalProvider>
              <Routes />
              {/* Toast should be under <Routes /> */}
              <Toast position="bottom" visibilityTime={2000} />
            </BottomSheetModalProvider>
          </Provider>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
