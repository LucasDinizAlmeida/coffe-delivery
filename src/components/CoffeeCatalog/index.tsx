import { View, Text } from "react-native";
import { styles } from "./styles";
import { CatalogCard } from "../CatalogCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { CoffesDataProps } from "../../data/coffesData";

interface Props {
    type: 'TRADICIONAIS' | 'DOCES' | 'ESPECIAIS'
    data: CoffesDataProps[]
}

export function CoffeCatalog({ type, data }: Props) {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {type}
            </Text>

            {
                data
                    .filter(item => item.type.toUpperCase() === type.toLocaleUpperCase())
                    .map(item => (
                        <CatalogCard 
                            key={item.id}
                            data={item} 
                            onPress={() => navigate('details', { id: item.id })}
                        />
                    ))
            }
            {/* <CatalogCard coffeeId="1" onPress={() => navigate('details', { id: '1' })}/>
            <CatalogCard coffeeId="1" onPress={() => navigate('details', { id: '1' })}/>
            <CatalogCard coffeeId="1" onPress={() => navigate('details', { id: '1' })}/>
            <CatalogCard coffeeId="1" onPress={() => navigate('details', { id: '1' })}/> */}
        </View>
    )
}