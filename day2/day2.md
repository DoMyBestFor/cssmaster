# day2

### problem

https://100dayscss.com/days/1/

### my result

<img src="../img/day2.gif">

### study

- **css를 활용하여 menu 컴포넌트를 정중앙에 두는 방법**

1. transform과 position 활용
   예시 답안에서 해결해주고 있는 방안입니다.

```css
// absolute position의 기준이 될 컴포넌트
position: relative;

// 대상 컴포넌트
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

position을 absolute로 지정한 후에 top과 left를 50%로 설정해주면 좌측 상단 기준으로 중앙 정렬이 됩니다. 하지만 우리가 원하는 것은 컴포넌트의 무게 중심점을 기준으로 중앙 정렬이 되는 것을 원하기 때문에 translate(-50%, -50%)를 적용시켜야 합니다.

---

2. flex 사용

```css
// 부모 컴포넌트
display: flex;

// 대상 컴포넌트
margin: auto;
```

부모 컴포넌트를 flex로 두고 자식 컴포넌트의 margin을 auto로 설정하면 정중앙으로 정렬됩니다.

```css
// 부모 컴포넌트
display: flex;

// 대상 컴포넌트
justify-content: center;
align-items: center;
```

혹은 자식 컴포넌트에서 justify-content, align-items를 center로 설정하면 됩니다. justify-content와 align-items에 대해서는 아래에서 더 자세히 살펴보겠습니다.
