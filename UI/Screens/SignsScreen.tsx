import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { StyleSign } from '../Styles/StyleSign';
import { useNavigation } from '@react-navigation/native';
import { Jourdate } from '../Components/Jourdate';

export const SignsScreen = () => {
  const data = [
    // Les données de vos signes
    {
        id: '1',
        image: require('../../assets/Images/aries_r.png'),
        description: 'Belier',
        color: '#D6936B',
        firstext: `Le Bélier est le premier signe du zodiaque et est associé à la période du 21 mars au 19 avril. C'est un signe de feu gouverné par la planète Mars. Les personnes nées sous le signe du Bélier sont connues pour leur énergie débordante et leur dynamisme. Elles sont souvent très actives et aiment relever de nouveaux défis. Les Béliers sont des leaders naturels. Ils ont un fort esprit de compétition et sont déterminés à atteindre leurs objectifs. Ils sont audacieux, courageux et prêts à prendre des initiatives.`,
        secondtext:` Le Bélier est caractérisé par ces caractères : Indépendance, Impulsivité, Passion et spontanéité, Honnêteté,Sens de l'initiative. Les individus du signe du Bélier apprécient leur indépendance et aiment suivre leur proprevoie. Ils sont souvent des pionniers et n'ont pas peur de prendre des décisions difficiles.Les Béliers ont tendance à agir de manière impulsive. Ils peuvent parfois prendre des décisions rapides sans réfléchir aux conséquences. Cela peut les rendre audacieux, mais peut également leur causer des problèmes s'ils ne prennent pas le temps de réfléchir.
        Les Béliers sont passionnés et aiment vivre l'instant présent. Ils sont spontanés et aiment se lancer dans de nouvelles expériences et aventures.Les personnes nées sous le signe du Bélier sont généralement directes et franches. Elles disent ce qu'elles pensent sans détour, ce qui peut parfois les rendre un peu brusques.`,
        date:`21 Mars - 19 Avril`,
      },   
      {
        id: '2',
        image: require('../../assets/Images/taureau_r.png'),
        description: 'Taureau',
        color: '#75AB87',
        firstext: `Le Taureau est le deuxième signe du zodiaque et est associé à la période du 20 avril au 20 mai. C'est un signe de terre gouverné par la planète Vénus. Les personnes nées sous le signe du Taureau sont réputées pour leur stabilité, leur détermination et leur sens pratique. Ils ont une nature calme et paisible, mais aussi une grande force intérieure.`,
        secondtext:`Les Taureaux sont connus pour leur persévérance et leur endurance. Ils sont souvent fiables, loyaux et travaillent dur pour atteindre leurs objectifs. Ils ont également un fort sens de la sécurité et apprécient les choses matérielles et luxueuses.
      
Les Taureaux sont souvent attachés à leurs routines et peuvent être un peu têtus. Ils apprécient la stabilité et ont du mal à faire face aux changements brusques. Cependant, une fois qu'ils prennent une décision, ils s'y tiennent fermement.
      
Sur le plan émotionnel, les Taureaux sont généralement calmes et détendus. Ils sont sensuels et apprécient les plaisirs de la vie, comme la bonne nourriture, le confort et la beauté. Ils ont également un fort lien avec la nature et peuvent être de grands amateurs d'art et de musique.
      
En résumé, les personnes nées sous le signe du Taureau sont stables, déterminées et attachées à la sécurité. Ils sont fiables, loyaux et travaillent dur pour atteindre leurs objectifs. Leur nature calme et sensuelle les rend appréciés dans leurs relations personnelles.`,
        date:`20 Avril - 20 Mai`,
      },
      {
          id: '3',
          image: require('../../assets/Images/gemini_r.png'),
          description: 'Gemeaux',
          color:'#B87BCB',
        },
        {
          id: '4',
          image: require('../../assets/Images/cancer_r.png'),
          description: 'Cancer',
          color:'#AC6664',
        },
        {
          id: '5',
          image: require('../../assets/Images/lion_r.png'),
          description: 'Lion',
          color:'#70559A',
        },
        {
          id: '6',
          image: require('../../assets/Images/virgo_r.png'),
          description: 'Vierge',
          color:'#CAA151',
        },
        {
          id: '7',
          image: require('../../assets/Images/balance_r.png'),
          description: 'Balance',
          color:'#C5B47E',
          firstext:`Le signe de la Balance est associé aux personnes nées entre le 23 septembre et le 22 octobre. C'est le septième signe du zodiaque et il est symbolisé par la balance, représentant l'équilibre et l'harmonie.
Les personnes nées sous le signe de la Balance sont souvent perçues comme des individus aimables, charmeurs et sociables. Elles ont un grand sens de la justice et cherchent constamment l'équilibre dans tous les aspects de leur vie.`,
          secondtext:`Voici quelques caractéristiques principales du signe de la Balance :

Diplomatie : Les Balances sont connues pour leur nature diplomatique et leur capacité à résoudre les conflits. Elles sont des médiateurs naturels et recherchent des solutions justes pour toutes les parties impliquées.
          
Équilibre et harmonie : Les Balances sont profondément attirées par l'harmonie et cherchent à maintenir un équilibre dans tous les domaines de leur vie. Elles accordent une grande importance à la beauté, à l'esthétique et à l'équité.
          
Charme et sociabilité : Les personnes nées sous le signe de la Balance sont souvent charismatiques, charmantes et sociables. Elles ont un talent naturel pour les relations interpersonnelles et peuvent créer un environnement agréable et harmonieux dans leurs interactions sociales.
          
En résumé, le signe de la Balance est associé à l'équilibre, à l'harmonie, à la diplomatie et à l'amour de la beauté. Les personnes nées sous ce signe ont souvent des qualités de médiation, recherchent la justice et s'efforcent de créer un environnement équilibré dans leur vie et leurs relations.`,
          date:`23 Sept - 22 Octo`,
        },
        {
          id: '8',
          image: require('../../assets/Images/scorpion_r.png'),
          description: 'Scorpion',
          color:'#DC825F',
        },
        {
          id: '9',
          image: require('../../assets/Images/sagittaire_r.png'),
          description: 'Sagittaire',
          color:'#5CA39F',
        },
        {
          id: '10',
          image: require('../../assets/Images/capricorn_r.png'),
          description: 'Capricorn',
          color:'#F59696',
        },
        {
          id: '11',
          image: require('../../assets/Images/verseau_r.png'),
          description: 'Verseau',
          color:'#6BB2E0',
        },
        {
          id: '12',
          image: require('../../assets/Images/poisson_r.png'),
          description: 'Poisson',
          color:'#EC699F',
        }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={StyleSign.itemContainer} onPress={() => handleSignPress(item)} >
      <View>
        <Image source={item.image} style={StyleSign.image} />
        <Text style={[StyleSign.description, { color: item.color }]}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigation = useNavigation();

  const handleSignPress = (sign) => {
    navigation.navigate('Horoscop', { sign });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Images/horoscop_img.jpg')} style={styles.backgroundImage} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <StatusBar hidden={true} />
        <View style={StyleSign.head}>
          <Image style={StyleSign.img} source={require('../../assets/Images/avatar.jpg')} />
        </View>

        <Text style={StyleSign.text}>Hello Fouad,</Text>
        <Text style={StyleSign.subtext}>What do you want to know?</Text>

        <Jourdate />

        <Text style={StyleSign.selectsign}>Select Your sign</Text>

        <View style={StyleSign.containerii}>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
