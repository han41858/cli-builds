<!--
Takes the name of the project, as specified in the  `projects` section of the `angular.json` workspace configuration file.
When a project name is not supplied, it will execute for all projects.

The default linting tool is [TSLint](https://palantir.github.io/tslint/), and the default configuration is specified in the project's `tslint.json` file.

**Note**: TSLint has been discontinued and support has been deprecated in the Angular CLI. The options shown below are for the deprecated TSLint builder.
To opt-in using the community driven ESLint builder, see [angular-eslint](https://github.com/angular-eslint/angular-eslint#migrating-from-codelyzer-and-tslint) README.
-->
워크스페이스 환경설정 파일 `angular.json`의 `projects` 섹션에 구성된 프로젝트 이름을 대상으로 받습니다.
프로젝트 이름이 지정되지 않으면 모든 프로젝트를 대상으로 실행합니다.

기본 린트 툴은 [TSLint](https://palantir.github.io/tslint/)이며, 이 환경설정은 `tslint.json` 파일에 구성되어 있습니다.

**참고:** TSLint는 지원이 중단되었기 때문에 Angular에서도 지원이 중단될 예정입니다. 아래 옵션들은 지원이 중단된 TSLint 빌더에 대한 내용입니다.
커뮤니티에서 유지보수하고 있는 ESLint 빌더를 적용하려면 [angular-eslint](https://github.com/angular-eslint/angular-eslint#migrating-from-codelyzer-and-tslint) README 문서를 참고하세요.
