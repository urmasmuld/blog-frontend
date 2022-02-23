import React from "react";
import Card from "../card/Card";
import { PostCardBody, PostCardImage, PostCategory, PostHeader } from "./PostCardStyle";

interface PostCardProps{
    image: string;
    category: string;
    title: string;
    text: string;
}

export default function PostCard(props: PostCardProps){
    // console.log("PostCard was created");
    return(
        <Card>
            <PostCardImage image={props.image}/>
            <PostCardBody>
                <PostCategory>{props.category.toUpperCase()}</PostCategory>
                <PostHeader>{props.title}</PostHeader>
                <p>{props.text}</p>
            </PostCardBody>
        </Card>
    )
}
