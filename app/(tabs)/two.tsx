import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet,Share } from 'react-native';
import { useState } from 'react';

export default function ProfileScreen() {
  const [likes, setLikes] = useState(0);
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      {/*ปก กับ โปรไฟล์ */}
      <View style={styles.header}>
        <View style={styles.coverPhoto} />
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI=' }} 
            style={styles.profileImage}
          />
        </View>
      </View>

      {/*ชื่อ กับ ไบโอ */}
      <View style={styles.infoSection}>
        <Text style={styles.userName}>Nattawut Wannasukk</Text>
        <Text style={styles.bio}>ผู้ใช้แอคนี้อยากได้เกรด 4 จากอาจารย์</Text>
        
        <View style={styles.buttonRow}>
          <Pressable style={styles.editButton}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Edit Profile</Text>
          </Pressable>
          <Pressable style={styles.moreButton}>
            <FontAwesome name="ellipsis-h" size={18} />
          </Pressable>
        </View>
      </View>

      <View style={styles.separator} />
      
  
      <View style={styles.postSection}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginBottom: 10 }}>Posts</Text>
        
          {/*โพส*/}
        <View style={styles.fakePost}>
          <View style={styles.postHeader}>
            <Image  
              source={{ uri: "https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI="}} 
              style={styles.postAvatar}  
            />
            <View>
              <Text style={styles.postName}>Nattawut Wannasukk</Text>
              <Text style={styles.postTime}>Just now · 🌎</Text>
            </View>
          </View>
          <Text style={styles.postText}>แมวน้ำตัวแรกน่ารักจัง </Text>
          <Image  
            source={{ uri: "https://image.springnews.co.th/uploads/images/contents/w1024/2023/03/Be7kcUQSNFF8HyZUhbAW.webp?x-image-process=style/lg-webp"}} 
            style={styles.postImage}  
          />
          <View style={{ padding: 10 }}>

  <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
    <FontAwesome name="thumbs-up" size={16} color="#0866FF" /> {likes} Likes
  </Text>

  <View style={{ borderTopWidth: 1, borderColor: '#eee', paddingTop: 10, flexDirection: 'row' }}>
    <Pressable 
      onPress={() => setLikes(likes + 1)} 
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        opacity: pressed ? 0.5 : 1,
        flex: 1,
        justifyContent: 'center'
      })}
    >
      <FontAwesome name="thumbs-o-up" size={20} color={likes > 0 ? "#0866FF" : "gray"} />
      <Text style={{ marginLeft: 5, color: likes > 0 ? "#0866FF" : "gray", fontWeight: 'bold' }}>
        Like
      </Text>
    </Pressable>
    
  
    <Pressable style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <FontAwesome name="comment-o" size={20} color="gray" />
      <Text style={{ marginLeft: 5, color: 'gray' }}>Comment</Text>
    </Pressable>

    <Pressable  style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
    <FontAwesome name="share" size={20} color="gray" />
    <Text style={{ marginLeft: 5, color: 'gray' }}>Share</Text>
  </Pressable>
  </View>
</View>

</View>
        </View>

      
        <View style={styles.fakePost}>
          <View style={styles.postHeader}>
            <Image  
              source={{ uri: "https://media.istockphoto.com/id/1455061462/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A1-%E0%B9%82%E0%B8%81%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AE%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B9%80%E0%B8%8B%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=tg91D3ZcBcvLlnMpZMSSPt3nOpzuANbA3LnNQb0jfwI="}} 
              style={styles.postAvatar}  
            />
            <View>
              <Text style={styles.postName}>Nattawut Wannasukk</Text>
              <Text style={styles.postTime}>1 hour ago · 🌎</Text>
            </View>
          </View>
          <Text style={styles.postText}>โพสต์ที่สองก็มีหัวโปรไฟล์เหมือนกันแล้วครับ!</Text>
          <Image  
            source={{ uri: "https://image.springnews.co.th/uploads/images/contents/w1024/2023/03/Be7kcUQSNFF8HyZUhbAW.webp?x-image-process=style/lg-webp" }} 
            style={styles.postImage}  
          />
          <View style={{ padding: 10 }}>

  <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
    <FontAwesome name="thumbs-up" size={16} color="#0866FF" /> {likes} Likes
  </Text>

  <View style={{ borderTopWidth: 1, borderColor: '#eee', paddingTop: 10, flexDirection: 'row' }}>
    <Pressable 
      onPress={() => setLikes(likes + 1)} 
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        opacity: pressed ? 0.5 : 1,
        flex: 1,
        justifyContent: 'center'
      })}
    >
      <FontAwesome name="thumbs-o-up" size={20} color={likes > 0 ? "#0866FF" : "gray"} />
      <Text style={{ marginLeft: 5, color: likes > 0 ? "#0866FF" : "gray", fontWeight: 'bold' }}>
        Like
      </Text>
    </Pressable>
    
  
    <Pressable style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <FontAwesome name="comment-o" size={20} color="gray" />
      <Text style={{ marginLeft: 5, color: 'gray' }}>Comment</Text>
    </Pressable>

    <Pressable  style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
    <FontAwesome name="share" size={20} color="gray" />
    <Text style={{ marginLeft: 5, color: 'gray' }}>Share</Text>
  </Pressable>
  </View>
</View>

</View>
       
        

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  contentContainer: { paddingBottom: 50 },
  header: { height: 200 },
  coverPhoto: { height: 150, backgroundColor: '#ddd' },
  profileImageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 75,
  },
  profileImage: { width: 120, height: 120, borderRadius: 60},
  infoSection: { paddingHorizontal: 20, alignItems: 'flex-start' },
  userName: { fontSize: 24, fontWeight: 'bold' },
  bio: { fontSize: 14, color: 'gray', marginVertical: 5 },
  buttonRow: { flexDirection: 'row', marginTop: 15, width: '100%' },
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
  postSection: { paddingBottom: 20 },
  fakePost: { marginHorizontal: 0, marginBottom: 10, paddingVertical: 10, backgroundColor: '#f0f2f5' },
  postHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginBottom: 10 ,paddingTop:20 },
  postAvatar: { height: 40, width: 40, borderRadius: 20,marginBottom:20  },
  postName: { marginLeft: 10, fontWeight: 'bold', color: 'black'},
  postTime: { marginLeft: 10, fontSize: 12, color: 'gray' },
  postText: { paddingHorizontal: 15, marginBottom: 10, color: 'black' },
  postImage: { height: 350, width: '100%' },
  actionButton: {
  flex: 1, 
  flexDirection: 'row', 
  justifyContent: 'center', 
  alignItems: 'center',
  paddingVertical: 5,
},
});