import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
    const { productId } = useParams();
    const item = productId - 1;
    console.log(productId);

    const navigate = useNavigate();

    return (
        <div>
            <h1>ProductDetailPage</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로 이동하기</button>
            <ul>
                <li>상품 번호 :{productInfos[item].id}</li>
                <li>상품 명: {productInfos[item].name}</li>
                <li>판매자 : {productInfos[item].email}</li>
                <li>상세설명 :{productInfos[item].body}</li>
            </ul>
        </div>
    );
}
