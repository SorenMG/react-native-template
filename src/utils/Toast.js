import { Toast } from "native-base";
import { Platform } from "react-native";

const DURATION = 2000

export function showWarning(description) {
    Platform.OS !== 'web' && Toast.show({
        text: "Warning: " + description,
        type: 'warning',
        buttonText: 'OK',
        duration: DURATION
    })
}

export function showSuccess(description) {
    Platform.OS !== 'web' && Toast.show({
        text: 'Success: ' + description,
        type: 'success',
        buttonText: 'OK',
        duration: DURATION,
    })
}

export function showError(description) {
    Platform.OS !== 'web' && Toast.show({
        text: "Error: " + description,
        type: 'danger',
        buttonText: 'OK',
        duration: DURATION
    })
}