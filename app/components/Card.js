import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colours from "../config/colours";
import AppText from "../components/AppText/AppText"

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title} >{title}</AppText>
      <AppText style={styles.subTitle} >{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colours.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colours.dollarGreen,
    fontWeight: 'bold'
  }
});