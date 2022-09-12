# default_next_project
default next project for enterprise

NEXT.js Framwork's Default Project Setting & Example
ver. 2022.09.11
Jaeyun Jung


# NEXT JS 실행 및 빌드 방법(22.09.12ver)

### 1. 개발자 모드로 실행:

```bash
npm run dev
# or
yarn dev
```

기본적으로 실행되는 로컬url 주소: [http://localhost:3000](http://localhost:3000) 

`pages/index.js`파일을 실행하는 것으로, 로컬 서버 가동 중에 코드가 수정되면 자동으로 반영합니다. 

### 2. 프로젝트 빌드:

```bash
npm run build
# or
yarn build
```

해당 명령어 실행 후, directory에 ".next" 빌드 파일 생성

### 3. 프로덕션 모드로 실행:

```bash
npm run start
# or
yarn start
```

.next 파일을 실행

<strong>!!프로젝트 빌드 후 .next 빌드 파일이 생성된 뒤에 실행해야 합니다!!</strong>
