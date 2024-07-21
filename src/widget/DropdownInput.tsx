import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import Responsiveness from '../helpers/Responsiveness';
import { OptionsTypes } from '../Mock/Options';
import { useNavigation } from '@react-navigation/native';
import { ColorType } from '../screens/AthScreens/AuthrizationScreens/Registeration/SelectColorScreen';
import { CarInfoType } from '../screens/AthScreens/AuthrizationScreens/Registeration/AddPersonalCarScreen';

interface DropdownProps {
    placeholder: string
    label: String
    data?: OptionsTypes
    value?: string | number | boolean
    setValue?: React.Dispatch<React.SetStateAction<CarInfoType>>
    selectedColor?: ColorType
    name?: any
}

export const Data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const DropdownInput: React.FC<DropdownProps> = ({placeholder, label, data, value, setValue, selectedColor, name}) => {
    const [isFocus, setIsFocus] = useState(false);
    const navigation = useNavigation() as any;

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

  return (
    <View style={{marginTop: Responsiveness.getResponsiveWidth(3)}}>
        <Text style={{fontSize: Responsiveness.getResponsiveWidth(3.5)}} className='font-bold'>{label}</Text>
        <View className='flex items-center' style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data ? data : Data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? placeholder : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            // setValue(item?.value);
            setValue && setValue((prev)=> ({
              ...prev,
              [name]: item.value
            }))
            setIsFocus(false);
          }}
          // renderItem={() => (
          //   <View>
          //     {color ? <View className='rounded-full' style={{width: Responsiveness.getResponsiveWidth(10), height: Responsiveness.getResponsiveWidth(10), backgroundColor: color}} /> : null}
          //   </View>
          // )}
        />
      </View>
    </View>

  )
}

export default DropdownInput;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
    },
    dropdown: {
      height: Responsiveness.getResponsiveWidth(15),
      width: Responsiveness.getResponsiveWidth(93),
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 12
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });