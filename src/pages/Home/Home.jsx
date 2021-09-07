import React from 'react'
import { path } from 'src/constants/path'
import * as S from './home.style'

export default function Home() {
  return (
    <S.Background>
      <S.Container className="container">
        <S.MainLeft>
          <S.Title>
            We ready to supply vegan food for you{' '}
            <S.TitleHighLight>anytime</S.TitleHighLight>
          </S.Title>
          <S.Description>
            The food we provide is supplied directly from the our garden, we
            guarantee the quality and freshness
          </S.Description>
          <S.ShopNow to={path.product}>
            <S.NameButton>Shop now</S.NameButton>
            <S.IconButton className="fas fa-chevron-circle-right"></S.IconButton>
          </S.ShopNow>
        </S.MainLeft>
        <S.MainRight>
          <S.CircleMain>
            <S.FoodGirl src="/img/girl-foody.png" />
            <S.FlashHeart src="/img/heart.png" />
            <S.FlashComment>
              <S.FlashCommentAvatar>
                <S.FlashCommentImage src="/img/avatar.png" />
              </S.FlashCommentAvatar>
              <S.FlashCommentDetail>
                <S.FlashCommentTitle>Quân kun</S.FlashCommentTitle>
                <S.FlashCommentContent>
                  Món ngon hợp túi tiền
                </S.FlashCommentContent>
                <S.FlashCommentStar>
                  <S.FlashCommentStarIcon className="fas fa-star" />
                  <S.FlashCommentStarIcon className="fas fa-star" />
                  <S.FlashCommentStarIcon className="fas fa-star" />
                  <S.FlashCommentStarIcon className="fas fa-star" />
                  <S.FlashCommentStarIcon className="fas fa-star" />
                </S.FlashCommentStar>
              </S.FlashCommentDetail>
            </S.FlashComment>
            <S.FlashMessage>
              <S.FlashMessageLine />
              <S.FlashMessageLine />
              <S.FlashMessageLine />
            </S.FlashMessage>
            <S.FlashDelivery>
              <S.FlashDeliveryIcon src="/img/clock.png" />
              <S.FlashDeliveryText>Fast delivery</S.FlashDeliveryText>
            </S.FlashDelivery>
          </S.CircleMain>
        </S.MainRight>
      </S.Container>
    </S.Background>
  )
}
