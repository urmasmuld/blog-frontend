import React from 'react';
import Card from '../../components/card/Card';
import View from '../../components/view/View';
import styled from "styled-components";
import PostCard from '../../components/postCard/PostCard';


const ListItem = styled.div`
  margin: 14px;
  p {
    padding: 10px;
  }
`;

export default function PostsView() {
  // [0,1,2,3,4,5,6,7,8,9]
  const list = Array.from(Array(10).keys());
  const PostList= [
    {
      title: 'Post title',
      text: 'In volutpat nulla metus, id laoreet dui ornare ut. Etiam nec odio vitae turpis vestibulum vulputate at non ligula. Vestibulum consectetur mi rhoncus diam congue interdum. Nullam eu laoreet massa, quis facilisis ligula. Suspendisse potenti.',
      category: 'Travel',
      image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F130624175338-50-surf-spots-wavepool.jpg'
    },
    {
      title: 'Post title',
      text: 'In volutpat nulla metus, id laoreet dui ornare ut. Etiam nec odio vitae turpis vestibulum vulputate at non ligula. Vestibulum consectetur mi rhoncus diam congue interdum. Nullam eu laoreet massa, quis facilisis ligula. Suspendisse potenti.',
      category: 'Travel',
      image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F130624175338-50-surf-spots-wavepool.jpg'
    }
  ];

    return(
      <View>
        <h2>Posts Page</h2>
        {PostList.map((post,index)=>
          <ListItem>
            <PostCard {...post} key={index}/>
          </ListItem>
        )}
      </View>
    );
}