import { Alert } from "react-native";

export default showAlert = (props) => {
  const { title, text, handleCancel, handleDismiss, handleOpen } = props;
  return Alert.alert(
    title,
    text,
    [
      {
        text: "Cancel",
        onPress: () => handleCancel(),
        style: "cancel",
      },
      {
        text: "Open",
        onPress: () => handleOpen(title),
        style: "default",
      },
    ],
    {
      cancelable: true,
      onDismiss: () => handleDismiss(),
    }
  );
};
