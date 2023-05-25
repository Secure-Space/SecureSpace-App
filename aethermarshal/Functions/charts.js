import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

const Chart = () => {
    const widthAndHeight = 220
    const series = [148, 280, 90]
    const sliceColor = ['#FFC977', '#FF9D43', '#FFFFFF']

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.70}
            coverFill={'#2B2B2B'}
            style={styles.piechart}
          />
          <Text style={styles.title}>System Activity</Text>
          <Text style={styles.subtitle1}>Supervised</Text>
          <Text style={styles.subtitle2}>Locked</Text>
          <Text style={styles.subtitle3}>Unsupervised</Text>
        </View>
      </ScrollView>
    )
}

export default Chart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginRight: 20
  },
  title: {
    fontSize: 18,
    margin: 10,
    color: '#FFBD59',
    position: "absolute",
    fontWeight: "600",
    bottom: 90
  },
  subtitle1: {
    fontSize: 16,
    margin: 10,
    color: '#FF9D43',
    position: "absolute",
    fontWeight: "600",
    top: 190,
    left: 220
  },
  subtitle2: {
    fontSize: 16,
    margin: 10,
    color: '#FFFFFF',
    position: "absolute",
    fontWeight: "600",
    bottom: 190,
    right: 220
  },
  subtitle3: {
    fontSize: 16,
    margin: 10,
    color: '#FFC977',
    position: "absolute",
    fontWeight: "600",
    bottom: 200,
    left: 205
  }
});