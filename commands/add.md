<!--
Adds the npm package for a published library to your workspace, and configures
the project in the current working directory (or the default project if you are
not in a project directory) to use that library, as specified by the library's schematic.
For example, adding `@angular/pwa` configures your project for PWA support:
```bash
ng add @angular/pwa
```

The default project is the value of `defaultProject` in `angular.json`.
-->
npm 코드저장소에 배포된 npm 패키지를 워크스페이스에 추가하고, 현재 작업중인 디렉토리에 있는 프로젝트나 기본 프로젝트에 라이브러리를 사용할 수 있도록 라이브러리 스키매틱에 정의된 환경설정 동작을 실행합니다.
예를 들어 프로젝트에 PWA 지원 기능을 추가하려면 다음 명령을 실행해서 `@angular/pwa`를 추가하면 됩니다:

```bash
ng add @angular/pwa
```

기본 프로젝트는 `angular.json` 파일의 `defaultProject` 프로퍼티에 지정된 프로젝트입니다.
