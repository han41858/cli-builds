<!--
The command can be used to build a project of type "application" or "library".
When used to build a library, a different builder is invoked, and only the `ts-config`, `configuration`, and `watch` options are applied.
All other options apply only to building applications.

The application builder uses the [webpack](https://webpack.js.org/) build tool, with default configuration options specified in the workspace configuration file (`angular.json`) or with a named alternative configuration.
A "production" configuration is created by default when you use the CLI to create the project, and you can use that configuration by specifying the `--configuration="production"` or the `--prod` option.

The configuration options generally correspond to the command options.
You can override individual configuration defaults by specifying the corresponding options on the command line.
The command can accept option names given in either dash-case or camelCase.
Note that in the configuration file, you must specify names in camelCase.

Some additional options can only be set through the configuration file,
either by direct editing or with the `ng config` command.
These include `assets`, `styles`, and `scripts` objects that provide runtime-global resources to include in the project.
Resources in CSS, such as images and fonts, are automatically written and fingerprinted at the root of the output folder.

For further details, see [Workspace Configuration](guide/workspace-config).
-->
"애플리케이션" 타입이나 "라이브러리" 타입 프로젝트를 빌드합니다.
이 중 라이브러리를 빌드하면 애플리케이션을 빌드하는 것과는 다른 빌더가 실행되면서 `ts-config`, `configuration`, `watch` 옵션만 적용됩니다.
다른 옵션은 애플리케이션을 빌드할 때만 적용됩니다.

애플리케이션 빌더는 [webpack](https://webpack.js.org/)을 사용하며, 기본 환경설정은 워크스페이스 환경설정 파일 `angular.json` 파일에 지정되어 있습니다.
빌드 대상 중 "projection" 환경설정은 Angular CLI로 프로젝트를 생성했을 때 기본으로 구성되는 빌드 대상입니다.
`ng build` 명령을 실행할 때 `--configuration="production"` 옵션을 붙이거나 `--prod` 옵션을 붙이면 이 빌드 대상을 빌드합니다.


환경설정 파일에 있는 옵션들은 커맨드라인에서도 사용할 수 있도록 옵션 형태로도 제공됩니다.
그래서 환경설정 파일에 설정된 값을 커맨드라인에서 오버라이드할 수 있습니다.
이 때 옵션의 이름은 대시-케이스(dash-case) 이거나 캐멀 케이스(camelCase)를 사용할 수 있습니다.
환경설정 파일에서는 옵션의 이름을 캐멀 케이스로만 사용할 수 있다는 것에 주의하세요.

환경설정 파일을 직접 수정하거나 `ng config` 명령으로만 지정할 수 있는 옵션도 몇가지 있습니다.
실행 시점에 사용될 전역 리소스를 지정하는 `assets`, `styles`, `scripts` 옵션들이 이런 옵션에 해당합니다.
리소스로 사용되는 CSS 파일, 이미지 파일 폰트 파일의 이름 뒤에는 구분문자열(fingerprint)이 자동으로 추가됩니다.

자세한 내용은 [워크스페이스 환경설정](guide/workspace-config) 문서를 참고하세요.
