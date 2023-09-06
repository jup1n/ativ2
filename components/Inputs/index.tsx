import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

type Props = {
    onChangeInput : (text: any) => void
    title : String
}

export default function Inputs(props: Props){
    return (
        <View>
            <Text style={styles.text}>{props.title}</Text>
            <TextInput  onChangeText={props.onChangeInput}
                        keyboardType="decimal-pad"
                        style={styles.input}/>
        </View>
    )
}