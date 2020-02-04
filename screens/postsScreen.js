import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Image, FlatList, TouchableOpacity,Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import mountain from '../assets/mountain.jpg';
export default class PostsScreen extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      image:null
    }
  }
  componentDidMount() {
    fetch('http://192.168.43.175:8080/posts/recentPosts', {
      method: 'GET',
      headers:
      {
        'Content-Type': 'application/json',
      },
      // body:JSON.stringify(emp)
    })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson)
        this.setState({
          posts: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }
  // tryPost=()=>
  // {
  //   ImagePicker.showImagePicker({title:"pick image"},res=>
  //   {
  //     if(res.didCancel)
  //     {
  //       console.log("Cancelled")
  //     }
  //     else if(res.error)
  //     {
  //       console.log("ERR",res.error)
  //     }
  //     else{
  //       console.log("uri",res.uri);
  //       this.setState({
  //         image:res
  //       })
      //   const post={
      //     postType: "image",
      //     streamName: "Sports",
      //     pollExists: true,
      //     postContent: {
      //         text: "India vs NZ #cric",
      // image:null
      //     },
      //     postDate:"2020-02-03T14:22:03",
      //     hashtags: [{
      //         tagName: "cric"
      //     }],
      //     poll: {
      //         question: "Who will win?",
      //         choices: [{
      //             choice: "INDIA",
      //             choiceNo:1,
      //             votes: 12
      //         }, {
      //             choice: "NZ",
      //             choiceNo:2,
      //             votes: 3
      //         }]
      //     },
      //     postActivity: {
      //         auditorLikes: [{
      //             name: "a"
      //         }, {
      //             name: "b"
      //         }, {
      //             name: "c"
      //         }]
      //     }
      // };
  //       let fd=new FormData();
  //        fd.append("file",{name:res.fileName,type:res.type,uri:res.uri})
  //        fd.append("post",JSON.stringify(post));
  //       // fd.append("post","po");
  //       console.log("fd",fd);
  //       fetch("http://192.168.43.175:8080/posts/testPic",{
  //         method:"POST",
  //         body:fd
  //       }).then((response)=>response.json())
  //       .then((responseJSON)=>{console.log(responseJSON)})
  //       .then(error=>{console.log("err",error)})
  //     }
  //   });
  // }
  handlePost=item=>
  {
    console.log("pressed!",item.postId)
  }
  renderItem = ({ item }) => {
    let postView=null;
    let pollView=null;
    if(item.postType==="text")
    {
      postView=(
        <Text>{item.postContent.text}</Text>
      )
    }
    else if(item.postType=="image")
    {
      // this.setState(
      //   {
      //     image:{uri:item.postContent.image}
      //   }
      // )
      postView=(
        <View>
          <Text>{item.postContent.text}</Text>
          <Image source={{ uri: item.postContent.image }} 
            style={{ width: 400, height: 400 }} />
        </View>
      )
    }
    if(item.pollExists)
    {
      var choices=[];
      var choiceSum=0;
      for(let i=0;i<item.poll.choices.length;i++)
      {
        let choice=item.poll.choices[i];
        choiceSum+=choice.votes;
      }
      for(let i=0;i<item.poll.choices.length;i++)
      {
        let choice=item.poll.choices[i];
        choices.push(
          <View key={choice.choiceNo}>
            <TouchableOpacity style={styles.choiceContainer}>
              <Text style={{fontSize:18}}>{choice.choice}</Text>
              <View style={{alignItems:"flex-end",flex:1}}>
              <Text style={{fontSize:18,color:"blue"}}>{((choice.votes/choiceSum)*100).toFixed(2)}%</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      }
      pollView=(
        <View>
          <Text style={{fontWeight:"bold"}}>{item.poll.question}</Text>
          {choices}
        </View>
      )
    }
    return (
      <View style={styles.postContainer}>
        <TouchableOpacity onPress={()=>this.handlePost(item)}>
        {postView}
        {pollView}
        </TouchableOpacity>
      </View>
    )
  }
  keyExtractor=item=>item.postId;
  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="post" onPress={this.tryPost}/> */}
        {/* <Image source={this.state.image.uri} style={{width:250,height:250}}/> */}
        <FlatList
        data={this.state.posts}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}/>
      </View>
    )
  }z
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
  },
  postContainer:
  {
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:"#eee",
    padding:10,
    margin:10
  },
  choiceContainer:
  {
    flexDirection:"row",
    backgroundColor:"#eee",
    borderWidth:1,
    borderColor:"#bbb",
    padding:10
  }
});
