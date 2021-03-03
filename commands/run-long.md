<!--
Architect is the tool that the CLI uses to perform complex tasks such as compilation, according to provided configurations.
The CLI commands run Architect targets such as `build`, `serve`, `test`, and `lint`.
Each named target has a default configuration, specified by an "options" object,
and an optional set of named alternate configurations in the "configurations" object.

For example, the "serve" target for a newly generated app has a predefined
alternate configuration named "production".

You can define new targets and their configuration options in the "architect" section
of the `angular.json` file.
If you do so, you can run them from the command line using the `ng run` command.
Execute the command using the following format.

```
ng run project:target[:configuration]
```
-->
아키텍트(Architect)는 컴파일과 같이 복잡한 과정을 정해진 환경설정대로 실행할 수 있도록 Angular CLI가 실행하는 툴입니다.
`build`, `serve`, `test`, `lint`와 같은 Angular CLI 명령도 아키텍트 대상을 실행하는 것입니다.
개별 대상의 기본 환경설정은 "options" 객체에 지정하며, 추가 설정은 "configurations" 객체에 지정합니다.

예를 들면, 애플리케이션을 새로 생성하면 "serve" 대상 중 대체 환경설정이 "production"이라는 이름으로 자동 생성됩니다.

`angular.json` 파일의 "architect" 섹션을 활용하면 새로운 빌드 대상과 환경설정 옵션을 정의할 수 있습니다.
이렇게 추가한 명령은 커맨드라인에서 `ng run` 명령으로 실행하면 됩니다:

```
ng run project:target[:configuration]
```