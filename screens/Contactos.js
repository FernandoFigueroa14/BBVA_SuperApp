import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Button,
    Dimensions,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

const Contactos = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerProfile}>
                <View style={styles.tabProfileStyle}>
                    <View style={styles.columns}>
                        <Text style={{ color: "#999999" }}>
                            Bienvenido a la superApp
                        </Text>
                        <Text style={{ color: "#072146", fontSize: 18 }}>
                            Lista de {" "}
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                                Contactos
                            </Text>
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Perfil")}
                        >
                            <Image
                                source={require("../Front_Design/Images/Asset7.png")}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginRight: -18,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.corolbox}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#072146",
                            alignSelf: "center",
                            marginTop: 30,
                            marginBottom: 30,
                        }}
                    >
                        Contactos
                    </Text>

                    <View style={styles.tiraBlanca}>
                        <View style={styles.marca}>
                            <Image
                                source={require("../Front_Design/Profile_pics/Dumi.jpeg")}
                                style={{
                                    width: 42,
                                    height: 42,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderRadius: 100,
                                }}
                            ></Image>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "#072146",
                                    }}
                                >
                                    Alejandro Dumas
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        color: "green",
                                    }}
                                >
                                    XXXX-XX45
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-end",
                                marginRight: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: "green",
                                }}
                            >
                                Compañero Intel
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#BCBCBC",
                                }}
                            >
                                ($BIT, $ETH)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tiraBlanca}>
                        <View style={styles.marca}>
                            <Image
                                source={require("../Front_Design/Profile_pics/Altor.jpeg")}
                                style={{
                                    width: 42,
                                    height: 42,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderRadius: 100,
                                }}
                            ></Image>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "#072146",
                                    }}
                                >
                                    Saul Tora
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        color: "green",
                                    }}
                                >
                                    XXXX-XX56
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-end",
                                marginRight: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: "green",
                                }}
                            >
                                Amigo Universidad
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#BCBCBC",
                                }}
                            >
                                ($BIT, $USD)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tiraBlanca}>
                        <View style={styles.marca}>
                            <Image
                                source={require("../Front_Design/Profile_pics/Neto.jpeg")}
                                style={{
                                    width: 42,
                                    height: 42,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderRadius: 100,
                                }}
                            ></Image>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "#072146",
                                    }}
                                >
                                    Neto Guevara
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        color: "green",
                                    }}
                                >
                                    XXXX-XX68
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-end",
                                marginRight: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: "green",
                                }}
                            >
                                Amigo Escuela
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#BCBCBC",
                                }}
                            >
                                ($BIT, $DOG)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tiraBlanca}>
                        <View style={styles.marca}>
                            <Image
                                source={require("../Front_Design/Profile_pics/Fer.jpeg")}
                                style={{
                                    width: 42,
                                    height: 42,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderRadius: 100,
                                }}
                            ></Image>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "#072146",
                                    }}
                                >
                                    Fer Figue
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        color: "green",
                                    }}
                                >
                                    XXXX-XX88
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-end",
                                marginRight: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: "green",
                                }}
                            >
                                Compañero Hackaton
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#BCBCBC",
                                }}
                            >
                                ($BIT, $ETH)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tiraBlanca}>
                        <View style={styles.marca}>
                            <Image
                                source={require("../Front_Design/Profile_pics/Alex.jpg")}
                                style={{
                                    width: 42,
                                    height: 42,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    borderRadius: 100,
                                }}
                            ></Image>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        color: "#072146",
                                    }}
                                >
                                    Alex        Medero
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        color: "green",
                                    }}
                                >
                                    XXXX-XX94
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                alignItems: "flex-end",
                                marginRight: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: "green",
                                }}
                            >
                                Programador Web Apps
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#BCBCBC",
                                }}
                            >
                                ($BIT, $ETH)
                            </Text>
                        </View>
                    </View>

                    
                </View>
            </ScrollView>

            <View style={styles.tabBarStyle}>
                <View style={styles.rows}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Image
                            source={require("../Front_Design/Icons/home(1).png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("SaludFinanciera")}
                    >
                        <Image
                            source={require("../Front_Design/Icons/heart-attack.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>

                    <View style={styles.containerfast}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("FastPay")}
                        >
                            <Image
                                source={require("../Front_Design/Icons/fastpay.png")}
                                style={{ width: 65, height: 65 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Inversiones")}
                    >
                        <Image
                            source={require("../Front_Design/Icons/wallet-filled-money-tool.png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PagoServicios")}
                    >
                        <Image
                            source={require("../Front_Design/Icons/plus(1).png")}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    marca: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    tiraBlanca: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: deviceWidth - 30,
        height: 90,
        borderRadius: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "rgba(213,236,252,0.25)",
    },
    columns: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    tabBarStyle: {
        /*
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 20,*/
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
        height: 60,
        shadowColor: "#072146",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.5,
    },
    containerProfile: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        zIndex: 10000,
        position: "relative",
        height: 100,
    },
    tabProfileStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(213,236,252,1)",

        position: "absolute",
        top: 20,
        left: 10,
        right: 10,

        borderRadius: 15,
        height: 80,
        padding: 15,
        shadowColor: "#072146",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 1.5,
    },
    rows: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    containerfast: {
        height: 70,
        backgroundColor: "white",
        padding: 4,
        borderRadius: 50,
        marginBottom: 40,
    },
    mrContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
    },
    scrollView: {
        backgroundColor: "rgba(213,236,252,0)",
        marginHorizontal: 0,
        paddingHorizontal: 10,
        flex: 1,
    },
    text: {
        fontSize: 42,
    },
    redbox: {
        height: 250,
    },
    nombres: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#072146",
    },
    corolbox: {
        height: (deviceWidth - 40) * 2,
        backgroundColor: "#F2F2F2",

        flex: 1,

        alignItems: "center",
    },
    greenbox: {
        paddingTop: 10,
        paddingBottom: 10,
        width: 365,
        height: 200,

        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#072146",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 1.5,
    },
    purplebox: {
        width: 100,
        height: 100,
        backgroundColor: "purple",
    },
});

export default Contactos;
