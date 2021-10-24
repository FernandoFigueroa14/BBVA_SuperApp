import React from "react";
import { useState } from "react";

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

const keys = ["Netflix", "Spotify", "Xbox Game Pass", "Izzi"];
const precios = ["196", "115", "229", "520"];
const urls = [
  "https://www.pngall.com/wp-content/uploads/4/Round-Netflix-Logo.png",
  "https://www.pngrepo.com/png/125477/512/spotify.png",
  "https://www.freepnglogos.com/uploads/xbox-png-gamepad-16.png",
  "https://cdn.fing.io/images/isp/MX/logo/izzi_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_blue_arrow-left.svg/2048px-Eo_circle_blue_arrow-left.svg.png"
];
//let cont = 0;

class Servicios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconC: urls[0],
      iconL: urls[-1],
      iconR: urls[1],
      cuenta: "carlospano@gmail.com",
      servicio: keys[0],
      precio: precios[0],
      cont: 1,
      contN: 0
    };
  }

  Load_DataR = () => {
    this.setState({
      servicio: keys[this.state.cont],
      precio: precios[this.state.cont],
      iconC: urls[this.state.cont],
      iconL: urls[this.state.cont - 1],
      iconR: urls[this.state.cont + 1],
      cont: this.state.cont < 3 ? this.state.cont + 1 : 0,
      contN: this.state.cont - 1
    });
  };

  Load_DataL = () => {
    this.setState({
      servicio: keys[this.state.contN],
      precio: precios[this.state.cont],
      iconC: urls[this.state.contN],
      iconL: urls[this.state.contN - 1],
      iconR: urls[this.state.contN + 1],
      contN: this.state.contN > 0 ? this.state.contN - 1 : 2,
      cont: this.state.contN + 1
    });
  };

  render() {
    // const { labelWidth, selectedSlice } = this.state;
    const { iconS, cuenta, servicio, cont, precio } = this.state;

    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={this.Load_DataL}>
            <Image
              source={{ uri: this.state.iconL }}
              style={{
                width: deviceWidth / 8,
                height: deviceWidth / 8,
              }}
            />
          </TouchableOpacity>

          <Image
            //data={data}
            source={{ uri: this.state.iconC }}
            style={{
              width: deviceWidth / 4,
              height: deviceWidth / 4,
              marginHorizontal: 10,
            }}
          />

          <TouchableOpacity onPress={this.Load_DataR}>
            <Image
              source={{ uri: this.state.iconR }}
              style={{
                width: deviceWidth / 8,
                height: deviceWidth / 8,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: "700",
              color: "#072146",
              marginBottom: -15,
            }}
          >
            Cuenta {`${servicio}: \n`}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "red",
              fontWeight: "200",
              color: "#072146",
            }}
          >
            {`${cuenta}`}
          </Text>
        </View>

        <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: "700",
              color: "#072146",
              marginBottom: -25,
            }}
          >
            Total a pagar:
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              backgroundColor: "rgba(203, 203, 203, 0.8)",
              color: "#072146",
              margin: 30,
              fontSize: 30,
              width: deviceWidth - 80,
              height: 45,
              borderRadius: 5,
              paddingTop: 5,
            }}
          >
            {`$${precio}.00`}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

function iconExport(icon) {
  return icon;
}

export default Servicios;
