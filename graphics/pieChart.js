import React from 'react'
import { Text, View, Dimensions, Image } from 'react-native'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedSlice: {
        icon: null,
        label: 'Tu salud financiera es',
        salud: 'NIVELADA',
      },
      labelWidth: 0,
    }
  }

  render() {
    const { labelWidth, selectedSlice } = this.state
    const { icon, label, salud } = selectedSlice
    const keys = ['Entretenimiento', 'Educacion', 'Salud', 'Servicios', 'Renta']
    const values = [15, 25, 35, 45, 55]
    const colors = ['#072146', '#1464A5', '#2bcccb', '#ffca2d', '#008484']
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: {
          outerRadius: 70 + values[index] + '%',
          padAngle: label === key ? 0.1 : 0,
        },
        onPress: () =>
          this.setState({
            selectedSlice: { label: key, salud: `${values[index]}%` },
          }),
      }
    })
    const deviceWidth = Dimensions.get('window').width

    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'80%'}
          innerRadius={'50%'}
          data={data}
        />

        <Image
          source={require('../Front_Design/Icons/Asset_34.png')}
          style={{
            flex: 1,
            position: 'absolute',
            left: deviceWidth / 2 - 20 / 2,
            alignItems: 'center',
            width: 20,
            height: 20,
            justifyContent: 'center',
            marginBottom: 10
          }}
        />

        <Text
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            this.setState({ labelWidth: width })
          }}
          style={{
            flex: 1,
            position: 'absolute',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center',
            paddingTop: 30,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 8,
              color: '#072146',
            }}>
            {`${label}`}
          </Text>
          {`\n`}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 10,
              color: '#f7931e',
            }}>
            {`${salud}`}
          </Text>
        </Text>
      </View>
    )
  }
}

export default PieChartWithDynamicSlices
