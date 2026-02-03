import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Post } from '../../components/Post';
import PostData from '../../post-data.json';

export default function FacebookFeed() {

  // โพส กับ สตอรี่
  const renderHeader = () => (
    <View style={{ backgroundColor: '#f0f2f5' }}>
      {/* คิดอิหยังอยู่ */}
      <View style={styles.whatsOnMind}>
        <Image source={{ uri: 'https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI=' }} style={styles.avatarSmall} />
        <View style={styles.inputBox}>
          <Text style={{ color: '#65676b' }}>คิดอิหยังอยู่?</Text>
        </View>
        <FontAwesome6 name="images" size={22} color="#45BD62" style={{ marginLeft: 10 }} />
      </View>

      {/* สตอรี่ */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
        {/* สตอรี่คนหล่อ */}
        <View style={styles.storyCard}>
          <Image source={{ uri: 'https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI=' }} style={styles.storyImg} />
          <View style={styles.plusIcon}>
            <FontAwesome6 name="plus" size={14} color="white" />
          </View>
          <Text style={styles.storyName}>สร้างสตอรี่</Text>
        </View>

        {/* รูปสตอรี่*/}
        {PostData.slice(0, 5).map((item, index) => (
          <View key={index} style={styles.storyCard}>
            <Image source={{ uri: item.Story }} style={styles.storyImg} />
            <View style={styles.storyAvatarBorder}>
              <Image source={{ uri: item.Profile_url }} style={styles.storyAvatar} />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={{ height: 10 }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PostData} //
        ListHeaderComponent={renderHeader} 
        keyExtractor={(item) => item.id.toString()} //
        renderItem={({ item }) => (
          <Post 
            name={item.name} 
            caption={item.caption} 
            Profile_url={item.Profile_url} 
            Post={item.Post} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  topBar: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center', padding: 15, backgroundColor: 'white' 
  },
  logoText: { fontSize: 28, fontWeight: 'bold', color: '#0866FF', letterSpacing: -1 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center' },
  whatsOnMind: { 
    flexDirection: 'row', alignItems: 'center', padding: 12, 
    backgroundColor: 'white', borderTopWidth: 0.5, borderColor: '#eee' 
  },
  avatarSmall: { width: 40, height: 40, borderRadius: 20 },
  inputBox: { 
    flex: 1, height: 40, borderRadius: 20, backgroundColor: '#f0f2f5', 
    justifyContent: 'center', paddingLeft: 15, marginLeft: 10, borderWidth: 1, borderColor: '#ddd' 
  },
  storyContainer: { backgroundColor: 'white', paddingVertical: 12, marginTop: 10, paddingLeft: 10 },
  storyCard: { 
    width: 105, height: 185, backgroundColor: '#fff', borderRadius: 12, 
    marginRight: 8, overflow: 'hidden', borderWidth: 0.5, borderColor: '#ddd' 
  },
  storyImg: { width: '100%', height: '100%', opacity: 0.9 },
  storyName: { 
    position: 'absolute', bottom: 8, left: 8, color: 'white', 
    fontWeight: 'bold', fontSize: 12, textShadowColor: 'black', textShadowRadius: 4 
  },
  plusIcon: { 
    position: 'absolute', top: 8, left: 8, backgroundColor: '#0866FF', 
    width: 28, height: 28, borderRadius: 14, justifyContent: 'center', 
    alignItems: 'center', borderWidth: 2, borderColor: 'white' 
  },
  storyAvatarBorder: {
    position: 'absolute', top: 8, left: 8, width: 36, height: 36, 
    borderRadius: 18, borderWidth: 3, borderColor: '#0866FF', padding: 2
  },
  storyAvatar: { width: '100%', height: '100%', borderRadius: 15 },
});