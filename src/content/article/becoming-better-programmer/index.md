---
title: "프로그래머로서의 성장을 도왔던 태도들"
date: 2018-05-06T09:00:00+09:00
description: "저를 더 나은 프로그래머로 만들어 주었던 태도들에 대해 이야기합니다."
tags:
  - 학습
  - meta
---

프론트엔드 개발 공부에 대한 질문을 종종 받는다. 그럴 때마다 당황해서 제대로 된 답변을 못 드린다. 사실 길지 않은 경력임에도 처음에 어떻게 공부를 시작했는지 기억이 잘 안 난다. 어떤 리소스를 주로 참고하냐고 물어도 1. 각 기술의 공식문서를 본다 2. MDN 자주 본다 3. 기술 뉴스레터 몇 개를 받아본다 정도. 계속 성장하고 있다 느끼지만 그 성장이 구체적으로 어떻게 이루어지는지 평소에 의식을 잘 못 하고 있는 것도 같다.

“프로그래밍 공부 시작 5단계! 이렇게만 하면 당신도 실무 프론트엔드 프로그래머!” 류의 글을 잘 쓸 자신은 없고, 내가 할 수 있는 이야기를 해보려 한다. 라이브러리, 학습 경로 선택 등의 구체적인 의사 결정에서 한 발짝 물러선, 태도 내지는 자세에 대한 이야기다. ‘이렇게 하면 100% 도움이 된다!’라기보다는 ‘나한텐 이런 태도들이 도움이 되었다’에 가깝다. 프론트엔드 개발이 보다 일반적인 프로그래밍과 크게 다르지 않다고 생각하므로, 프론트엔드에 한정된 이야기는 아님을 미리 밝힌다.

글을 시작하기 앞서, 이 글에서 다룰 태도를 가지게 되는 데에 큰 영향을 준 세 글을 감사한 마음과 함께 소개한다. 모두 처음 마주한 지 년 단위의 시간이 지났음에도 아직 단어 선택까지 머릿속에 선명히 남아 있는 글들이다. (순서는 글 길이의 역순)

- 서상현 님의 [2015년 3월 23일 페이스북 포스팅](https://www.facebook.com/sanxiyn/posts/10206552188552146)
- 홍민희 님의 [소프트웨어는 녹이 슨다](https://blog.hongminhee.org/2014/04/13/82482810330/)
- 김창준 님의 [프로그래밍 언어 배우기의 달인](http://agile.egloos.com/5664879)

## 이론과 실습 사이의 핑퐁

프로그래밍 언어를 배운다고 하자. A는 코드는 한 줄도 짜지 않고 스펙을 처음부터 끝까지 전부 읽는다. 한참 후 스펙 읽기를 마쳤지만 간단한 프로그램 하나를 짜는데도 고생한다. 반면 B는 기본 문법만 배운 후 곧바로 문서를 치우고 프로그래밍에 들어간다. 높은 확률로, 문서를 한 번만 읽었어도 안 했을 고생을 헤쳐나가느라 엄청난 시간을 쓰게 된다.

효율적인 학습을 위해선 A나 B처럼 이론과 실제 코딩 중 한쪽으로 치우치는 것보다는 이론적인 배경을 쌓는 공부와 그렇게 쌓은 지식을 활용하는 실습, 두 상태를 빠르게 오가는 것이 도움이 된다. 이렇게 학습의 단계를 잘게 나누는 것이 도움이 되는 이유는 크게 두 가지 정도다.

먼저 **짧은 주기의 반복을 통해 빠른 피드백을 얻을 수 있다**. 피드백을 통해 잘못된 결정 – 실제로 뭔가 만들려고 봤더니 잘못된 부분을 보고 있었다든지, 이 도구가 사실 내가 풀려는 문제에 대한 해결책을 제시하는 솔루션이 아니라든지 등 – 으로부터 빠르게 복구하고 다른 방향을 향할 수 있다. 이런 피드백은 빠르게 일어날수록 더 많은 낭비를 방지할 수 있다.

둘째로, 이론 – 실습 주기를 한 번 반복 할 때마다 **돌아올 수 있는 체크포인트가 생긴다**. git의 커밋을 생각하면 쉽다. 학습에 있어 주도적으로 이런저런 시도를 해보는 과정은 필수적이다. 게임에서도 체크포인트가 촘촘히 있으면 도전적인 플레이가 가능하듯, 아무리 큰 실수를 해도 돌아올 수 있는 지점이 가까이 있다는 심리적 안정감이 제공되면 더 대범하게 다양한 시도를 해보며 학습할 수 있다.

앞서 언급한 두 가지 장점을 극대화하기 위해서는 각 이론 – 실습 주기를 끝낸 시점에서 늘 통합 테스트가 가능하도록 학습의 단계를 설계해야 한다. 다르게 표현하자면, 이론을 배우고 해당 이론을 이용해 무언가를 구현했을 때, 구현해낸 결과물이 ‘동작하는’ 상태여야 한다.

![Minimum Viable Product](https://s3.ap-northeast-2.amazonaws.com/ahnheejong.name-articles/becoming-better-programmer/mvp.png)
[이미지 출처](https://blog.deming.org/2014/11/minimal-viable-product/)

전통적인 MVC 구조의 프로젝트를 짜면서 작업을 다음과 같이 나누었다고 생각해보자.

1. 모델을 짜는 단계
2. 컨트롤러를 짜는 단계
3. 뷰를 짜는 단계

이런 식으로 작업을 나눈다면 위에서 언급한 장점들이 무색해진다. 1, 2 단계가 끝난 시점에서는 여전히 내가 제대로 짰는지에 대한 피드백을 얻을 수 없기 때문이다. 뷰까지 만들어지기 전에는 현 상태의 코드가 ‘동작하는’ 코드인지 확인할 수 없으므로, 실제로는 단계를 나누지 않은 것과 크게 다를 바가 없다. 그 대신 아래처럼 단계를 나눈다면 단계별로 프로그램이 잘 동작하는지 확인 해 나가며 조금씩 개선할 수 있을 것이다.

1. 가장 간단한 MVC 구조를 만족하는 단계
2. 모델의 삭제, 수정을 추가하는 단계
3. 인증 로직을 추가하는 단계

### MVP 잘 설정하기

위에서 한 이야기를 다르게 표현하자면, 이론과 실제 코딩 양쪽에서의 MVP(Minimum Viable Product)를 영리하게 설정해야 한다는 것이다. 즉 ‘어디서 끊어야 하는지’를 알아야 한다. 항상 다음 두 질문을 떠올리자.

- 이 이론(언어, 라이브러리, 패턴)을 사용해 만들어 낼 수 있는 **가장 단순하되 실질적인 쓸모가 있는 기능**은 어떤 게 있을까?
- 그 기능을 만들기 위해 알아야 하는 **최소한의 지식**(언어 문법, 라이브러리 API, 패턴의 구성 요소)은 어느 정도일까?

널리 알려진 MVP로는 위 글에서 소개된 단어 세기(word count) 프로그램, 웹 프론트엔드 쪽의 TodoApp 등이 있다. 개인적으로 프로그래밍을 시작할 때 구현했던, 터미널에서 돌아가는 2048 게임도 좋은 예시인 것 같다. 학습하려는 도구에 맞는 MVP를 찾는 데에는 관련 분야의 경험이 쌓임에 따라 생기는 ‘감’이 많은 도움이 된다.

## 배움에 열린 태도로는 부족하다

배움에 열린 태도는 당연히 깔고 들어가야 할 조건일 뿐, 충분치 않다. 평범한 개발자인 내가 배우기 위한 만반의 준비를 갖추었다고 남들이 찾아와서 본인의 시간과 노력을 들여가며 가르침을 줄 가능성은 극히 낮다. 배움에 열린 것으론 부족하다. 배움을 적극적으로 찾아야 한다.

### 코드 리뷰

코드 리뷰가 꼭 회사에서만 이루어져야 한다는 법은 없다. 오픈 소스 프로젝트에 쓸만한 기여할 거리를 찾아 풀 리퀘스트를 날린다면 해당 프로젝트의 메인테이너들에게 코드 리뷰를 받을 수 있다. 또한 개인적으로 작성한 코드도 코드 리뷰를 받을 수 있다.

예를 들어, 나는 알고리즘 공부를 시작하며 러스트를 배워서 작성했는데 [한국 러스트 사용자 그룹](https://rust-kr.org/)의 IRC 채널에서 다른 프로그래머분들께 리뷰를 요청해 여러 유용한 조언을 얻고 심지어는 [풀 리퀘스트](https://github.com/heejongahn/daily-BOJ/pull/1)까지 받을 수 있었다.

원해서든 원치 않아서든 코드 리뷰를 받을 상황에 놓였다면, 코드에 대한 비판은 사람에 대한 비판이 아니라는 점을 유념해야 한다. 코드에 대한 정당한 지적을 개인을 향한 공격이 아닌 더 나은 코드를 위한 발판으로 삼을 수 있는 사람은 그렇지 않은 이보다 훨씬 빠르게 성장할 수 있다. 또한, 시간과 노력을 내어 내 코드를 개선할 방법을 같이 고민해준 리뷰어에게 존중과 감사를 표하는 것을 잊지 말자.

### 표준 라이브러리 / API 읽어 보기

때로는 코드를 작성하는 것보다 코드를 읽는 과정에서 훨씬 많은 것을 배울 수 있다. 이 때 유명한 라이브러리나 언어의 소스 코드, 그리고 표준 라이브러리를 비롯한 API는 쉽게 접근 가능한 좋은 소스다.

사용자의 입장에서 언어의 표준 라이브러리, API를 바라보면 ‘와 편하다’ ‘으 불편하네’ 정도의 감상에서 그치기 쉽다. 하지만 충분히 사용자가 많은 언어, 라이브러리는 그 자체로 오랫동안 수많은 사용자의 요구와 시대적 환경을 반영하며 발전해온 결과물이다.

실용적인 용도로 언어나 라이브러리 문서를 볼 때는 보통 ‘어떻게’를 많이 생각하게 되는데, 학습을 위해 소스나 API를 볼 때는 ‘왜’를 생각하는 것이 도움이 된다.

- 왜 표준 라이브러리를 이렇게 디자인 했을까?
- 왜 이 API는 인자를 이런 순서로 받을까?
- 왜 추상화 레벨을 이 정도로 정했을까?

하다못해 어떤 API가 못난 모습을 하고 있는 게 과거의 잘못된 선택으로 인해 생긴 레거시라는 사실을 알게 되더라도, 그로부터 별 것 아닌 듯 보이는 선택이 끼칠 수 있는 영향력에 대해 배울 수 있을 것이다.

## 세상은 변하고 사람들은 틀린 말을 한다

더 나은 프로그래머가 되는 데에 다음 두 가지 변치 않을 사실을 기억하는 것이 도움이 된다. 세상은 변하고, 사람들은 틀린 말을 한다.

### 세상은 변한다

> 코드는 적게 짤수록 좋고, 코드를 짜지 않고도 할 수 있으면 더욱 좋다.

왜냐고?

> 소프트웨어는 가만 냅두면 녹이 슨다.

왜냐고?

세상이 변하기 때문이다. 모든 소프트웨어는 특정한 가정의 집합 위에 세워진다.

- 프로그램을 짜는 데에는 알파벳을 포함해 127개의 문자면 충분할 것이다.
- 프로그램은 32비트 운영체제 위에서 돌아갈 것이다.
- …
- 자바스크립트는 브라우저에서 간단한 작업을 하는 데나 필요한 언어고, 따라서 이 정도 정합성이면 충분하다.

이런 가정 중 굉장히 많은 수는 현시점의 세상의 모습을 반영한다. 하지만 시간이 지나면서 세상은 변하고, 언젠가 당연하게 여겨졌던 가정이 자연스레 깨진다. 회사에서 지금 요청된 그 요구사항이 한 달 후에 바뀌지 않을 가능성은 얼마나 될까? 만약 바뀐다면 어느 정도 수준에서 바뀌게 될까? 같은 노력을 들이되, 나중에 갑작스런 변경사항이 닥쳤을 때 일을 쉽게 만들어 줄 방식으로 코드를 짤 수 없을까?

개인적으로 언어의 기능만을 이용해서 쉽게 구현할 수 있는 일에 써드파티 라이브러리를 사용하는 걸 싫어하는 것도 이런 이유에서다. 시시각각 바뀌는 세상 속에서 프로그램이 오래 동작하기 위해선 그 모든 구성 부품이 변화에 기민하게 대응해야 한다. 한데 프로그램이 의존하는 써드파티 라이브러리의 수가 늘수록 그러기가 기하급수적으로 어려워진다. 라이브러리가 제공하는 편리함에는 채무증서가 따라온다.

물론 변화에 대비하는 작업은 공짜가 아니다. 나중에 고생할 걸 알면서도 당장 급한 불을 끄기 위해 경직된 코드를 눈감아야 할 때도 있는 법이다. 당장 내일 배포를 해야 하는데 일주일 동안 리팩토링만 하고 있을 순 없다. 하지만 가깝든 멀든 변화가 있으리라는 것을 늘 인식하는 사람과 그렇지 않은 사람이 짜는 코드, 내리는 결정은 분명 다르다.

### 사람들은 틀린 말을 한다

사람들은 틀린 말을 한다. 의도적으로 그러는 경우도 있고, 의도치 않게 그러는 경우도 많다. 사람들이 틀린 말을 한다는 그 사실에 비하면 의도가 어쨌는지는 별로 중요하지 않다. 그럼, 사람들의 틀린 말에 덜 휘둘리기 위해선 어떻게 해야 할까?

무언가 배울 때 가장 근원이 되는 소스 – 소스 코드, 언어 스펙, 라이브러리 공식 문서, 어떤 개념을 처음으로 주창한 이의 글 – 를 찾아보는 습관을 들이는 것이 한 방법이 된다. 무언가를 ‘쉽게’ ‘풀어서’ 설명해주는 블로그 글에는 필연적으로 저자의 재해석이 들어간다. 무엇을 말하고 무엇을 말하지 않을지에 대한 결정은 차치하더라도, 재해석의 단계가 깊어질수록 가장 사실에 가까운 정보로부터 무언가 어긋날 확률이 높아진다.

자동화할 수 있는 검증의 책무를 사람이 아닌 기계에게 맡기는 것 또한 도움이 된다. 사람이 ‘이 풀 리퀘스트는 기존의 기능을 깨먹지 않았습니다’고 말하는 것을 믿는 대신, 자동화된 회귀 테스트가 검증하게 한다. 문서에 적힌 ‘이 함수를 이런 파라미터를 받습니다’라는 정보를 믿기보다는 정말 그러한지, 혹 잘못 사용하고 있는 곳은 없는지 타입 체커가 자동으로 검사하게 만들면 더 안심할 수 있다.

신뢰는 아름다운 가치다. 하지만 더 견고한 프로그램을 위해서 프로그래머는 스스로 검증하지 않은 정보를 함부로 믿지 않고, 다른 프로그래머와 사용자를 올바르게 의심할 줄 알아야 한다. 최선을 바라되, 최악을 대비하는 태도를 견지하자.

## 세상은 넓고 나는 작지만 내가 할 수 있는 일이 있다

마지막으로 가장 중요하다고 생각하는 내용이다. **어차피 학습에 있어 병목은 나의 시간, 에너지, 이해력이지 외부 정보량이 아니다.** 따라서 더 많은 소스 확보가 아니라 큐레이션에 집중해야 한다. 들어오는 정보량이 얼마나 많은지는 중요하지 않은 경우가 많으므로, 인터넷에 올라오는 모든 링크를 읽고 모든 라이브러리에 별을 찍기 위해 집착할 필요가 없다.

수천, 수만 명이 있는 페이스북 그룹에 아무리 많이 가입해봐야 신호대잡음비만 낮아질 뿐, 어차피 모든 구성원과 소통할 수 없다. 뉴스레터 100개를 구독하는 것은 결국 아무 뉴스레터도 읽지 않고 메일함에 쌓이게 내버려 두는 지름길이다. 관심사를 공유하고 열정적인 동료 한 명으로부터 수천 명짜리 그룹에게 받을 수 있는 것 이상의 도움을 받을 수 있다.

그런 좋은 동료를 만나는 데에는 분명 운도 많이 작용한다. 하지만 노력으로 만들 수 있는 변화도 분명 있다. 많은 방법 중 특히 스스로 먼저 좋은 친구가 되려 노력하는 것이 도움이 된다고 생각한다. 내가 원하는 동료를 생각하고, 남들에게 그런 동료가 되기 위해선 어떻게 할 수 있을지 생각해보면 자연스레 **‘다른 이를 돕고, 고통을 덜어줄 방법이 뭐가 있을까?’**를 고민하게 된다.

어떤 기술을 공부하는데 한국어로 된 자료가 없어 고생했다면, 그 공부한 내용을 한국어로 써보는 건 어떨까? 어떤 라이브러리 때문에 고생했다면, 다음 사람을 위해 그 버그를 픽스하는 작업을 해서 풀 리퀘스트를 날려보는 것도 좋을 것이다. 너무 좋은 아티클이 있는데 언어의 장벽으로 못 읽을 사람들이 생각난다면 저자의 허락을 얻어 번역할 수도 있겠다.

오늘날 대부분의 프로그래머는 고생하며 얻은 귀중한 경험과 지식을 공유하고, 남의 고생을 덜어주고, 얻기 이전에 가치 있는 것을 남들에게 나누어 주려 노력하는 이들에게 빚지고 있다. **그런데 받기만 하는 입장에서 주기도 하는 입장으로 가기 위해 넘어야 할 문턱은 생각보다 높지 않다.** 그 과정에서 나의 성장을 얻을 수 있음은 물론이고, 어느 순간 커뮤니티에게 주는 것보다 더 많은 것을 받고 있는 자신을 발견할 수 있을 것이다.

## 맺으며

글을 맺으려니 너무 추상적인 이야기를 많이 한 것 같다. 구체적인 이야기를 하는 사람은 많으니 이런 글도 하나쯤 있어도 괜찮지 않을까 하는 마음으로 공개하기로 했다. 그렇게 생각하는 사람도 없겠지만 어떤 정답을 제시하려 한 것은 아니다. 어차피 왕도는 없다. 좋은 프로그래머가 되기 위해서는 당연히 많이 짜고 많이 읽고 많이 고민해야 한다.

이 글에선 내가 그 노력을 들일 방향을 잡는데에 도움을 주었던 태도를 정리해 보려 노력했다. 프로그래밍을 시작했을 때, 허허벌판에 던져진 듯 모든 것이 막막하게 느껴졌다. 그 시절 이정표가 되어 주던 수많은 선배들의 글들을 졸음을 깨워줄 커피를 찾듯 즐겨찾기 등록, 뉴스레터 구독 해가며 찾아 읽던 기억이 난다. 그만큼은 아니더라도, 누군가에게 도움이 된다면 더 바랄 것이 없겠다.