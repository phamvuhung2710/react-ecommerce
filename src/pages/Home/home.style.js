import { ButtonLink } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const Background = styled.div`
  background-color: #fef9f3;
  height: calc(100vh - 80px);
  color: #342e48;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`

export const MainLeft = styled.div`
  flex: 1;
  margin: auto 0;
`

export const MainRight = styled.div`
  flex: 1;
  margin: auto 0;
`

export const Title = styled.div`
  margin: 0 2rem 6rem 0;
  color: #342e48;
  font-weight: bold;
  font-size: 6rem;
`

export const TitleHighLight = styled.span`
  display: inline-block;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    to bottom,
    #ffc371 0%,
    #ffc371 51%,
    #ff7a93 100%
  );
`

export const Description = styled.div`
  margin: 0 2rem 10rem 0;
  font-size: 1.6rem;
  line-height: 1.4;
  color: #766972;
`

export const ShopNow = styled(ButtonLink)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 5rem;
  border-radius: 2rem;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  display: block;
  background-image: linear-gradient(
    75deg,
    #ffc371 0%,
    #ff7a93 51%,
    #ff7a93 100%
  );
  &:hover {
    background-image: linear-gradient(
      25deg,
      #ffc371 0%,
      #ff7a93 51%,
      #ff7a93 100%
    );
    background-position: right center;
  }
`

export const NameButton = styled.p`
  font-weight: 500;
`

export const IconButton = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  margin-left: 0.7rem;
`

export const CircleMain = styled.div`
  object-position: top;
  position: relative;
  width: 60rem;
  height: 60rem;
  border-radius: 50%;
  background-image: linear-gradient(
    to right,
    #ffc371 0%,
    #ffc371 25%,
    #ff7a93 100%
  );
  box-shadow: 20px 20px 100px 0px #ff7a93, -20px -20px 100px 0px #ffc371,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`

export const FlashHeart = styled.img`
  width: 12%;
  transform: rotate(15deg);
  position: absolute;
  top: 0;
  right: 0;
`

export const FlashComment = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27rem;
  height: 10rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 1.5rem;
  position: absolute;
  bottom: 40%;
  right: -15rem;
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 /20%);
`

export const FlashCommentAvatar = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`

export const FlashCommentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const FlashCommentTitle = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`

export const FlashCommentDetail = styled.div`
  margin-left: 1rem;
`

export const FlashCommentContent = styled.div`
  margin: 3px 0 9px;
`

export const FlashCommentStar = styled.div``

export const FlashCommentStarIcon = styled.i`
  color: #fbca6e;
  margin-right: 5px;
`

export const FlashMessage = styled.div`
  width: 7rem;
  height: auto;
  background-color: #fff;
  padding: 1rem 0.5rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform: rotate(-15deg);
  position: relative;
  &:before {
    content: '';
    border-top: 12px solid #fff;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    position: absolute;
    top: 99%;
    right: 15px;
    width: 0;
    height: 0;
  }
`

export const FlashMessageLine = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 1rem;
  background: linear-gradient(
    135deg,
    rgba(247, 203, 176, 1) 35%,
    rgba(253, 131, 144, 1) 100%
  );
  margin-bottom: 0.5rem;

  &:nth-child(2) {
    width: 75%;
  }

  &:nth-child(3) {
    width: 50%;
    margin-bottom: 0;
  }
`

export const FlashDelivery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 7rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 1.5rem;
  position: absolute;
  bottom: 20%;
  left: -10%;
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 /20%);
`

export const FlashDeliveryIcon = styled.img`
  width: 20%;
`

export const FlashDeliveryText = styled.p`
  margin-left: 1rem;
  font-weight: 500;
`

export const ProductList = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const FoodGirl = styled.img`
  object-fit: cover;
  width: 100%;
  height: 120%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`
