import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DailyScreen = () => {
  const [horoscopeData, setHoroscopeData] = useState({});

  useEffect(() => {
    fetchHoroscopeData();
  }, []);

  const fetchHoroscopeData = async () => {
    const signs = [
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces',
    ];

    try {
      const requests = signs.map((sign) =>
        fetch(`https://api.astrologyapi.com/v1/sun_sign_prediction/daily/${sign}`)
      );
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map((response) => response.json()));

      const horoscopeData = {};
      data.forEach((signData, index) => {
        const sign = signs[index];
        horoscopeData[sign] = signData.prediction;
      });

      setHoroscopeData(horoscopeData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horoscope du jour</Text>
      {Object.keys(horoscopeData).map((sign) => (
        <View key={sign} style={styles.signContainer}>
          <Text style={styles.signTitle}>{sign}</Text>
          <Text style={styles.horoscopeText}>{horoscopeData[sign]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signContainer: {
    marginBottom: 20,
  },
  signTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  horoscopeText: {
    fontSize: 16,
  },
});
