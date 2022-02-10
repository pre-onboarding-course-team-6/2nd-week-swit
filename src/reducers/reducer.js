import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOG_IN,
} from 'actions/types';

const initialState = {
  loggedInUser: {
    id: 4,
    name: '',
  },
  messages: [
    {
      userId: 1,
      userName: '정민형',
      profileImage: 'https://github.com/minbr0ther.png',
      content: '안녕하세요 저는 정민형입니다.',
      date: '2022-02-10 19:19:03',
    },
    {
      userId: 2,
      userName: '김선명',
      profileImage: 'https://github.com/BGM-109.png',
      content: '안녕하세요 저는 김선명입니다.',
      date: '2022-02-10 19:20:03',
    },
    {
      userId: 3,
      userName: '민무길',
      profileImage: 'https://github.com/gilmujjang.png',
      content: '안녕하세요 저는 민무길입니다.',
      date: '2022-02-10 19:21:03',
    },
    {
      userId: 2,
      userName: '김선명',
      profileImage: 'https://github.com/BGM-109.png',
      content: '반가워요',
      date: '2022-02-10 19:22:03',
    },
    {
      userId: 1,
      userName: '정민형',
      profileImage: 'https://github.com/minbr0ther.png',
      content: '저도 반가워요',
      date: '2022-02-10 19:23:03',
    },
  ],
};

// eslint-disable-next-line default-param-last
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state;
    case DELETE_MESSAGE:
      return state;
    case REPLY_MESSAGE:
      return state;
    case LOG_IN:
      return state;
    default:
      return state;
  }
};

export default Reducer;