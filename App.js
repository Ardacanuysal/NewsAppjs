import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Text,Image,StyleSheet,FlatList,ScrollView,Dimensions } from 'react-native';import newsdata from './news_data.json';
import NewsCard from './Components/NewsCard/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

export default function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Gündem</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.banner_image}
                
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eceff1',
    },
    banner_image: {
      height: Dimensions.get('window').height / 5,
      width: Dimensions.get('window').width / 2,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
  
 