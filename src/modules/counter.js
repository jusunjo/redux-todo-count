//액션 타입 정의하기
//액션타입은 대문자로 쓰고 문자열 내용은 모듈이름/액션 이름으로 작성
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기 상태 및 리듀서 함수 만들기

//초깃값
const initialState = {
    number: 0,
};

//리듀서 함수
function counter(state = initialState, action) {
    if (action.type === INCREASE) {
        return {
            number: state.number + 1,
        };
    } else if (action.type === DECREASE) {
        return {
            number: state.number - 1,
        };
    } else {
        return state;
    }
}

export default counter;
