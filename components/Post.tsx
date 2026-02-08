import React, { useState } from 'react'; 
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Post = ({ name, caption, Profile_url, Post, onDelete }: any) => {

  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.postContainer}>
      
      <View style={styles.header}>
        <Image source={{ uri: Profile_url }} style={styles.profilePic} />
        <View style={{ flex: 1 }}>
          <Text style={styles.userName}>{name}</Text>
        </View>
        
        {onDelete && (
          <TouchableOpacity onPress={onDelete}>
            <FontAwesome name="trash" size={20} color="#ff4d4d" />
          </TouchableOpacity>
        )}
      </View>
      
     
      <Text style={styles.content}>{caption}</Text>
      {Post ? <Image source={{ uri: Post }} style={styles.postImage} /> : null}

      {likes > 0 && (
        <View style={styles.likeCountRow}>
          <FontAwesome name="thumbs-up" size={12} color="#0866FF" />
          <Text style={styles.likeCountText}>{likes} Likes</Text>
        </View>
      )}

     
      <View style={styles.actionSection}>
        
      
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => setLikes(likes + 1)}
        >
          <FontAwesome name={likes > 0 ? "thumbs-up" : "thumbs-o-up"} size={18} color={likes > 0 ? "#0866FF" : "#65676b"} />
          <Text style={[styles.actionText, likes > 0 && {color: '#0866FF'}]}>Like</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="comment-o" size={18} color="#65676b" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="share" size={18} color="#65676b" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: { backgroundColor: 'white', marginBottom: 10, padding: 15 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  profilePic: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userName: { fontWeight: 'bold', fontSize: 16 },
  content: { fontSize: 14, marginBottom: 10 },
  postImage: { width: '100%', height: 250, borderRadius: 10 },
  
 
  likeCountRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingBottom: 5 },
  likeCountText: { marginLeft: 5, color: '#65676b', fontSize: 13 },

  actionSection: { 
    flexDirection: 'row', 
    marginTop: 5, 
    paddingTop: 10, 
    borderTopWidth: 0.5, 
    borderTopColor: '#eee',
    justifyContent: 'space-around' 
  },
  actionButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center'
  },
  actionText: { 
    marginLeft: 8, 
    color: '#65676b', 
    fontWeight: '600',
    fontSize: 13
  }
});