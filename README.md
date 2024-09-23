# 리엑트 수업


**react8**

## Context
- props로는 중간에 여러 컴포넌트를 거쳐야 하는 불편함 개선
- 할아버지 -> 손자 / 손자 -> 할아버지 이렇게 중간 단계 생략 가능

- React.createContext(기본값) : Context API를 사용하기 위해 생성하는 함수, 기본값 설정 가능
- 만약 Provider 없이 Consumer만 사용하면 createContext에서 설정한 기본값 사용 됨
- 초기값이 undefined로 설정되어 있으면 오류 발생

## 사용법:

#### Context 생성
 - const Context변수명 = React.createContext(기본값);

#### provider
- context.Provider : createContext로 생성한 변수에 값을 제공하는 컴포넌트

- value : 전달하고 싶은 값을 설정

- value 속성은 필수, value로 이름 고정

- 하나에 동시 여러개의 데이터를 저장 하려면 배열 또는 object 타입을 사용

<Context변수명.Provider value={전달하고 싶은 값}>
    {children}
</Context변수명.Provider>

#### Consumer
- context.Consumer : createContext로 생성한 변수에서 값을 사용하는 컴포넌트

- value : 전달하고 싶은 값을 설정

- value 속성은 필수, value로 이름 고정

- 콜백 함수 형태로 동작

<Context변수명.Consumer>
    {value => 사용하고 싶은 값}
</Context변수명.Consumer>

#### UseContext()
- 리액트에서 제공하는 Hooks, 선언해 놓은 컨텍스트를 쉽게 사용하도록 함

- 기존에 선언한 컨텍스트의 데이터를 쉽게 가져올 수 있음

- 사용법: const 변수명 = useContext(Context변수명);

#### zustand

- > ***hook을 사용하기 때문에 반드시 앞에 use를 붙여야 함***

- 리액트에서 사용할 수 있는 상태관리 라이브러리

- Context API 혹은 useContext와 같이 데이터를 전역 변수로 저장하고 사용을 원하는 위치에서 호출 하여 사용하는 방식

- 전역으로 동작하기 때문에 props와 상관없이 어느 컴포넌트에서든 호출 할 수 있음

- create() 를 사용하여 object 타입의 객체를 생성하고 상태 관리를 위한 key와 value를 저장함

- 상태 관리 중인 객체의 데이터를 위한 상태 변경 함수를 추가하여 외부에서 데이터를 수정할 수 있도록 함

- 단순히 데이터 전달용으로 사용 시, 데이터 수정용 함수를 추가하지 않아도 됨

- `create()` : zustand에서 제공하는 함수로 zustand 상태 관리 객체를 생성

- `set()`: 관리 중인 객체의 데이터를 수정

- 사용법:
- 설치: `npm install zustand`
- 사용법

```
import { create } from "zustand";

- const use변수명Store = create(set => ({
    변수명: '초기값',
    데이터 수정용 함수명: (newValue) => set({변수명: newValue}),
}))
```

- 사용

```
- const { 변수명, 데이터수정용함수명 } = use변수명Store();

- useEffect(() => {
    데이터수정용함수명(변경할 값);
}, [데이터수정용함수명]);
```

- 사용(출력)

```
- const {변수명, 데이터수정용함수명} = use변수명Store();

- console.log(변수명);
```

## react-router-dom 
#### SPA 방식인 리액트 프로젝트를 MPA 방식으로 사용할 수 있도록 해주는 라이브러리

- 설치: `npm install react-router-dom`

- 리액트 라우터 컴포넌트
  - BrowserRouter :
    - SPA 페이지를 MPA 페이지로 만들어지는 컴포넌트, 라우터 기본 컴포넌트
  - Routes :
    - 페이지 컴포넌트를 여러개 가질 수 있는 컴포넌트 
  - Route : 
    - 화면에 그려지는 페이지 객체, Routes 컴포넌트의 자식 컴포넌트로 Route 컴포넌트를 사용 시, 부모 Route 컴포넌트의 주소를 기본 주소로 사용함
  - path :
    - 웹 브라우저에 표시되는 url 주소를 설정
    - 절대 경로 / 상대 경로 다 사용 가능
    - '*' 사용 시 모든 페이지를 뜻함
    - ('*' 주로 에러 페이지 설정 시 사용함)
  - Link :
    - 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html의 `<a>` 태그와 같은 기능
  - to :
    - 이동할 url 주소를 설정, Route 컴포넌트의 path 속성에 입력한 url을 설정
  - Outlet : 
    - 현재 선택 된 경로의 컴포넌트를 화면에 표시

  - >쿼리스트링 방식 :  
    - 기존의 get 방식으로 웹 브라우저의 주소창에 파라미터를 함께 전달하는 방식
    - Route 컴포넌트의 path 속성의 변경이 없음
    - element 속성에서 지정한 컴포넌트에서 몇가지 옵션 사항을 사용할 수 있음
    - 옵션 :
      - pathname : 쿼리스트링을 제외한 현재 주소의 경로
      - search : 맨앞의 ? 문자를 포함한 쿼리 스트링 값 전체
      - hash : 주소의 # 문자열 뒤의 값(구형 브라우저에서만 동작)
      - state : 페이지 이동 시 임의로 추가할 상태 값
      - key : location 객체의 고유한 값

    - `useLocation()`, `useSearchParams()` 훅을 사용하여 데이터를 가져올 수 있음
    - `useLocation` 훅을 사용하여 데이터를 가져오면 원하는 파라미터 값을 가져오기 위해 직접 파싱을 해야 함
    - `useSearchParams` 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 따로 가져올 수 있음

    ### 사용법
    ```
    기존 url?파라미터1=값&파라미터2=값2
    ```
    <br>

  - >**URL파라미터 방식**
    - URL파라미터 : RestAPI 방식의 주소형태로 구성되는 파라미터
    - Route 컴포넌트의 path 속성값 뒤에 `/`와 `:파라미터명`을 사용하여 데이터를 전달하는 방식
    - rest 방식으로 구성되어 있을 경우 사용
    - 연결된 컴포넌트에서 `useParams()` 훅을 사용해야 함

    ### 사용법

    ```
    기존 url/:파라미터명1/:파라미터명2
    <Route path={url/:test1/:test2} element={<Url />} />
    ```
    <br>
  - >useNavigate() : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 훅

    ### 사용법
    ```
    const navigate = useNavigate();
    navigate(-1);
    ```
    *History 를 사용하여 이전 페이지로 이동, 음수 사용 시 이전페이지로 이동, 양수 사용 시 다음 페이지로 이동

    ```
    navigate(url);
    ```
    *지정한 URL로 이동*
    <br><br>
    ```
    <Route path={'/pages'}>
      <Route index element={<Signup/>} />
      <Route path={'logout'} element={<Logout/>} />
      <Route path={'profile2/:username/:age'} element={<Profile2/>}/>
    </Route>
    ```



  ## 리액트9
  
