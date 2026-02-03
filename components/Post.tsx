import { Text, View, Image, Pressable, Share } from "react-native";
import { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

type PostProps = {
  name: string;
  caption: string;
  Profile_url: string;
  Post: string;
};

export function Post({ name, caption, Profile_url, Post }: PostProps) {
  const [like, setLike] = useState(0);



  return (
    <View style={{ backgroundColor: "white", padding: 15, marginBottom: 10 }}>
      {/*โปรไฟล์ กับ ชื่อ */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <Image source={{ uri: Profile_url }} style={{ width: 45, height: 45, borderRadius: 25 }} />
        <Text style={{ fontSize: 16, fontWeight: "700", marginLeft: 10 }}>{name}</Text>
      </View>

      {/* แคปชั่นไม่รู้แคปหมูแน่นอน */}
      <Text style={{ marginBottom: 10 }}>{caption}</Text>

      {/* โพสต์*/}
      <Image source={{ uri: Post }} style={{ width: "100%", height: 300, borderRadius: 10 }} />

      {/* ปุ่ม Like, Comment, Share */}
      <View style={{ flexDirection: "row", marginTop: 15, borderTopWidth: 1, borderColor: "#eee", paddingTop: 10 }}>
        <Pressable onPress={() => setLike(like + 1)} style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <FontAwesome6 name="thumbs-up" size={20} color={like > 0 ? "#0866FF" : "gray"} />
          <Text style={{ marginLeft: 5, color: like > 0 ? "#0866FF" : "gray" }}>{like} Like</Text>
        </Pressable>
        
        <Pressable style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <FontAwesome6 name="comment" size={20} color="gray" />
          <Text style={{ marginLeft: 5, color: "gray" }}>Comment</Text>
        </Pressable>

        <Pressable style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <FontAwesome6 name="share" size={20} color="gray" />
          <Text style={{ marginLeft: 5, color: "gray" }}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}