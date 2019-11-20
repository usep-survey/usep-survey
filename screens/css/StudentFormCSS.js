import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    FormContainer: {
        position: 'absolute',
                top: '25%',
                left: '20%',
                width: '60%',
                height: '50%',
                borderWidth: 1,
    },
    FormLabel: {
        fontSize: 25,
    },
    TextInputContainer: {
        width: '100%',
        height: '20%',
        borderWidth: 1,
        borderColor: 'red',
    },
    DropdownInput: {
        height: '100%',
        width: '50%',
        borderWidth: 1,
        position: 'absolute',
        right: 1,
    },
});