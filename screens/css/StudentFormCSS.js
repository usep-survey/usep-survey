import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    HeaderSurveyContainer: {
        padding: 15,
        backgroundColor: '#800000',
    },

    // Survey Form, Sections, Fields, NavButtons
    SurveySection: {
        textAlign: 'left',
        fontSize: 20,
        padding: 10,
    },
    FormFieldScrollContainer: {
        width: '100%',
        height: '100%',
        padding: 15,
    },
    NavButtonContainer: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 10,
    },
    NavButton: {
        width: '25%',
        height: '100%',
    },

    // Student FillUp Form
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

    // Activity Indicator
    ActivityIndicatorContainer: {
        position: 'absolute',
        top: '40%',
        left: '30%',
        width: '40%',
        height: '25%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});