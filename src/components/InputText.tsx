import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {useController, UseControllerProps, FieldValues} from 'react-hook-form';
import {Text, TextInput, TextInputProps} from 'react-native-paper';

type Props<T extends FieldValues> = {
  containerStyle?: ViewStyle;
  hookForm: UseControllerProps<T>; // I chose a separate object called "hookForm", instead of combining UseControllerProps<T> along with TextInputProps because there are the same properties from TextInputProps and  UseControllerProps<T>, which is "defaultValues"
} & TextInputProps;

const InputText = <T extends FieldValues>({
  containerStyle,
  hookForm: {name, control},
  ...textInputProps
}: Props<T>) => {
  const {
    field: {onChange, onBlur, value},
    fieldState: {error},
  } = useController({name, control});

  return (
    <View style={[{marginBottom: 16}, containerStyle]}>
      {/* Input Text */}
      <TextInput
        label={textInputProps.placeholder}
        onChangeText={onChange}
        value={value?.toString() || ''}
        onBlur={onBlur}
        style={styles.textInput}
        {...textInputProps}
      />

      {/* Error Message */}
      {error && <Text style={styles.errorMessage}>{error.message}</Text>}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  errorMessage: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 2,
  },
  textInput: {
    backgroundColor: 'white',
  },
});
