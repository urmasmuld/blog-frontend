import styled from "styled-components";

export const PostCardImage = styled.div<{ image: string }>`
    background: url(${ props => props.image });
    background-size: cover;
    background-position: center center;
    height: 236px;
    width: 100%;
    border-radius: 10px 10px 0 0;
`;

export const PostCardBody = styled.div`
    font-size: 16px;
    line-height: 22px;
    color: #7B8591;
    text-align: left;
    padding: 38px 37px;
    height: 235px;
    text-overflow: ellipsis;

    p {
        max-height: 88px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    overflow: none;
`;

export const PostCategory = styled.h2`
     color: #33439B;
     font-size: 11px;
     line-height: 15px;
     letter-spacing: 2px;
`;

export const PostHeader= styled.h4`
     color: #303336;
     font-size: 28px;
     line-height: 37px;
     margin-top: 11px;
     margin-bottom: 19px;
`;

