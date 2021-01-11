import { Toast } from "native-base";

export function showWarning(description) {
    Toast.show({
        text: "Warning: " + description,
        type: 'warning',
        buttonText: 'Ok'
    })
}

export function showSuccess(description) {
    Toast.show({
        text: 'Success: ' + description,
        type: 'success',
        buttonText: 'Ok'
    })
}

export function showError(description) {
    Toast.show({
        text: "Error: " + description,
        type: 'danger',
        buttonText: 'Ok'
    })
}