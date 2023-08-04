import { View, Text } from "react-native";
import { styles } from "./styles";
import { CatalogCard } from "../CatalogCard";

interface Props {
    type: 'TRADICIONAIS' | 'DOCES' | 'ESPECIAS'
}

export function CoffeCatalog({ type }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {type}
            </Text>

            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
        </View>
    )
}