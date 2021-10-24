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
  Dimensions,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

class Servicios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        icon: "../Front_Design/Icons/Asset_44.png",
        cuenta: "carlospano@gmail.com",
        servicio: "Netflix",
      },
      labelWidth: 0,
    };
  }

  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { icon, cuenta, servicio } = selectedSlice;
    const keys = ["Netflix", "Educacion", "Salud", "Servicios", "Renta"];
    const values = [
      "../Front_Design/Icons/Asset_44.png",
      "../Front_Design/Icons/Asset_44.png",
      "../Front_Design/Icons/Asset_44.png",
      "../Front_Design/Icons/Asset_44.png",
      "../Front_Design/Icons/Asset_44.png",
    ];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        onPress: () =>
          this.setState({
            selectedSlice: { servicio: key, icon: values[index] },
          }),
      };
    });

    return (
      <View>
        <View
          style={{
            flex: 3,
            backgroundColor: "red",
            alignItems: "center",
            width: deviceWidth / 4,
          }}
        >
          <Image
            source={require("../Front_Design/Icons/Asset_44.png")}
            data={data}
          ></Image>
        </View>

        <View
          style={{
            flex: 3,
            backgroundColor: "blue",
          }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: deviceWidth - 40,
    height: (deviceWidth - 40) * 2.3,

    flex: 1,

    alignItems: "center",
  },
  greenbox: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 365,
    height: 200,
    backgroundColor: "white",
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

export default Servicios;
