import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostCard from '../components/postCard/PostCard';
// import { Template } from 'webpack';

export default {
    title: 'Post Card',
    component: PostCard,

    argTypes: {
        image: { type: 'string' },
        category: { type: 'string' },
        title: { type: 'string' },
        text: { type: 'string' },       
    }
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (props) => <PostCard {...props}/>

export const Default = Template.bind({});

Default.args = {
    title: 'Post title',
    text: 'In volutpat nulla metus, id laoreet dui ornare ut. Etiam nec odio vitae turpis vestibulum vulputate at non ligula. Vestibulum consectetur mi rhoncus diam congue interdum. Nullam eu laoreet massa, quis facilisis ligula. Suspendisse potenti.',
    category: 'Travel',
    image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F130624175338-50-surf-spots-wavepool.jpg'
}