import { Button } from 'src/assets/styles/utils'
import Select from 'src/components/Select/Select'
import styled from 'styled-components'

export const Profile = styled.div`
  padding: 0 30px 20px;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 13%);
  border-radius: 2px;
`

export const ProfileHeader = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid #efefef;
`
export const ProfileHeaderTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  text-transform: capitalize;
`

export const ProfileHeaderSubtitle = styled.div`
  font-size: 1.4rem;
  color: #555;
  margin-top: 1rem;
  font-style: italic;
`
export const ProfileInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 30px;
`

export const ProfileLeft = styled.form`
  padding-right: 50px;
  flex-grow: 1;
`

export const ProfileRight = styled.div`
  width: 28rem;
  border-left: 1px solid #efefef;
  display: flex;
  justify-content: center;
`

export const InputLabel = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
`
export const InputLabelLabel = styled.div`
  width: 20%;
  text-align: center;
  color: rgba(85, 85, 85, 0.8);
  text-transform: capitalize;
  overflow: hidden;
  line-height: 1.5;
`

export const InputLabelContent = styled.div`
  width: 80%;
  padding-left: 2rem;
  display: flex;
  align-items: center;
`

export const DateSelect = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SelectDate = styled(Select)`
  width: 32%;
`

export const InputLabelContentText = styled.div`
  font-size: 1.4rem;
  color: #333;
  background-color: #f2f3f5;
  padding: 20px;
  border-radius: 1rem;
  width: 100%;
  cursor: not-allowed;
  /* padding-top: 1rem; */
`

export const Submit = styled.div`
  margin-bottom: 60px;
  padding-left: calc(20% + 20px);
`
export const ButtonSubmit = styled(Button)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border: 1px solid white;
  background-image: linear-gradient(
    75deg,
    #ffc371 0%,
    #ff7a93 51%,
    #ff7a93 100%
  );
  &:hover {
    background-image: linear-gradient(
      75deg,
      #ffc371 0%,
      #ff7a93 51%,
      #ff7a93 100%
    );
  }
`

export const AvatarUploader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  margin: 20px 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
export const InputFile = styled.input`
  display: none;
`
export const ButtonUpload = styled(Button)`
  height: 4rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`
export const AvatarUploaderTextContainer = styled.div`
  margin-top: 12px;
  > div {
    color: #999;
  }
`

export const ErrorMessage = styled.div`
  width: 100%;
  padding-left: calc(20% + 2rem);
`
