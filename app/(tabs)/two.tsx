import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Post } from '../../components/Post'; 

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      {/*  ปก กับ โปรไฟล์*/}
      <View style={styles.header}>
        <View style={styles.coverPhoto} />
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI=' }} 
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* ชื่อ กับ ไบโอ */}
      <View style={styles.infoSection}>
        <Text style={styles.userName}>Nattawut Wannasukk</Text>
        <Text style={styles.bio}>ผู้ใช้แอคนี้อยากได้เกรด 4 จากอาจารย์ </Text>
        
        
        <View style={styles.buttonRow}>
          <Pressable style={styles.editButton}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>ตั้่งค่าโปรไฟล์ เพิ่มความหล่อ</Text>
          </Pressable>
          <Pressable style={styles.moreButton}>
            <FontAwesome name="ellipsis-h" size={18} />
          </Pressable>
        </View>
      </View>

    
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginBottom: 15 }}>Highlights</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
      

          <View style={styles.highlightCard}>
            <Image source={{ uri: 'https://preview.redd.it/post-the-best-cat-memes-you-got-in-the-comments-please-v0-kg82lbnu0ste1.png?auto=webp&s=e6f9eee86484f5de3f4e31f3c33b2d07fb982bd5' }} style={styles.highlightImage} />
            <Text style={styles.highlightText}>แมวเป้า</Text>
          </View>

          <View style={styles.highlightCard}>
            <Image source={{ uri: 'https://i.pinimg.com/originals/a8/20/d3/a820d3e87293330fc225541454258430.jpg' }} style={styles.highlightImage} />
            <Text style={styles.highlightText}>แมวน้ำ</Text>
          </View>

          

        </ScrollView>
      </View>

      <View style={styles.separator} />
      
     
      <View style={styles.postSection}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginBottom: 15 }}>Posts</Text>
        
        <Post 
          name="Nattawut Wannasukk"
          caption="แมวน้ำกลิ้งงง"
          Profile_url="https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI="
          Post="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2qk-GqeuPG4WrjwUxNy1wXVglc2JOs4kPw&s"
        />

        <Post 
          name="Nattawut Wannasukk"
          caption="เวรี่กู๊ด👍🏻!"
          Profile_url="https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI="
          Post="https://i.ytimg.com/vi/j1YEVm5M-YM/maxresdefault.jpg"
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  contentContainer: { paddingBottom: 50 },
  header: { height: 200 },
  coverPhoto: { height: 150, backgroundColor: '#3a3a3b' },
  profileImageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 75,
  },
  profileImage: { width: 120, height: 120, borderRadius: 60},
  infoSection: { paddingHorizontal: 20, marginTop: 10, backgroundColor: 'transparent' },
  userName: { fontSize: 24, fontWeight: 'bold' },
  bio: { fontSize: 14, color: 'gray', marginVertical: 5 },
  buttonRow: { flexDirection: 'row', marginTop: 15, width: '100%', backgroundColor: 'transparent' },
  editButton: {
    flex: 1,
    backgroundColor: '#0866FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  moreButton: { backgroundColor: '#e4e6eb', borderRadius: 8, width: 50, justifyContent: 'center', alignItems: 'center' },
  separator: { height: 10, backgroundColor: '#f0f2f5', marginVertical: 20 },
  postSection: { paddingBottom: 20, backgroundColor: 'transparent' },
  highlightCard: { 
    width: 110, 
    height: 160, 
    marginRight: 12, 
    borderRadius: 15, 
    overflow: 'hidden', 
    borderWidth: 0.5, 
    borderColor: '#ddd',
    backgroundColor: 'black' 
  },
  highlightImage: { width: '100%', height: '100%', opacity: 0.8 },
  highlightText: { 
    position: 'absolute', 
    bottom: 10, 
    left: 10, 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10 
  },
});