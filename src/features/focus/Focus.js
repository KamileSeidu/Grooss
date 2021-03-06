import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject}) => {
    const [tmpItem, setTmpItem] = useState (null)
    return (
        <View style={styles.container}>
            <View style ={styles.titleContainer}> 
                <Text style = {styles.title}>What would you like to focus on ?</Text>
            </View>
            <view style = {styles.inputContainer}>
                <TextInput style= {{flex: 1, marginright: 20}}
                    onSubmitEditing={({ nativeEvent }) => {setTmpItem (nativeEvent.text)}}/>
                <RoundedButton size = {50} title = "+" pnPress={() => {addSubject(tmpItem)}} />
            </view>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 50,
       
    },
    titleContainer: {
        flex: 0.5,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    inputContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',

    }

});