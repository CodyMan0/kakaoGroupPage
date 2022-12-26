import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { sendMessage } from '../../api/ApiService';
import { getLocalStorage, TOKEN_NAME } from '../../utils/localStorage';

interface UProps {
  uuid: string[] | undefined;
}

const MessageForm = ({ uuid }: UProps) => {
  const token = getLocalStorage({ name: TOKEN_NAME });

  const onSubmit = async (data: any) => {
    await sendMessage({
      token: token,
      receiver_uuids: uuid,
      template_object: data,
    });
    // await console.log(data);
  };

  const methods = useForm({
    shouldUnregister: true,
  });
  const {
    register,
    setValue,
    formState: { errors },
  } = methods;

  const clickHandler = () => {
    setValue('object_type', 'text');
  };
  return (
    <FormProvider {...methods}>
      <Container>
        <Title>MessageForm</Title>
        <SendContent onSubmit={methods.handleSubmit(onSubmit)}>
          <InvisibleInput type="text" {...register('object_type')} />
          contentInput
          <ContextInput
            type="text"
            placeholder="제목을 입력하세요"
            {...register('text')}
          />
          buttonTitle
          <ContextInput
            type="text"
            placeholder="버튼 이름을 입력하세요"
            {...register('button_title')}
          />
          같이 보낼 링크
          <ContextInput
            type="text"
            placeholder="링크를 입력하세요"
            {...register('link.web_url')}
          />
          <Button type="submit" onClick={clickHandler}>
            보내기
          </Button>
        </SendContent>
      </Container>
    </FormProvider>
  );
};

export default MessageForm;

const SendContent = styled.form``;

const InvisibleInput = styled.input`
  display: none;
`;

const ContextInput = styled.input`
  font-size: 18px;
  font-family: 600;
  width: 100%;
  padding: 15px 29px 8px;
  margin: 15px 0px 22px 0;
  text-align: center;
  border: none;
  border-radius: 25px;
  background-color: white;
`;

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 100%;
  overflow-y: scroll;

  padding: 40px;
  min-height: 100vh;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 15%;
  right: 10%;
  width: 100px;
  height: 50px;
  background-color: rgb(38, 112, 255);
  color: #ffff;
  border-radius: 10px;
  cursor: pointer;
`;
